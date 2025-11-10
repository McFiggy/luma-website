
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sprout, Leaf, Beaker, Clock, CheckCircle, ArrowRight, Wheat, FlaskConical, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ApplicationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Applications Across <span className="text-luma-green">Agriculture</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              From field crops to specialty produce, plasma seed treatment adapts to diverse agricultural applications
            </p>
          </div>
        </div>
      </section>

      {/* Primary Applications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Primary Applications</h2>
            <p className="text-lg text-gray-600">
              Currently available applications with proven results and established treatment protocols
            </p>
          </div>
          
          <div className="space-y-16">
            {/* Field Crops */}
            <div id="field-crops" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Wheat className="h-8 w-8 text-luma-green" />
                    <h3 className="text-3xl font-bold text-gray-900">Field Crops</h3>
                    <Badge className="bg-luma-green text-white">Available Now</Badge>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Major row crops benefit significantly from plasma seed treatment, with improved emergence 
                    uniformity and reduced pathogen pressure leading to stronger stands and higher yields.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-luma-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Corn (Maize)</h4>
                      <p className="text-gray-600">
                        Enhanced emergence uniformity and reduced seed rot, particularly beneficial 
                        in cool, wet soils during early season planting.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-luma-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Soybeans</h4>
                      <p className="text-gray-600">
                        Improved vigor and pathogen resistance, leading to better nodulation 
                        and nitrogen fixation in organic and conventional systems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-luma-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Small Grains</h4>
                      <p className="text-gray-600">
                        Wheat, barley, and oats show increased germination rates and reduced 
                        fungal pathogen pressure in seed-borne disease management programs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button asChild className="bg-luma-green hover:bg-green-700">
                  <Link href="/contact?application=field-crops">
                    Request Field Crop Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://cdn.globalagmedia.com/poultry/articles/feed/feed-corn-7.jpeg"
                  alt="Corn field showing improved stand establishment"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Leafy Greens */}
            <div id="leafy-greens" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://viscongroup.eu/app/uploads/2022/11/20170516_155435-scaled.jpg"
                  alt="Leafy greens in hydroponic production system"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Leaf className="h-8 w-8 text-luma-blue" />
                    <h3 className="text-3xl font-bold text-gray-900">Leafy Greens & Herbs</h3>
                    <Badge className="bg-luma-blue text-white">Available Now</Badge>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    High-value leafy crops and herbs benefit from enhanced transplant success and 
                    reduced pathogen pressure in controlled environment agriculture systems.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-luma-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Lettuce & Salad Greens</h4>
                      <p className="text-gray-600">
                        Improved transplant success rates and reduced damping-off in seed trays, 
                        critical for high-density greenhouse and hydroponic production.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-luma-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Spinach & Chard</h4>
                      <p className="text-gray-600">
                        Enhanced germination uniformity for baby leaf production and improved 
                        resistance to seed-borne pathogens like downy mildew.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-luma-blue mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Herbs & Microgreens</h4>
                      <p className="text-gray-600">
                        Faster germination and stronger seedlings for high-value specialty crops 
                        with reduced need for chemical seed treatments.
                      </p>
                    </div>
                  </div>
                </div>
                
                <Button asChild className="bg-luma-blue hover:bg-blue-700">
                  <Link href="/contact?application=leafy-greens">
                    Request Greens Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Vegetable Crops */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Sprout className="h-8 w-8 text-luma-green" />
                    <h3 className="text-3xl font-bold text-gray-900">Vegetable Crops</h3>
                    <Badge className="bg-luma-green text-white">Available Now</Badge>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Specialty vegetable crops show excellent response to plasma treatment, particularly 
                    for transplant production and direct seeding applications.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-luma-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Tomatoes & Peppers</h4>
                      <p className="text-gray-600">
                        Enhanced transplant vigor and reduced seed-borne pathogen transmission, 
                        particularly important for greenhouse production systems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-luma-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Brassicas</h4>
                      <p className="text-gray-600">
                        Broccoli, cauliflower, and cabbage benefit from improved emergence uniformity 
                        and reduced clubroot and blackleg pressure.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-luma-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Cucurbits</h4>
                      <p className="text-gray-600">
                        Cucumber, squash, and melon seeds show faster germination and reduced 
                        susceptibility to damping-off pathogens in cool soils.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative aspect-[4/3] bg-gradient-luma-light rounded-lg flex items-center justify-center">
                <div className="text-center text-white space-y-4">
                  <Sprout className="h-20 w-20 mx-auto opacity-80" />
                  <h4 className="text-2xl font-bold">Vegetable Crops</h4>
                  <p className="text-lg opacity-90">Enhanced transplant success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Applications */}
      <section id="future" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Future Applications</h2>
            <p className="text-lg text-gray-600">
              Expanding applications under development and available by request for pilot programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-luma-green/10 rounded-lg flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-luma-green" />
                  </div>
                  <Badge variant="outline" className="border-luma-green text-luma-green">Coming Soon</Badge>
                </div>
                <CardTitle className="text-2xl">Cannabis & Hemp</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  High-value cannabis and hemp seed treatment for improved germination rates and pathogen control 
                  in commercial cultivation operations.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Enhanced feminized seed viability</li>
                  <li>• Reduced fungal pathogen pressure</li>
                  <li>• Clone treatment protocols under development</li>
                  <li>• Compliance with organic certification programs</li>
                </ul>
                <Button variant="outline" className="w-full border-luma-green text-luma-green hover:bg-luma-green hover:text-white">
                  <Link href="/contact?application=cannabis">Express Interest</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-luma-blue/10 rounded-lg flex items-center justify-center">
                    <Sprout className="h-6 w-6 text-luma-blue" />
                  </div>
                  <Badge variant="outline" className="border-luma-blue text-luma-blue">By Request</Badge>
                </div>
                <CardTitle className="text-2xl">Seedling Trays</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Direct treatment of planted seedling trays to reduce damping-off and improve transplant success 
                  in greenhouse and nursery operations.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Post-seeding tray treatment protocols</li>
                  <li>• Reduced transplant mortality</li>
                  <li>• Compatible with organic growing media</li>
                  <li>• Automated systems for high-throughput operations</li>
                </ul>
                <Button variant="outline" className="w-full border-luma-blue text-luma-blue hover:bg-luma-blue hover:text-white">
                  <Link href="/contact?application=seedling-trays">Request Information</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-luma-green/10 rounded-lg flex items-center justify-center">
                    <Package className="h-6 w-6 text-luma-green" />
                  </div>
                  <Badge variant="outline" className="border-luma-green text-luma-green">Development</Badge>
                </div>
                <CardTitle className="text-2xl">Produce Packaging</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Surface sanitation of fresh produce packaging materials to extend shelf life and reduce 
                  foodborne pathogen risks in post-harvest applications.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Packaging film surface treatment</li>
                  <li>• Pathogen reduction on contact surfaces</li>
                  <li>• No chemical residue concerns</li>
                  <li>• Integration with existing packaging lines</li>
                </ul>
                <Button variant="outline" className="w-full border-luma-green text-luma-green hover:bg-luma-green hover:text-white">
                  <Link href="/contact?application=produce-packaging">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-luma-blue/10 rounded-lg flex items-center justify-center">
                    <FlaskConical className="h-6 w-6 text-luma-blue" />
                  </div>
                  <Badge variant="outline" className="border-luma-blue text-luma-blue">Available Now</Badge>
                </div>
                <CardTitle className="text-2xl">Research & Development</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  Laboratory-scale plasma treatment systems for university research programs and 
                  agricultural technology development projects.
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Benchtop plasma treatment systems</li>
                  <li>• Customizable treatment parameters</li>
                  <li>• Educational and research applications</li>
                  <li>• Technical support and training included</li>
                </ul>
                <Button variant="outline" className="w-full border-luma-blue text-luma-blue hover:bg-luma-blue hover:text-white">
                  <Link href="/contact?application=research">Request R&D Kit</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Benefits Summary */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Universal Benefits</h2>
            <p className="text-lg text-gray-600">
              Core advantages of plasma seed treatment across all agricultural applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-luma-green" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pathogen Control</h3>
                <p className="text-gray-600 text-sm">
                  Effective against bacteria, fungi, and viruses without chemical residues
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sprout className="h-8 w-8 text-luma-blue" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Enhanced Vigor</h3>
                <p className="text-gray-600 text-sm">
                  Faster germination and stronger seedling establishment
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-luma-green" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Organic Compatible</h3>
                <p className="text-gray-600 text-sm">
                  Physical treatment method suitable for organic certification
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-8 w-8 text-luma-blue" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Faster Processing</h3>
                <p className="text-gray-600 text-sm">
                  Rapid treatment times with immediate seed handling
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-luma">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Find the Right Application for Your Operation
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Contact our application specialists to discuss how plasma seed treatment can benefit your specific crops and production systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-white text-luma-green hover:bg-gray-100">
                <Link href="/contact">
                  Discuss Your Application <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-luma-green">
                <Link href="/pricing">View System Options</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
