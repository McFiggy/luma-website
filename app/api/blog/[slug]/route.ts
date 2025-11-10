
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

interface Params {
  slug: string
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  try {
    const { slug } = params;

    const post = await prisma.blogPost.findUnique({
      where: { 
        slug,
        published: true
      }
    });

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Log page view (optional analytics)
    try {
      await prisma.pageView.create({
        data: {
          path: `/blog/${slug}`,
          userAgent: req.headers.get('user-agent') || null,
          referer: req.headers.get('referer') || null,
          ip: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || null
        }
      });
    } catch (logError) {
      // Don't fail the request if logging fails
      console.error('Failed to log page view:', logError);
    }

    return NextResponse.json({ post });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog post' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(req: NextRequest, { params }: { params: Params }) {
  try {
    const { slug } = params;
    const body = await req.json();

    const {
      title,
      excerpt,
      content,
      author,
      category,
      tags,
      image,
      featured,
      published,
      readTime
    } = body;

    // Find existing post
    const existingPost = await prisma.blogPost.findUnique({
      where: { slug }
    });

    if (!existingPost) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Update post
    const updatedPost = await prisma.blogPost.update({
      where: { slug },
      data: {
        ...(title && { title: title.trim() }),
        ...(excerpt && { excerpt: excerpt.trim() }),
        ...(content && { content: content.trim() }),
        ...(author && { author: author.trim() }),
        ...(category && { category: category.trim() }),
        ...(tags && { tags: Array.isArray(tags) ? tags : [] }),
        ...(image !== undefined && { image }),
        ...(featured !== undefined && { featured }),
        ...(published !== undefined && { published }),
        ...(readTime && { readTime }),
        updatedAt: new Date()
      }
    });

    // Log the update
    await prisma.systemLog.create({
      data: {
        level: 'info',
        message: 'Blog post updated',
        data: {
          postId: updatedPost.id,
          slug: updatedPost.slug,
          title: updatedPost.title
        },
        source: 'blog_api'
      }
    });

    return NextResponse.json({
      message: 'Blog post updated successfully',
      post: updatedPost
    });
  } catch (error) {
    console.error('Blog post update error:', error);
    return NextResponse.json(
      { error: 'Failed to update blog post' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Params }) {
  try {
    const { slug } = params;

    // Find existing post
    const existingPost = await prisma.blogPost.findUnique({
      where: { slug }
    });

    if (!existingPost) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Soft delete by setting published to false
    const deletedPost = await prisma.blogPost.update({
      where: { slug },
      data: {
        published: false,
        updatedAt: new Date()
      }
    });

    // Log the deletion
    await prisma.systemLog.create({
      data: {
        level: 'info',
        message: 'Blog post deleted (soft delete)',
        data: {
          postId: deletedPost.id,
          slug: deletedPost.slug,
          title: deletedPost.title
        },
        source: 'blog_api'
      }
    });

    return NextResponse.json({
      message: 'Blog post deleted successfully'
    });
  } catch (error) {
    console.error('Blog post deletion error:', error);
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
