
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, Shield, Sprout, BarChart3, CheckCircle, ArrowRight, Beaker, Leaf, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NewsletterSignup } from '@/components/newsletter-signup';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-luma opacity-5"></div>
        <div className="absolute inset-0">
          <Image
            src="https://cdn.abacus.ai/images/fd4bbf17-cfeb-4a69-b539-653394cf5186.jpg"
            alt="Agricultural technology background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Chemical-free seed sanitation with{' '}
                <span className="text-luma-green">nonthermal plasma</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                LUMA builds nonthermal plasma systems that sanitize seed surfaces, boost germination, and reduce chemical inputs. We make high-performance seed treatment accessible from lab bench to farm.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                asChild
                className="bg-luma-blue hover:bg-blue-700 text-lg px-8 py-3"
              >
                <Link href="/contact">
                  Request Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="border-luma-green text-luma-green hover:bg-luma-green hover:text-white text-lg px-8 py-3"
              >
                <Link href="/pricing">Get Pricing</Link>
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-luma-green">100%</div>
                <div className="text-sm text-gray-600">Chemical-Free Process</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luma-blue">20%+</div>
                <div className="text-sm text-gray-600">Germination Improvement*</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luma-green">99%</div>
                <div className="text-sm text-gray-600">Pathogen Reduction*</div>
              </div>
            </div>
            <p className="text-xs text-gray-500">* Pilot Program - Example Data</p>
          </div>
        </div>
      </section>

      {/* Technology Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Plasma Seed Treatment
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our nonthermal plasma technology provides a chemical-free alternative to traditional seed treatments, delivering superior pathogen control while enhancing germination rates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-luma-green/10 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-luma-green" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Nonthermal Plasma Technology</h3>
                  <p className="text-gray-600">
                    Our DBD (Dielectric Barrier Discharge) reactor creates cold plasma at atmospheric pressure, 
                    generating reactive species that eliminate pathogens without heat damage to seeds.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-luma-blue/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-luma-blue" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Pathogen Elimination</h3>
                  <p className="text-gray-600">
                    Targets bacteria, fungi, and viruses on seed surfaces while preserving seed viability 
                    and vigor through precise plasma control and exposure timing.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-luma-green/10 rounded-lg flex items-center justify-center">
                    <Sprout className="h-6 w-6 text-luma-green" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Enhanced Germination</h3>
                  <p className="text-gray-600">
                    Plasma treatment modifies seed surface properties, improving water uptake and 
                    accelerating germination while promoting more uniform emergence.
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-luma-green hover:bg-green-700">
                <Link href="/technology/how-it-works">
                  Learn How It Works
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="https://cdn.abacus.ai/images/2cd18140-5bbd-419a-bc21-0c3d4416f911.png"
                alt="Plasma seed treatment process diagram"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GrowLuma
            </h2>
            <p className="text-lg text-gray-600">
              Our plasma seed treatment technology delivers measurable benefits for growers, seed producers, and researchers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-xl">Chemical-Free</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  No chemical residues, fungicides, or pesticides required. Safe for organic and conventional programs.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-luma-blue" />
                </div>
                <CardTitle className="text-xl">Improved Yields</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Enhanced germination rates and uniform emergence lead to stronger crop stands and higher yields.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beaker className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-xl">Proven Science</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Backed by rigorous testing and field trials demonstrating consistent pathogen reduction and vigor improvement.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-luma-blue" />
                </div>
                <CardTitle className="text-xl">Sustainable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Reduces environmental impact by eliminating chemical inputs while maintaining crop protection standards.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Applications Across Agriculture
            </h2>
            <p className="text-lg text-gray-600">
              From field crops to specialty produce, our plasma treatment technology adapts to diverse agricultural applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="https://cdn.globalagmedia.com/poultry/articles/feed/feed-corn-7.jpeg"
                  alt="Corn field"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-luma-green">Field Crops</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Corn, soybean, and cereal grains benefit from improved emergence uniformity and reduced pathogen pressure.
                </CardDescription>
                <Button variant="link" className="text-luma-green p-0 mt-2" asChild>
                  <Link href="/applications#field-crops">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src="https://viscongroup.eu/app/uploads/2022/11/20170516_155435-scaled.jpg"
                  alt="Leafy greens in hydroponic system"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-luma-blue">Leafy Greens</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Enhanced seed vigor for lettuce, spinach, and herbs improves transplant success and crop quality.
                </CardDescription>
                <Button variant="link" className="text-luma-blue p-0 mt-2" asChild>
                  <Link href="/applications#leafy-greens">
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative aspect-video bg-gradient-luma-light">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-white space-y-2">
                    <Beaker className="h-16 w-16 mx-auto opacity-80" />
                    <p className="text-lg font-medium">Coming Soon</p>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-luma-green">Future Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Cannabis/hemp seeds, seedling trays, produce packaging, and R&D kits for university labs.
                </CardDescription>
                <Button variant="link" className="text-luma-green p-0 mt-2" asChild>
                  <Link href="/applications#future">
                    View Roadmap <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-luma">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Stay Updated on Plasma Innovation
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Get the latest updates on plasma seed treatment technology, field trial results, and agricultural innovation delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <NewsletterSignup />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
