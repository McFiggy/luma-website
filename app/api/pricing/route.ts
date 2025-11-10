
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
      volume,
      crop_type,
      location,
      timeline,
      system_interest = [],
      current_treatment,
      additional_info,
      form_type = 'pricing'
    } = body;

    // Validate required fields
    if (!name || !email || !volume || !crop_type) {
      return NextResponse.json(
        { error: 'Name, email, volume, and crop type are required fields' },
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

    // Determine priority based on volume and timeline
    let priority = 'normal';
    if (volume === 'over-50000kg' || timeline === 'immediate') {
      priority = 'high';
    } else if (volume === 'under-100kg') {
      priority = 'low';
    }

    // Create pricing request
    const pricingRequest = await prisma.pricingRequest.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        company: company?.trim() || null,
        phone: phone?.trim() || null,
        volume,
        crop_type,
        location: location?.trim() || null,
        timeline: timeline || null,
        system_interest: Array.isArray(system_interest) ? system_interest : [],
        current_treatment: current_treatment?.trim() || null,
        additional_info: additional_info?.trim() || null,
        form_type,
        priority
      },
    });

    // Log the submission
    await prisma.systemLog.create({
      data: {
        level: 'info',
        message: 'New pricing request submission',
        data: {
          requestId: pricingRequest.id,
          email: pricingRequest.email,
          volume: pricingRequest.volume,
          crop_type: pricingRequest.crop_type,
          priority: pricingRequest.priority,
          system_interest: pricingRequest.system_interest
        },
        source: 'pricing_api'
      }
    });

    return NextResponse.json(
      { 
        message: 'Pricing request submitted successfully. We\'ll send you a custom quote within 48 hours.',
        requestId: pricingRequest.id
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Pricing request submission error:', error);
    
    // Log the error
    try {
      await prisma.systemLog.create({
        data: {
          level: 'error',
          message: 'Pricing request submission failed',
          data: { error: error instanceof Error ? error.message : 'Unknown error' },
          source: 'pricing_api'
        }
      });
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }

    return NextResponse.json(
      { error: 'Failed to submit pricing request. Please try again later.' },
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
    const priority = searchParams.get('priority');
    const volume = searchParams.get('volume');

    const skip = (page - 1) * limit;

    const where: any = {};
    if (status) where.status = status;
    if (priority) where.priority = priority;
    if (volume) where.volume = volume;

    const [requests, total] = await Promise.all([
      prisma.pricingRequest.findMany({
        where,
        orderBy: [
          { priority: 'desc' },
          { createdAt: 'desc' }
        ],
        skip,
        take: limit,
        select: {
          id: true,
          name: true,
          email: true,
          company: true,
          volume: true,
          crop_type: true,
          timeline: true,
          system_interest: true,
          status: true,
          priority: true,
          createdAt: true
        }
      }),
      prisma.pricingRequest.count({ where })
    ]);

    return NextResponse.json({
      requests,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching pricing requests:', error);
    return NextResponse.json(
      { error: 'Failed to fetch pricing requests' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
