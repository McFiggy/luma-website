
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, Settings, Shield, Monitor, ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function DBDReactorPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-luma-green">DBD Reactor</span> Design
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Technical specifications and engineering details of our dielectric barrier discharge plasma systems
            </p>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  MVP Architecture
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Our sealed HV AC module features an integrated inverter and step-up transformer 
                  that delivers precise AC output for optimal plasma generation. The system is 
                  designed for reliable operation in agricultural environments.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The DBD (Dielectric Barrier Discharge) configuration creates stable, 
                  uniform plasma between parallel electrodes separated by a dielectric barrier, 
                  ensuring consistent seed treatment across the entire processing volume.
                </p>
              </div>
              
              <Button asChild className="bg-luma-green hover:bg-green-700">
                <Link href="/contact">
                  Request Technical Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="https://cdn.abacus.ai/images/13ff4a39-f1a1-41dc-a072-2e31bb2b0c0a.png"
                alt="DBD reactor laboratory setup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-lg text-gray-600">
              Engineering specifications for LUMA plasma treatment systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Electrical Specifications */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-luma-green/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-luma-green" />
                </div>
                <CardTitle className="text-2xl">Electrical System</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Input Power</h4>
                    <p className="text-gray-600">120V AC / 240V AC</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Frequency</h4>
                    <p className="text-gray-600">10-50 kHz</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Power Output</h4>
                    <p className="text-gray-600">1-5 kW</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">HV Output</h4>
                    <p className="text-gray-600">0-20 kV</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Control Features</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Voltage regulation ±2%</li>
                    <li>• Frequency tuning</li>
                    <li>• Current monitoring</li>
                    <li>• Power factor correction</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Physical Specifications */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-luma-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-luma-blue" />
                </div>
                <CardTitle className="text-2xl">Physical Design</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Chamber Volume</h4>
                    <p className="text-gray-600">0.5-10 L</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Electrode Gap</h4>
                    <p className="text-gray-600">1-5 mm</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Throughput</h4>
                    <p className="text-gray-600">1-100 kg/hr*</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Gas Flow</h4>
                    <p className="text-gray-600">Air, N₂, or Ar</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Materials</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Stainless steel construction</li>
                    <li>• Alumina dielectric barriers</li>
                    <li>• PTFE seals and gaskets</li>
                    <li>• Food-grade components</li>
                  </ul>
                </div>
                <p className="text-xs text-gray-500">* Depends on seed type and treatment protocol</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">System Features</h2>
            <p className="text-lg text-gray-600">
              Advanced features designed for reliable, safe, and efficient operation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-lg">Integrated Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Built-in interlock systems with hood and case monitoring for operator protection
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-8 w-8 text-luma-blue" />
                </div>
                <CardTitle className="text-lg">Process Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Real-time monitoring and control of plasma parameters and treatment conditions
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-lg">Modular Design</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Scalable architecture allows system expansion and customization for specific applications
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-luma-blue" />
                </div>
                <CardTitle className="text-lg">No Consumables</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  System operates without consumable materials - only requires electrical power and ambient air
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 bg-luma-green text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Technical Documentation
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Download detailed technical specifications, installation requirements, and engineering drawings for LUMA systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-white text-luma-green hover:bg-gray-100">
                <Download className="mr-2 h-5 w-5" />
                Download Tech Sheet v0.1
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-luma-green">
                <Link href="/contact">Request Custom Specs</Link>
              </Button>
            </div>
            <p className="text-sm opacity-75">
              Complete specifications available upon request for qualified applications
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
