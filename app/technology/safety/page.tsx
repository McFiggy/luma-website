
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, AlertTriangle, Lock, Eye, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function SafetyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Safety & <span className="text-luma-green">Compliance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Comprehensive safety systems and regulatory compliance for plasma seed treatment operations
            </p>
          </div>
        </div>
      </section>

      {/* Safety Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Safety-First Design
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  LUMA systems incorporate multiple layers of safety protection, ensuring safe operation 
                  for operators while maintaining high treatment efficacy. Our comprehensive safety 
                  approach addresses electrical, chemical, and operational hazards.
                </p>
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription className="text-base">
                    All LUMA systems meet or exceed relevant safety standards for electrical equipment 
                    and industrial processing systems.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="https://cdn.abacus.ai/images/13ff4a39-f1a1-41dc-a072-2e31bb2b0c0a.png"
                alt="Safe laboratory operation with safety equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interlock Systems */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interlock Systems</h2>
            <p className="text-lg text-gray-600">
              Multi-level safety interlocks ensure plasma is automatically disabled when access panels are opened
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-xl">Hood Interlocks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  Magnetic reed switches detect hood position and immediately shut down high voltage 
                  when the treatment chamber is accessed.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-luma-blue" />
                </div>
                <CardTitle className="text-xl">Case Interlocks</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  Multiple case sensors monitor electrical enclosure access, preventing exposure to 
                  high-voltage components during maintenance.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-xl">Plasma Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  Optical sensors continuously monitor plasma presence and automatically disable 
                  power if plasma conditions become unstable.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Safety Features</h2>
            <p className="text-lg text-gray-600">
              Every LUMA system includes essential safety components and protective measures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-luma-green/10 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-luma-green" />
                </div>
                <CardTitle className="text-2xl">Electrical Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luma-green mt-0.5 flex-shrink-0" />
                    <span>Ground fault protection on all electrical circuits</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luma-green mt-0.5 flex-shrink-0" />
                    <span>Emergency stop switches accessible from all operator positions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luma-green mt-0.5 flex-shrink-0" />
                    <span>Automatic discharge of stored electrical energy</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luma-green mt-0.5 flex-shrink-0" />
                    <span>Overcurrent and overvoltage protection systems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luma-green mt-0.5 flex-shrink-0" />
                    <span>Lockout/tagout capability for maintenance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-luma-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-luma-blue" />
                </div>
                <CardTitle className="text-2xl">Operational Safety</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luma-blue mt-0.5 flex-shrink-0" />
                    <span>Ozone monitoring and ventilation systems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luma-blue mt-0.5 flex-shrink-0" />
                    <span>Temperature monitoring with automatic shutdown</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luma-blue mt-0.5 flex-shrink-0" />
                    <span>Pressure relief and gas flow monitoring</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luma-blue mt-0.5 flex-shrink-0" />
                    <span>Automatic plasma shutdown on anomaly detection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-luma-blue mt-0.5 flex-shrink-0" />
                    <span>Comprehensive operator training and certification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Regulatory Compliance</h2>
            <p className="text-lg text-gray-600">
              LUMA systems comply with relevant safety and electrical standards for industrial equipment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-luma-green" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Electrical Standards</h3>
                <p className="text-gray-600 text-sm">
                  UL/CSA certified components, NEC compliance for electrical installations
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-luma-blue" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Standards</h3>
                <p className="text-gray-600 text-sm">
                  OSHA compliance, ISO 14155 for safety systems integration
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-luma-green" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Systems</h3>
                <p className="text-gray-600 text-sm">
                  ISO 9001 quality management, traceability and documentation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training and Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Training & Support</h2>
            <p className="text-lg text-gray-600">
              Comprehensive training programs ensure safe and effective operation of LUMA systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Operator Certification</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-luma-green mt-0.5 flex-shrink-0" />
                      <span>Comprehensive safety training for all operators</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-luma-green mt-0.5 flex-shrink-0" />
                      <span>Hands-on operation and emergency procedure training</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-luma-green mt-0.5 flex-shrink-0" />
                      <span>Annual refresher training and recertification</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-luma-green mt-0.5 flex-shrink-0" />
                      <span>24/7 technical support and troubleshooting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-luma-blue" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety First Commitment</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our commitment to safety extends beyond equipment design to comprehensive training, 
                  ongoing support, and continuous improvement of safety protocols based on real-world operation feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-luma">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Learn More About Safe Operation?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Contact our safety team to discuss installation requirements, training programs, and compliance standards for your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-white text-luma-green hover:bg-gray-100">
                <Link href="/contact">
                  Schedule Safety Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-luma-green">
                <Link href="/technology/installation">View Installation Requirements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
