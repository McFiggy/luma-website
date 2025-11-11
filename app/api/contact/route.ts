import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";
// Optional, but silences edge runtime issues if you use Node libs:
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      company,
      phone,
      subject,
      inquiry_type,
      message,
      form_type = "contact",
    } = body ?? {};

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email))) {
      return NextResponse.json(
        { error: "Invalid email address format" },
        { status: 400 }
      );
    }

    // Create contact submission
    const contact = await prisma.contact.create({
      data: {
        name: String(name).trim(),
        email: String(email).toLowerCase().trim(),
        company: company ? String(company).trim() : null,
        phone: phone ? String(phone).trim() : null,
        subject: subject ? String(subject).trim() : null,
        inquiry_type: inquiry_type ?? null,
        message: String(message).trim(),
        form_type,
      },
      select: { id: true, email: true, inquiry_type: true, form_type: true },
    });

    // Log
    await prisma.systemLog.create({
      data: {
        level: "info",
        message: "New contact form submission",
        data: {
          contactId: contact.id,
          email: contact.email,
          inquiry_type: contact.inquiry_type,
          form_type: contact.form_type,
        },
        source: "contact_api",
      },
    });

    return NextResponse.json(
      {
        message:
          "Contact form submitted successfully. We'll respond within 24 hours.",
        contactId: contact.id,
      },
      { status: 201 }
    );
  } catch (error) {
    // Best-effort log
    try {
      await prisma.systemLog.create({
        data: {
          level: "error",
          message: "Contact form submission failed",
          data: { error: error instanceof Error ? error.message : "Unknown" },
          source: "contact_api",
        },
      });
    } catch {}

    return NextResponse.json(
      { error: "Failed to submit contact form. Please try again later." },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page") ?? "1");
    const limit = Number(searchParams.get("limit") ?? "10");
    const status = searchParams.get("status") ?? undefined;
    const inquiry_type = searchParams.get("inquiry_type") ?? undefined;

    const skip = Math.max(0, (page - 1) * limit);
    const where: Record<string, any> = {};
    if (status) where.status = status;
    if (inquiry_type) where.inquiry_type = inquiry_type;

    const [contacts, total] = await Promise.all([
      prisma.contact.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip,
        take: limit,
        select: {
          id: true,
          name: true,
          email: true,
          company: true,
          subject: true,
          inquiry_type: true,
          status: true,
          createdAt: true,
          form_type: true,
        },
      }),
      prisma.contact.count({ where }),
    ]);

    return NextResponse.json({
      contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}
