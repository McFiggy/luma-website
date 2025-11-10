
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingSubscriber = await prisma.newsletter.findUnique({
      where: { email: email.toLowerCase() }
    });

    if (existingSubscriber) {
      if (existingSubscriber.active) {
        return NextResponse.json(
          { message: 'Email is already subscribed' },
          { status: 200 }
        );
      } else {
        // Reactivate inactive subscription
        await prisma.newsletter.update({
          where: { email: email.toLowerCase() },
          data: { active: true, updatedAt: new Date() }
        });
        return NextResponse.json(
          { message: 'Newsletter subscription reactivated successfully' },
          { status: 200 }
        );
      }
    }

    // Create new subscription
    const subscriber = await prisma.newsletter.create({
      data: {
        email: email.toLowerCase(),
      },
    });

    // Log the subscription
    await prisma.systemLog.create({
      data: {
        level: 'info',
        message: 'New newsletter subscription',
        data: { email: subscriber.email },
        source: 'newsletter_api'
      }
    });

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    // Log the error
    try {
      await prisma.systemLog.create({
        data: {
          level: 'error',
          message: 'Newsletter subscription failed',
          data: { error: error instanceof Error ? error.message : 'Unknown error' },
          source: 'newsletter_api'
        }
      });
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }

    return NextResponse.json(
      { error: 'Failed to subscribe to newsletter. Please try again later.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get('email');

    if (!email) {
      return NextResponse.json(
        { error: 'Email parameter is required' },
        { status: 400 }
      );
    }

    // Deactivate subscription (soft delete)
    const result = await prisma.newsletter.updateMany({
      where: { 
        email: email.toLowerCase(),
        active: true
      },
      data: { 
        active: false,
        updatedAt: new Date()
      }
    });

    if (result.count === 0) {
      return NextResponse.json(
        { error: 'Email not found or already unsubscribed' },
        { status: 404 }
      );
    }

    // Log the unsubscription
    await prisma.systemLog.create({
      data: {
        level: 'info',
        message: 'Newsletter unsubscription',
        data: { email },
        source: 'newsletter_api'
      }
    });

    return NextResponse.json(
      { message: 'Successfully unsubscribed from newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter unsubscription error:', error);
    
    return NextResponse.json(
      { error: 'Failed to unsubscribe. Please try again later.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
