
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Target, Award, Download, ArrowRight, Zap, Beaker, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              About <span className="text-luma-green">GrowLuma</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Pioneering the future of seed treatment through innovative nonthermal plasma technology
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  LUMA builds nonthermal plasma systems that sanitize seed surfaces, boost germination, and reduce chemical inputs. 
                  We make high-performance seed treatment accessible from lab bench to farm.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our technology represents a fundamental shift away from chemical-based seed treatments toward sustainable, 
                  physics-based solutions that enhance crop performance while protecting environmental health.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-8 w-8 text-luma-green" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Innovation</h3>
                  <p className="text-sm text-gray-600 mt-1">Cutting-edge plasma technology</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Beaker className="h-8 w-8 text-luma-blue" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Science-Led</h3>
                  <p className="text-sm text-gray-600 mt-1">Evidence-based approach</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Target className="h-8 w-8 text-luma-green" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Impact</h3>
                  <p className="text-sm text-gray-600 mt-1">Sustainable agriculture</p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="https://cdn.abacus.ai/images/13ff4a39-f1a1-41dc-a072-2e31bb2b0c0a.png"
                alt="Modern research laboratory with plasma treatment equipment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600">
              GrowLuma develops and manufactures nonthermal plasma systems specifically designed for seed treatment applications across agriculture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beaker className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-xl">Technology Development</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  We design and engineer DBD (Dielectric Barrier Discharge) plasma reactors with integrated safety systems and precise control mechanisms.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-luma-blue" />
                </div>
                <CardTitle className="text-xl">Field Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  Rigorous pilot programs and field trials validate treatment protocols across diverse crop types and growing conditions.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-xl">Commercial Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  From lab-scale units to industrial systems, we provide scalable plasma treatment solutions for researchers and growers.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600">
              Meet the engineers and scientists behind GrowLuma's innovative plasma seed treatment technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Seth McQuillan */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src="https://cdn.abacus.ai/images/642ef46f-751d-4843-8d73-0811bec90f14.png"
                    alt="Seth McQuillan - Founder"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Seth McQuillan</h3>
                <p className="text-luma-green font-semibold mb-4">Founder</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Electrical Engineering graduate from Western Michigan University with expertise in DBD reactor design and high-voltage systems. 
                  Seth leads the technical development and serves as MVP lead for GrowLuma's plasma treatment systems.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-luma-green/10 text-luma-green text-sm rounded-full">Electrical Engineering</span>
                  <span className="px-3 py-1 bg-luma-blue/10 text-luma-blue text-sm rounded-full">DBD Reactor Design</span>
                  <span className="px-3 py-1 bg-luma-green/10 text-luma-green text-sm rounded-full">MVP Development</span>
                </div>
              </CardContent>
            </Card>
            
            {/* Noah */}
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="pt-8">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src="https://cdn.abacus.ai/images/d6b05bff-975c-48a8-9221-1ae519807ba4.png"
                    alt="Noah [Last name TBD] - Co-founder"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Noah [Last name TBD]</h3>
                <p className="text-luma-blue font-semibold mb-4">Co-founder / Operations</p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Leads operations and field testing initiatives, specializing in treatment protocol development and pilot program management. 
                  Noah coordinates field trials and validates performance across diverse agricultural applications.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="px-3 py-1 bg-luma-blue/10 text-luma-blue text-sm rounded-full">Operations</span>
                  <span className="px-3 py-1 bg-luma-green/10 text-luma-green text-sm rounded-full">Protocol Testing</span>
                  <span className="px-3 py-1 bg-luma-blue/10 text-luma-blue text-sm rounded-full">Field Pilots</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Advisors & Mentors</h2>
            <p className="text-lg text-gray-600">
              GrowLuma benefits from guidance by experienced professionals in agricultural technology, plasma physics, and business development.
            </p>
          </div>
          
          <Card className="border-0 shadow-lg text-center max-w-2xl mx-auto">
            <CardContent className="pt-12 pb-12">
              <div className="w-24 h-24 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12 text-luma-green" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Advisory Board</h3>
              <p className="text-gray-600 text-lg mb-6">
                [To be updated]
              </p>
              <p className="text-sm text-gray-500">
                We are building relationships with industry experts in plasma technology, agricultural systems, and commercialization. 
                Updates will be provided as our advisory board takes shape.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resources & Downloads</h2>
            <p className="text-lg text-gray-600">
              Access technical specifications, white papers, and other resources about our plasma seed treatment technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-xl">Tech Specifications</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-4">
                  Detailed technical specifications for LUMA plasma treatment systems including electrical requirements and throughput data.
                </CardDescription>
                <Button variant="outline" className="border-luma-green text-luma-green hover:bg-luma-green hover:text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beaker className="h-8 w-8 text-luma-blue" />
                </div>
                <CardTitle className="text-xl">Science Overview</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-4">
                  Scientific principles behind nonthermal plasma seed treatment and pathogen elimination mechanisms.
                </CardDescription>
                <Button variant="outline" className="border-luma-blue text-luma-blue hover:bg-luma-blue hover:text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-xl">Case Studies</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-base mb-4">
                  Field trial results and performance data from pilot programs across different crop types and conditions.
                </CardDescription>
                <Button variant="outline" className="border-luma-green text-luma-green hover:bg-luma-green hover:text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Looking for additional resources or custom documentation?
            </p>
            <Button asChild className="bg-luma-blue hover:bg-blue-700">
              <Link href="/contact">
                Contact Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
