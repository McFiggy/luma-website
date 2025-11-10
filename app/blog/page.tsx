
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    id: 1,
    slug: 'plasma-technology-agriculture-revolution',
    title: 'How Plasma Technology is Revolutionizing Agriculture',
    excerpt: 'Discover the science behind nonthermal plasma and its transformative impact on seed treatment and agricultural sustainability.',
    content: 'Plasma technology represents a paradigm shift in agricultural seed treatment...',
    author: 'Seth McQuillan',
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'Technology',
    tags: ['Plasma', 'Agriculture', 'Innovation', 'Sustainability'],
    image: 'https://cdn.abacus.ai/images/2cd18140-5bbd-419a-bc21-0c3d4416f911.png',
    featured: true
  },
  {
    id: 2,
    slug: 'sustainable-seed-treatment-future',
    title: 'The Future of Sustainable Seed Treatment',
    excerpt: 'Exploring how chemical-free seed treatment technologies are shaping the future of sustainable agriculture.',
    content: 'As agriculture faces mounting pressure to reduce chemical inputs...',
    author: 'Noah [Last name TBD]',
    date: '2024-03-08',
    readTime: '6 min read',
    category: 'Sustainability',
    tags: ['Sustainability', 'Seed Treatment', 'Environment', 'Future'],
    image: 'https://viscongroup.eu/app/uploads/2022/11/20170516_155435-scaled.jpg',
    featured: false
  },
  {
    id: 3,
    slug: 'pathogen-control-without-chemicals',
    title: 'Effective Pathogen Control Without Chemicals',
    excerpt: 'Learn how plasma treatment achieves superior pathogen elimination while maintaining seed health and viability.',
    content: 'Traditional chemical seed treatments have long been the standard...',
    author: 'GrowLuma Research Team',
    date: '2024-02-28',
    readTime: '7 min read',
    category: 'Research',
    tags: ['Pathogen Control', 'Research', 'Seed Health', 'Innovation'],
    image: 'https://cdn.abacus.ai/images/0308afea-e123-44bf-a109-ea97cb0347e5.png',
    featured: false
  }
];

export default function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              GrowLuma <span className="text-luma-green">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Insights on plasma technology, sustainable agriculture, and the future of seed treatment
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="h-5 w-5 text-luma-green" />
                <span className="text-luma-green font-medium">Featured Article</span>
              </div>
            </div>
            
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <Badge className="bg-luma-green text-white">{featuredPost.category}</Badge>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">By {featuredPost.author}</span>
                      </div>
                      
                      <Button asChild className="bg-luma-green hover:bg-green-700">
                        <Link href={`/blog/${featuredPost.slug}`}>
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest developments in plasma seed treatment and agricultural innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Badge variant="outline" className="border-luma-blue text-luma-blue">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl leading-tight hover:text-luma-green transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    
                    <Button variant="link" className="text-luma-green p-0" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore by Category</h2>
            <p className="text-lg text-gray-600">
              Browse articles by topic to find content most relevant to your interests
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Tag className="h-8 w-8 text-luma-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology</h3>
                <p className="text-gray-600 mb-4">
                  Deep dives into plasma science, reactor design, and technical innovations
                </p>
                <Button variant="outline" className="border-luma-green text-luma-green hover:bg-luma-green hover:text-white">
                  View Articles
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Tag className="h-8 w-8 text-luma-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainability</h3>
                <p className="text-gray-600 mb-4">
                  Environmental impact, organic farming compatibility, and sustainable agriculture
                </p>
                <Button variant="outline" className="border-luma-blue text-luma-blue hover:bg-luma-blue hover:text-white">
                  View Articles
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Tag className="h-8 w-8 text-luma-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Research</h3>
                <p className="text-gray-600 mb-4">
                  Field trial results, scientific studies, and research findings
                </p>
                <Button variant="outline" className="border-luma-green text-luma-green hover:bg-luma-green hover:text-white">
                  View Articles
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-luma">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Stay Updated on Agricultural Innovation
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Subscribe to receive the latest articles on plasma technology, research updates, and agricultural sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-white text-luma-green hover:bg-gray-100">
                <Link href="/#newsletter">
                  Subscribe to Newsletter <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-luma-green">
                <Link href="/contact">Contact Our Experts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
