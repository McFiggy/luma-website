
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, Sprout, TrendingUp, ArrowRight, FileText, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-luma-green">Case Studies</span> & Field Trials
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Real-world applications and results from plasma seed treatment pilot programs
            </p>
          </div>
        </div>
      </section>

      {/* Data Disclaimer */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="max-w-4xl mx-auto">
            <FileText className="h-4 w-4" />
            <AlertDescription className="text-base">
              <strong>Pilot Program - Example Data:</strong> The following case studies represent example scenarios 
              with placeholder data for demonstration purposes. Actual field trial results are in progress and 
              will be updated as data becomes available from ongoing pilot programs.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Case Study 1: Corn */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle className="text-3xl text-gray-900 mb-2">
                    Midwest Corn Operation
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Pilot Program - Large-scale corn seed treatment evaluation
                  </CardDescription>
                </div>
                <Badge className="bg-luma-green text-white">Pilot Study</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Study Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-luma-green" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Location</p>
                    <p className="text-sm text-gray-600">Iowa, USA</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-luma-blue" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Season</p>
                    <p className="text-sm text-gray-600">2024 Growing Season</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Sprout className="h-5 w-5 text-luma-green" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Crop</p>
                    <p className="text-sm text-gray-600">Field Corn</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-luma-blue" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Scale</p>
                    <p className="text-sm text-gray-600">500 acres</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Study Overview */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Study Overview</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Large-scale evaluation of plasma seed treatment on corn productivity in collaboration 
                      with a progressive farming operation in central Iowa. The study compared plasma-treated 
                      seeds against standard chemical seed treatment protocols.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-luma-green rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">
                          <strong>Objective:</strong> Evaluate germination rates, stand establishment, and yield impact
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-luma-green rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">
                          <strong>Treatment:</strong> 2-minute plasma exposure at optimized parameters
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-luma-green rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">
                          <strong>Controls:</strong> Untreated seeds and conventional chemical treatment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Results*</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-luma-green mb-1">94%</div>
                        <div className="text-sm text-gray-600">Germination Rate</div>
                        <div className="text-xs text-gray-500">(vs. 87% control)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-luma-blue mb-1">18%</div>
                        <div className="text-sm text-gray-600">Faster Emergence</div>
                        <div className="text-xs text-gray-500">(2.1 days earlier)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-luma-green mb-1">12%</div>
                        <div className="text-sm text-gray-600">Yield Increase</div>
                        <div className="text-xs text-gray-500">(bushels per acre)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-luma-blue mb-1">95%</div>
                        <div className="text-sm text-gray-600">Stand Uniformity</div>
                        <div className="text-xs text-gray-500">(emergence consistency)</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Grower Feedback</h4>
                    <p className="text-sm text-gray-600 italic">
                      "The plasma-treated fields showed noticeably better emergence uniformity. 
                      We're excited to continue evaluating this technology as an alternative to chemical seed treatments."
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="https://cdn.globalagmedia.com/poultry/articles/feed/feed-corn-7.jpeg"
                  alt="Corn field showing improved stand establishment"
                  fill
                  className="object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study 2: Leafy Greens */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <CardTitle className="text-3xl text-gray-900 mb-2">
                    Controlled Environment Lettuce
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Pilot Program - Greenhouse lettuce production optimization
                  </CardDescription>
                </div>
                <Badge className="bg-luma-blue text-white">Pilot Study</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Study Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-luma-green" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Location</p>
                    <p className="text-sm text-gray-600">California, USA</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-luma-blue" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Duration</p>
                    <p className="text-sm text-gray-600">6 months</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Sprout className="h-5 w-5 text-luma-green" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Crop</p>
                    <p className="text-sm text-gray-600">Butterhead Lettuce</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-luma-blue" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Environment</p>
                    <p className="text-sm text-gray-600">Hydroponic</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Study Overview */}
                <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="https://viscongroup.eu/app/uploads/2022/11/20170516_155435-scaled.jpg"
                    alt="Hydroponic lettuce production facility"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Study Focus</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Evaluation of plasma seed treatment impact on transplant success and crop uniformity 
                      in controlled environment agriculture. Focus on reducing seed-borne pathogen pressure 
                      in high-density production systems.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-luma-blue rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">
                          <strong>Challenge:</strong> Damping-off pathogens in seed trays
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-luma-blue rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">
                          <strong>Solution:</strong> Plasma treatment before seeding
                        </p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-luma-blue rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600">
                          <strong>Metrics:</strong> Transplant success, uniformity, quality
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Results*</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-luma-green mb-1">97%</div>
                        <div className="text-sm text-gray-600">Transplant Success</div>
                        <div className="text-xs text-gray-500">(vs. 89% control)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-luma-blue mb-1">89%</div>
                        <div className="text-sm text-gray-600">Pathogen Reduction</div>
                        <div className="text-xs text-gray-500">(Pythium spp.)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-luma-green mb-1">15%</div>
                        <div className="text-sm text-gray-600">Faster Growth</div>
                        <div className="text-xs text-gray-500">(harvest ready)</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-luma-blue mb-1">92%</div>
                        <div className="text-sm text-gray-600">Size Uniformity</div>
                        <div className="text-xs text-gray-500">(grade consistency)</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Producer Impact</h4>
                <p className="text-gray-600 leading-relaxed">
                  The improved transplant success rate and reduced pathogen pressure resulted in 
                  more predictable production cycles and higher quality harvests. The elimination 
                  of fungicide applications in the propagation phase aligned with the operation's 
                  sustainability goals while maintaining crop protection standards.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Study Methodology */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Study Methodology</h2>
            <p className="text-lg text-gray-600">
              Our pilot programs follow rigorous scientific protocols to ensure reliable, reproducible results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-luma-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Controlled Studies</h3>
                <p className="text-gray-600">
                  Randomized field trials with proper controls, replication, and statistical analysis 
                  to ensure data validity and reproducibility.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-luma-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Metrics</h3>
                <p className="text-gray-600">
                  Multi-parameter evaluation including germination rates, pathogen levels, 
                  yield data, and quality assessments throughout the growing season.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-luma-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Independent Validation</h3>
                <p className="text-gray-600">
                  Collaboration with university researchers and third-party laboratories 
                  for independent verification of treatment effects and data analysis.
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
              Participate in Our Pilot Program
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join our growing network of pilot partners and contribute to the development of plasma seed treatment technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-white text-luma-green hover:bg-gray-100">
                <Link href="/contact">
                  Join Pilot Program <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-luma-green">
                <Link href="/benefits/trial-results">View Detailed Results</Link>
              </Button>
            </div>
            <p className="text-sm opacity-75">
              * All data shown represents pilot program example scenarios for demonstration purposes
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
