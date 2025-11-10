
import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Users, Building, Factory, Beaker, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PricingForm } from '@/components/pricing-form';

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-luma-green">Pricing</span> & System Options
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Flexible plasma seed treatment solutions from pilot programs to full-scale operations
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Solution</h2>
            <p className="text-lg text-gray-600">
              From research and pilot programs to full-scale commercial operations, we have a solution for every need
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Pilot Program */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow relative">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beaker className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-2xl mb-2">Pilot Program</CardTitle>
                <CardDescription className="text-base">
                  Risk-free evaluation of plasma treatment for your operation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-luma-green mb-1">Request Quote</div>
                  <div className="text-sm text-gray-600">Rental or per batch pricing</div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-green flex-shrink-0" />
                    <span className="text-sm">Mobile unit deployment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-green flex-shrink-0" />
                    <span className="text-sm">On-site training included</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-green flex-shrink-0" />
                    <span className="text-sm">Performance monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-green flex-shrink-0" />
                    <span className="text-sm">Technical support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-green flex-shrink-0" />
                    <span className="text-sm">Results analysis & reporting</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-luma-green hover:bg-green-700" asChild>
                  <Link href="#pricing-form">Request Pilot Quote</Link>
                </Button>
                
                <div className="text-xs text-gray-500 text-center">
                  Ideal for: First-time evaluation, seasonal testing
                </div>
              </CardContent>
            </Card>

            {/* LUMA Lab Unit */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow relative">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-luma-blue" />
                </div>
                <CardTitle className="text-2xl mb-2">LUMA Lab Unit</CardTitle>
                <CardDescription className="text-base">
                  Small-batch system for universities and startups
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-luma-blue mb-1">Request Quote</div>
                  <div className="text-sm text-gray-600">Purchase or lease options</div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-blue flex-shrink-0" />
                    <span className="text-sm">1-10 kg/hour capacity</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-blue flex-shrink-0" />
                    <span className="text-sm">Benchtop installation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-blue flex-shrink-0" />
                    <span className="text-sm">Educational support materials</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-blue flex-shrink-0" />
                    <span className="text-sm">Remote diagnostics</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-blue flex-shrink-0" />
                    <span className="text-sm">Annual maintenance plan</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-luma-blue hover:bg-blue-700" asChild>
                  <Link href="#pricing-form">Request Lab Quote</Link>
                </Button>
                
                <div className="text-xs text-gray-500 text-center">
                  Ideal for: Universities, R&D labs, small-scale operations
                </div>
              </CardContent>
            </Card>

            {/* LUMA Pro */}
            <Card className="border-2 border-luma-green shadow-xl hover:shadow-2xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-luma-green text-white px-3 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
              <CardHeader className="text-center pb-6 pt-8">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-2xl mb-2">LUMA Pro</CardTitle>
                <CardDescription className="text-base">
                  Commercial system for on-farm and seed house throughput
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-luma-green mb-1">Request Quote</div>
                  <div className="text-sm text-gray-600">Subscription service & maintenance included</div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-green flex-shrink-0" />
                    <span className="text-sm">50-500 kg/hour capacity</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-green flex-shrink-0" />
                    <span className="text-sm">Automated operation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-green flex-shrink-0" />
                    <span className="text-sm">Professional installation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-green flex-shrink-0" />
                    <span className="text-sm">24/7 remote monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-green flex-shrink-0" />
                    <span className="text-sm">Priority service & support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-green flex-shrink-0" />
                    <span className="text-sm">Performance guarantees</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-luma-green hover:bg-green-700" asChild>
                  <Link href="#pricing-form">Request Pro Quote</Link>
                </Button>
                
                <div className="text-xs text-gray-500 text-center">
                  Ideal for: Commercial farms, seed processors
                </div>
              </CardContent>
            </Card>

            {/* Per-batch Service */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow relative">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8 text-luma-blue" />
                </div>
                <CardTitle className="text-2xl mb-2">Per-batch Service</CardTitle>
                <CardDescription className="text-base">
                  Seed processing at partner facility - pay per kg
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-luma-blue mb-1">Request Quote</div>
                  <div className="text-sm text-gray-600">Volume-based pricing</div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-blue flex-shrink-0" />
                    <span className="text-sm">No capital investment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-blue flex-shrink-0" />
                    <span className="text-sm">Professional facility processing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-blue flex-shrink-0" />
                    <span className="text-sm">Quality assurance testing</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-blue flex-shrink-0" />
                    <span className="text-sm">Logistics coordination</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-luma-blue flex-shrink-0" />
                    <span className="text-sm">Certificate of treatment</span>
                  </li>
                </ul>
                
                <Button className="w-full bg-luma-blue hover:bg-blue-700" asChild>
                  <Link href="#pricing-form">Request Service Quote</Link>
                </Button>
                
                <div className="text-xs text-gray-500 text-center">
                  Ideal for: Variable volumes, seasonal needs
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Feature Comparison</h2>
            <p className="text-lg text-gray-600">
              Compare features across our plasma treatment system options
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-900">Feature</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Pilot Program</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Lab Unit</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900 bg-luma-green/10">Pro System</th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-900">Service</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Capacity (kg/hour)</td>
                    <td className="px-6 py-4 text-center text-gray-600">10-50</td>
                    <td className="px-6 py-4 text-center text-gray-600">1-10</td>
                    <td className="px-6 py-4 text-center text-gray-600 bg-luma-green/5">50-500</td>
                    <td className="px-6 py-4 text-center text-gray-600">Variable</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Installation</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-luma-green mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-luma-green mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center bg-luma-green/5">
                      <Check className="h-5 w-5 text-luma-green mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center text-gray-400">—</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Training</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-luma-green mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-luma-green mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center bg-luma-green/5">
                      <Check className="h-5 w-5 text-luma-green mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center text-gray-400">—</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">24/7 Support</td>
                    <td className="px-6 py-4 text-center text-gray-400">—</td>
                    <td className="px-6 py-4 text-center text-gray-400">—</td>
                    <td className="px-6 py-4 text-center bg-luma-green/5">
                      <Check className="h-5 w-5 text-luma-green mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-luma-green mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Remote Monitoring</td>
                    <td className="px-6 py-4 text-center text-gray-400">—</td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-luma-green mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center bg-luma-green/5">
                      <Check className="h-5 w-5 text-luma-green mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Check className="h-5 w-5 text-luma-green mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Capital Investment</td>
                    <td className="px-6 py-4 text-center text-gray-600">Low</td>
                    <td className="px-6 py-4 text-center text-gray-600">Medium</td>
                    <td className="px-6 py-4 text-center text-gray-600 bg-luma-green/5">High</td>
                    <td className="px-6 py-4 text-center text-gray-600">None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Form */}
      <section id="pricing-form" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Your Custom Quote</h2>
            <p className="text-lg text-gray-600">
              Tell us about your operation and we'll provide a tailored pricing proposal
            </p>
          </div>
          
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <PricingForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pricing FAQ</h2>
            <p className="text-lg text-gray-600">
              Common questions about our pricing and system options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">What factors influence pricing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pricing depends on processing capacity, automation level, installation requirements, 
                  and service package selected. Volume commitments and multi-year agreements may qualify for discounts.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Are financing options available?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer lease programs, subscription models, and financing options for qualified customers. 
                  Contact our team to discuss payment terms that fit your budget.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">What's included in the service subscription?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pro system subscriptions include preventive maintenance, remote monitoring, priority support, 
                  software updates, and performance guarantees with defined uptime commitments.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Can I upgrade between system tiers?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we offer upgrade paths from pilot programs to permanent installations, and from smaller 
                  to larger systems as your operation grows. Trade-in credits may apply.
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
              Ready to Get Started?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Contact our team to discuss your specific needs and receive a custom proposal within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-white text-luma-green hover:bg-gray-100">
                <Link href="/contact">
                  Speak with Our Team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-luma-green">
                <Link href="/applications">View Applications</Link>
              </Button>
            </div>
            <p className="text-sm opacity-75">
              All pricing subject to final specifications and installation requirements
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
