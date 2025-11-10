
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

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
      form_type = 'contact'
    } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    // Create contact submission
    const contact = await prisma.contact.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        company: company?.trim() || null,
        phone: phone?.trim() || null,
        subject: subject?.trim() || null,
        inquiry_type: inquiry_type || null,
        message: message.trim(),
        form_type: form_type
      },
    });

    // Log the submission
    await prisma.systemLog.create({
      data: {
        level: 'info',
        message: 'New contact form submission',
        data: {
          contactId: contact.id,
          email: contact.email,
          inquiry_type: contact.inquiry_type,
          form_type: contact.form_type
        },
        source: 'contact_api'
      }
    });

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully. We\'ll respond within 24 hours.',
        contactId: contact.id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    
    // Log the error
    try {
      await prisma.systemLog.create({
        data: {
          level: 'error',
          message: 'Contact form submission failed',
          data: { error: error instanceof Error ? error.message : 'Unknown error' },
          source: 'contact_api'
        }
      });
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }

    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again later.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');
    const inquiry_type = searchParams.get('inquiry_type');

    const skip = (page - 1) * limit;

    const where: any = {};
    if (status) where.status = status;
    if (inquiry_type) where.inquiry_type = inquiry_type;

    const [contacts, total] = await Promise.all([
      prisma.contact.findMany({
        where,
        orderBy: { createdAt: 'desc' },
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
          form_type: true
        }
      }),
      prisma.contact.count({ where })
    ]);

    return NextResponse.json({
      contacts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
