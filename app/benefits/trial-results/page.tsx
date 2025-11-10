
import React from 'react';
import Link from 'next/link';
import { TrendingUp, BarChart3, Activity, ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { GerminationChart } from '@/components/germination-chart';
import { PathogenReductionChart } from '@/components/pathogen-reduction-chart';

export default function TrialResultsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Trial <span className="text-luma-green">Results</span> & Data
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Detailed performance data and statistical analysis from plasma seed treatment studies
            </p>
          </div>
        </div>
      </section>

      {/* Data Disclaimer */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Alert className="max-w-4xl mx-auto">
            <Activity className="h-4 w-4" />
            <AlertDescription className="text-base">
              <strong>In Progress - Pilot Data:</strong> The following charts and analysis represent pilot program data 
              and example scenarios for demonstration purposes. Comprehensive field trial results are currently being 
              collected and will be updated as data becomes available from ongoing studies.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Germination Performance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Germination Performance
            </h2>
            <p className="text-lg text-gray-600">
              Comparative germination rates between plasma-treated and untreated seeds over time
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Findings*</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-luma-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-luma-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Accelerated Germination</h4>
                      <p className="text-gray-600">
                        Plasma-treated seeds showed 20-30% faster germination rates, with peak emergence 
                        occurring 2-3 days earlier than untreated controls.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-luma-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="h-6 w-6 text-luma-blue" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Higher Final Germination</h4>
                      <p className="text-gray-600">
                        Final germination rates improved by 8-15% compared to untreated seeds, 
                        with more consistent performance across seed lots.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-luma-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Activity className="h-6 w-6 text-luma-green" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Improved Uniformity</h4>
                      <p className="text-gray-600">
                        Reduced coefficient of variation in emergence timing, resulting in more 
                        uniform crop stands and simplified field management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <GerminationChart />
            </div>
          </div>
        </div>
      </section>

      {/* Pathogen Reduction */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pathogen Control Efficacy
            </h2>
            <p className="text-lg text-gray-600">
              Quantitative analysis of pathogen reduction across different organism types
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <PathogenReductionChart />
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Pathogen Analysis*</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <h4 className="font-semibold text-gray-900 mb-2">Bacterial Pathogens</h4>
                    <p className="text-gray-600 text-sm">
                      E. coli and Salmonella showed >99% reduction with plasma treatment, 
                      demonstrating effectiveness against gram-negative bacteria.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <h4 className="font-semibold text-gray-900 mb-2">Fungal Pathogens</h4>
                    <p className="text-gray-600 text-sm">
                      Fusarium, Alternaria, and Rhizoctonia species showed 95-98% reduction, 
                      with effectiveness varying by spore structure and treatment duration.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm border">
                    <h4 className="font-semibold text-gray-900 mb-2">Treatment Selectivity</h4>
                    <p className="text-gray-600 text-sm">
                      Pathogen elimination occurred without significant impact on seed viability 
                      or beneficial microorganisms, demonstrating treatment selectivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistical Summary */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Statistical Summary</h2>
            <p className="text-lg text-gray-600">
              Aggregate performance metrics from pilot program data across multiple crops and conditions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-luma-green mb-2">94.5%</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Avg. Germination</div>
                <div className="text-sm text-gray-600">vs. 86.2% control</div>
                <div className="text-xs text-gray-500 mt-2">±3.2% std dev</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-luma-blue mb-2">97.8%</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Pathogen Reduction</div>
                <div className="text-sm text-gray-600">across all types</div>
                <div className="text-xs text-gray-500 mt-2">2.1 log reduction</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-luma-green mb-2">2.3</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Days Faster</div>
                <div className="text-sm text-gray-600">emergence timing</div>
                <div className="text-xs text-gray-500 mt-2">±0.7 days range</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="text-4xl font-bold text-luma-blue mb-2">13.2%</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Yield Improvement</div>
                <div className="text-sm text-gray-600">average increase</div>
                <div className="text-xs text-gray-500 mt-2">p < 0.05</div>
              </CardContent>
            </Card>
          </div>
          
          <p className="text-xs text-gray-500 text-center mt-8">
            * Pilot Program - Example Data. Statistical significance determined by t-test analysis with α = 0.05.
          </p>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Research Methodology</h2>
            <p className="text-lg text-gray-600">
              Rigorous scientific approach ensures reliable, reproducible results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Experimental Design</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luma-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Randomized complete block design with 4 replications minimum</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luma-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Multiple control treatments including untreated and chemical-treated seeds</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luma-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Standardized treatment protocols with documented parameters</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luma-green rounded-full mt-2 flex-shrink-0"></div>
                    <span>Environmental monitoring and data logging throughout trials</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Data Collection & Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luma-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Daily germination counts with photographic documentation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luma-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Microbiological assays by certified laboratory partners</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luma-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Statistical analysis using ANOVA and appropriate post-hoc tests</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-luma-blue rounded-full mt-2 flex-shrink-0"></div>
                    <span>Third-party verification of key results and methodology</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ongoing Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ongoing Research</h2>
            <p className="text-lg text-gray-600">
              Current studies expanding our understanding of plasma seed treatment effects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-lg">Multi-Season Trials</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Long-term evaluation of plasma treatment effects across multiple growing seasons 
                  and environmental conditions for major field crops.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-luma-blue" />
                </div>
                <CardTitle className="text-lg">Parameter Optimization</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Systematic evaluation of treatment parameters (voltage, duration, gas composition) 
                  to optimize efficacy for specific seed types and pathogen targets.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-lg">Economic Analysis</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base">
                  Comprehensive cost-benefit analysis comparing plasma treatment to conventional 
                  chemical seed treatments across diverse agricultural operations.
                </CardDescription>
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
              Access Detailed Research Data
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Contact our research team for access to detailed trial protocols, statistical analysis, 
              and comprehensive research reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-white text-luma-green hover:bg-gray-100">
                <Link href="/contact">
                  Request Research Data <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-luma-green">
                <Link href="/benefits/case-studies">View Case Studies</Link>
              </Button>
            </div>
            <p className="text-sm opacity-75">
              Detailed research reports available for qualified research partners and potential customers
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
