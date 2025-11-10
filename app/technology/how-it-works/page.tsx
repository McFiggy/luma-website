
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, Shield, Sprout, ArrowRight, Beaker, Activity, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              How <span className="text-luma-green">Plasma Treatment</span> Works
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Understand the science behind nonthermal plasma seed sanitization and germination enhancement
            </p>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  The Plasma Treatment Process
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Nonthermal plasma generates reactive species at atmospheric pressure without significant heating. 
                  This creates an ideal environment for pathogen elimination while preserving seed viability.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-luma-green text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Plasma Generation</h3>
                    <p className="text-gray-600">
                      High-voltage AC creates dielectric barrier discharge between electrodes, 
                      ionizing air molecules to form reactive plasma species.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-luma-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Seed Exposure</h3>
                    <p className="text-gray-600">
                      Seeds pass through the plasma field where reactive species interact with 
                      surface pathogens and seed coat structures.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-luma-green text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Pathogen Elimination</h3>
                    <p className="text-gray-600">
                      Reactive oxygen and nitrogen species disrupt pathogen cell walls and 
                      DNA, effectively sterilizing seed surfaces.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-luma-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Surface Modification</h3>
                    <p className="text-gray-600">
                      Plasma treatment modifies seed surface properties, improving water uptake 
                      and enhancing germination kinetics.
                    </p>
                  </div>
                </div>
              </div>
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

      {/* Scientific Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Scientific Principles</h2>
            <p className="text-lg text-gray-600">
              The effectiveness of plasma treatment is based on well-established physics and chemistry principles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-xl">Reactive Species Generation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  Cold plasma produces hydroxyl radicals (OH•), ozone (O₃), atomic oxygen (O), 
                  and nitric oxide (NO) that are highly effective against pathogens.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-luma-blue" />
                </div>
                <CardTitle className="text-xl">Selective Treatment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  Plasma species preferentially attack pathogen cell membranes and proteins 
                  while leaving seed structures largely intact.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beaker className="h-8 w-8 text-luma-green" />
                </div>
                <CardTitle className="text-xl">Surface Chemistry</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-center">
                  Treatment introduces hydrophilic groups on seed surfaces, enhancing water 
                  absorption and accelerating imbibition processes.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Microscopic View */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="https://cdn.abacus.ai/images/0308afea-e123-44bf-a109-ea97cb0347e5.png"
                alt="Microscopic view of plasma seed treatment"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Microscopic Impact
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At the cellular level, plasma treatment creates precise biochemical changes 
                  that eliminate pathogens while enhancing seed performance.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-luma-green/10 rounded-lg flex items-center justify-center">
                      <Shield className="h-6 w-6 text-luma-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Pathogen Disruption</h3>
                    <p className="text-gray-600">
                      Reactive species penetrate pathogen cell walls, causing membrane damage 
                      and protein denaturation that leads to pathogen death.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-luma-blue/10 rounded-lg flex items-center justify-center">
                      <Sprout className="h-6 w-6 text-luma-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Seed Enhancement</h3>
                    <p className="text-gray-600">
                      Controlled oxidation of seed coat compounds creates micro-channels that 
                      facilitate faster water uptake and gas exchange.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-luma-green/10 rounded-lg flex items-center justify-center">
                      <Zap className="h-6 w-6 text-luma-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Metabolic Activation</h3>
                    <p className="text-gray-600">
                      Plasma treatment can activate dormant metabolic pathways in seeds, 
                      leading to more vigorous germination and early growth.
                    </p>
                  </div>
                </div>
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
              Ready to See Plasma Treatment in Action?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Learn more about our DBD reactor design and see how this technology can be implemented in your operation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-white text-luma-green hover:bg-gray-100">
                <Link href="/technology/dbd-reactor">
                  Explore DBD Reactor <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-luma-green">
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
