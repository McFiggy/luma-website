
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const tag = searchParams.get('tag');
    const featured = searchParams.get('featured') === 'true';
    const published = searchParams.get('published') !== 'false'; // default to true

    const skip = (page - 1) * limit;

    const where: any = { published };
    if (category) where.category = category;
    if (tag) where.tags = { has: tag };
    if (featured !== undefined) where.featured = featured;

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        orderBy: [
          { featured: 'desc' },
          { publishedAt: 'desc' }
        ],
        skip,
        take: limit,
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          author: true,
          category: true,
          tags: true,
          image: true,
          featured: true,
          publishedAt: true,
          readTime: true
        }
      }),
      prisma.blogPost.count({ where })
    ]);

    return NextResponse.json({
      posts,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      title,
      slug,
      excerpt,
      content,
      author,
      category,
      tags = [],
      image,
      featured = false,
      published = true,
      readTime
    } = body;

    // Validate required fields
    if (!title || !slug || !excerpt || !content || !author || !category) {
      return NextResponse.json(
        { error: 'Title, slug, excerpt, content, author, and category are required' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingPost = await prisma.blogPost.findUnique({
      where: { slug }
    });

    if (existingPost) {
      return NextResponse.json(
        { error: 'A post with this slug already exists' },
        { status: 400 }
      );
    }

    // Create blog post
    const post = await prisma.blogPost.create({
      data: {
        title: title.trim(),
        slug: slug.trim(),
        excerpt: excerpt.trim(),
        content: content.trim(),
        author: author.trim(),
        category: category.trim(),
        tags: Array.isArray(tags) ? tags : [],
        image: image || null,
        featured,
        published,
        publishedAt: published ? new Date() : new Date(),
        readTime: readTime || null
      },
    });

    // Log the creation
    await prisma.systemLog.create({
      data: {
        level: 'info',
        message: 'New blog post created',
        data: {
          postId: post.id,
          title: post.title,
          slug: post.slug,
          author: post.author,
          category: post.category,
          published: post.published
        },
        source: 'blog_api'
      }
    });

    return NextResponse.json(
      { 
        message: 'Blog post created successfully',
        post: {
          id: post.id,
          title: post.title,
          slug: post.slug,
          published: post.published
        }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Blog post creation error:', error);
    
    // Log the error
    try {
      await prisma.systemLog.create({
        data: {
          level: 'error',
          message: 'Blog post creation failed',
          data: { error: error instanceof Error ? error.message : 'Unknown error' },
          source: 'blog_api'
        }
      });
    } catch (logError) {
      console.error('Failed to log error:', logError);
    }

    return NextResponse.json(
      { error: 'Failed to create blog post. Please try again later.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
