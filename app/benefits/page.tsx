
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, TrendingUp, Leaf, CheckCircle, ArrowRight, BarChart3, FileText, Beaker } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function BenefitsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Proven <span className="text-luma-green">Benefits</span> & Results
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Discover the measurable advantages of plasma seed treatment for your agricultural operation
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Growers Choose GrowLuma
            </h2>
            <p className="text-lg text-gray-600">
              Our plasma seed treatment technology delivers consistent, measurable benefits across diverse agricultural applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-xl">99% Pathogen Reduction*</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Eliminates bacteria, fungi, and viruses on seed surfaces without chemical residues
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-luma-blue" />
                </div>
                <CardTitle className="text-xl">20% Faster Germination*</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Accelerated emergence and more uniform germination patterns
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-xl">Chemical-Free Process</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  No fungicides, pesticides, or chemical treatments required
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-luma-blue" />
                </div>
                <CardTitle className="text-xl">Increased Yields*</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Enhanced crop stands and improved plant vigor throughout growing season
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-xs text-gray-500 text-center">
            * Pilot Program - Example Data. Results may vary by seed type, growing conditions, and treatment parameters.
          </p>
        </div>
      </section>

      {/* Detailed Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Pathogen Control */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Superior Pathogen Control</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Plasma treatment targets a broad spectrum of seed-borne pathogens through reactive species 
                  generation, providing effective sanitization without chemical inputs.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-luma-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Broad-Spectrum Efficacy</h3>
                    <p className="text-gray-600">
                      Effective against bacteria (E. coli, Salmonella), fungi (Fusarium, Alternaria), 
                      and viral pathogens commonly found on seed surfaces.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-luma-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">No Resistance Development</h3>
                    <p className="text-gray-600">
                      Physical mechanism of action prevents pathogen adaptation and resistance 
                      development unlike chemical treatments.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-luma-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Surface-Specific Treatment</h3>
                    <p className="text-gray-600">
                      Targets only seed surface pathogens while preserving beneficial 
                      microorganisms and seed viability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="https://cdn.abacus.ai/images/0308afea-e123-44bf-a109-ea97cb0347e5.png"
                alt="Microscopic view showing pathogen elimination"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Germination */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="https://viscongroup.eu/app/uploads/2022/11/20170516_155435-scaled.jpg"
                alt="Enhanced seedling growth and vigor"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Enhanced Germination & Vigor</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Plasma treatment modifies seed surface properties to improve water uptake and 
                  accelerate metabolic activation, resulting in faster, more uniform germination.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-luma-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Faster Water Uptake</h3>
                    <p className="text-gray-600">
                      Surface modification creates hydrophilic sites that accelerate imbibition 
                      and reduce time to germination initiation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-luma-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Uniform Emergence</h3>
                    <p className="text-gray-600">
                      Consistent treatment across seed batches results in more synchronous 
                      emergence and improved crop stands.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-luma-blue mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Increased Seedling Vigor</h3>
                    <p className="text-gray-600">
                      Enhanced metabolic activation leads to stronger seedlings with improved 
                      stress tolerance and growth rates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Environmental Benefits</h2>
            <p className="text-lg text-gray-600">
              Sustainable seed treatment that reduces environmental impact while maintaining crop protection standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-luma-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Zero Chemical Inputs</h3>
                <p className="text-gray-600">
                  Eliminates fungicide and pesticide applications, reducing chemical load in agricultural systems 
                  and supporting sustainable farming practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-luma-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Organic Compatible</h3>
                <p className="text-gray-600">
                  Physical treatment method is compatible with organic certification requirements, 
                  providing pathogen control without synthetic chemicals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-luma-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Improved Efficiency</h3>
                <p className="text-gray-600">
                  Enhanced crop stands and reduced replanting needs improve resource efficiency 
                  and reduce overall environmental footprint of production.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation to Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Detailed Results</h2>
            <p className="text-lg text-gray-600">
              Dive deeper into our field trial data and case study results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-2xl">Case Studies</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6">
                  Real-world applications and results from pilot programs across different crops and conditions
                </CardDescription>
                <Button asChild className="bg-luma-green hover:bg-green-700">
                  <Link href="/benefits/case-studies">
                    View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-luma-blue" />
                </div>
                <CardTitle className="text-2xl">Trial Results</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-6">
                  Detailed performance data and statistical analysis from controlled field trials and laboratory testing
                </CardDescription>
                <Button asChild className="bg-luma-blue hover:bg-blue-700">
                  <Link href="/benefits/trial-results">
                    View Trial Data <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
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
              Ready to Experience These Benefits?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Start a pilot program with your operation and see the measurable results of plasma seed treatment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-white text-luma-green hover:bg-gray-100">
                <Link href="/contact">
                  Start Pilot Program <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-luma-green">
                <Link href="/pricing">View Pricing Options</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
