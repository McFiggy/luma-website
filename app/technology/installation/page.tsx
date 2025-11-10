
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Wrench, Zap, Settings, Headphones, CheckCircle, ArrowRight, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function InstallationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Installation & <span className="text-luma-green">Service</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Professional setup, maintenance, and ongoing service support for LUMA plasma treatment systems
            </p>
          </div>
        </div>
      </section>

      {/* Installation Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Professional Installation
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Every LUMA system comes with complete installation support from our certified technicians. 
                  We handle all aspects of setup including electrical connections, safety system verification, 
                  and initial calibration to ensure optimal performance.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our installation process is designed to minimize disruption to your operations while 
                  ensuring all safety and performance requirements are met from day one.
                </p>
              </div>
              
              <Button asChild className="bg-luma-green hover:bg-green-700">
                <Link href="/contact">
                  Schedule Installation Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="https://cdn.abacus.ai/images/13ff4a39-f1a1-41dc-a072-2e31bb2b0c0a.png"
                alt="Professional installation of plasma treatment system"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Installation Requirements</h2>
            <p className="text-lg text-gray-600">
              Site preparation and infrastructure requirements for LUMA system installation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-xl">Electrical Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-luma-green flex-shrink-0" />
                    <span className="text-sm">240V/480V 3-phase power</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-luma-green flex-shrink-0" />
                    <span className="text-sm">Dedicated electrical panel</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-luma-green flex-shrink-0" />
                    <span className="text-sm">Proper grounding system</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-luma-green flex-shrink-0" />
                    <span className="text-sm">Emergency stop circuits</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-luma-blue" />
                </div>
                <CardTitle className="text-xl">Facility Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-luma-blue flex-shrink-0" />
                    <span className="text-sm">Climate-controlled environment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-luma-blue flex-shrink-0" />
                    <span className="text-sm">Adequate ventilation system</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-luma-blue flex-shrink-0" />
                    <span className="text-sm">Level installation surface</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-luma-blue flex-shrink-0" />
                    <span className="text-sm">Operator safety clearances</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-xl">Infrastructure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-luma-green flex-shrink-0" />
                    <span className="text-sm">Compressed air supply</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-luma-green flex-shrink-0" />
                    <span className="text-sm">Network connectivity (optional)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-luma-green flex-shrink-0" />
                    <span className="text-sm">Material handling integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-luma-green flex-shrink-0" />
                    <span className="text-sm">Waste collection systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Installation Process</h2>
            <p className="text-lg text-gray-600">
              Our systematic approach ensures smooth installation and rapid system commissioning
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-luma-green">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Site Survey</h3>
                <p className="text-gray-600">
                  Pre-installation assessment of facility requirements and infrastructure readiness
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-luma-blue">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">System Delivery</h3>
                <p className="text-gray-600">
                  Coordinated delivery and positioning of system components with minimal disruption
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-luma-green">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Installation</h3>
                <p className="text-gray-600">
                  Professional installation by certified technicians including all connections and testing
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-luma-blue">4</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Commissioning</h3>
                <p className="text-gray-600">
                  System calibration, testing, and operator training to ensure optimal performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Service */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ongoing Service & Support</h2>
            <p className="text-lg text-gray-600">
              Comprehensive maintenance and support programs to ensure long-term system reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-luma-green/10 rounded-lg flex items-center justify-center mb-4">
                    <Headphones className="h-6 w-6 text-luma-green" />
                  </div>
                  <CardTitle className="text-2xl">Service Programs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-luma-green mt-0.5 flex-shrink-0" />
                      <span>24/7 remote monitoring and diagnostics</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-luma-green mt-0.5 flex-shrink-0" />
                      <span>Scheduled preventive maintenance visits</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-luma-green mt-0.5 flex-shrink-0" />
                      <span>Emergency repair service with rapid response</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-luma-green mt-0.5 flex-shrink-0" />
                      <span>Genuine replacement parts and consumables</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-luma-green mt-0.5 flex-shrink-0" />
                      <span>System upgrades and performance optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-luma-blue/10 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-luma-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Response Times</h3>
                      <p className="text-gray-600">4-hour emergency response, 24-hour standard service</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-luma-green/10 rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-luma-green" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Technical Support</h3>
                      <p className="text-gray-600">Dedicated support team with plasma technology expertise</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-luma-blue/10 rounded-lg flex items-center justify-center">
                      <Settings className="h-6 w-6 text-luma-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Maintenance Plans</h3>
                      <p className="text-gray-600">Customized maintenance schedules based on usage patterns</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Tiers</h2>
            <p className="text-lg text-gray-600">
              Choose the service level that best fits your operational requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-luma-green">Essential</CardTitle>
                <CardDescription>Basic support package</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Phone and email support</li>
                  <li>• Annual maintenance visit</li>
                  <li>• Remote diagnostics</li>
                  <li>• Software updates</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-luma-blue shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-luma-blue">Professional</CardTitle>
                <CardDescription>Comprehensive service plan</CardDescription>
                <div className="px-3 py-1 bg-luma-blue text-white text-xs rounded-full w-fit mx-auto">
                  Most Popular
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• All Essential features</li>
                  <li>• Quarterly maintenance visits</li>
                  <li>• Priority technical support</li>
                  <li>• Preventive part replacement</li>
                  <li>• Performance reporting</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-luma-green">Premium</CardTitle>
                <CardDescription>White-glove service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• All Professional features</li>
                  <li>• Monthly site visits</li>
                  <li>• Dedicated service engineer</li>
                  <li>• 4-hour emergency response</li>
                  <li>• Custom optimization</li>
                </ul>
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
              Ready to Begin Installation Planning?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Contact our installation team to schedule a site survey and discuss your specific requirements and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-white text-luma-green hover:bg-gray-100">
                <Link href="/contact">
                  Schedule Site Survey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-luma-green">
                <Link href="/pricing">View Service Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
