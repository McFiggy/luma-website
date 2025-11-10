
import React from 'react';
import Link from 'next/link';
import { ArrowRight, HelpCircle, Shield, Zap, Leaf, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Frequently Asked <span className="text-luma-green">Questions</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Get answers to common questions about plasma seed treatment technology
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers organized by topic, or contact our team for specific questions
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Safety Questions */}
            <div>
              <Card className="border-0 shadow-lg mb-8">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-luma-green" />
                    <CardTitle className="text-2xl">Safety & Compliance</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-2">
                    <AccordionItem value="safety-1">
                      <AccordionTrigger className="text-left">
                        Is plasma seed treatment safe for operators?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, LUMA systems include comprehensive safety features including interlock systems, 
                        emergency stops, and automatic plasma shutdown when access panels are opened. 
                        All systems meet relevant electrical and safety standards.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="safety-2">
                      <AccordionTrigger className="text-left">
                        Are there any chemical residues after treatment?
                      </AccordionTrigger>
                      <AccordionContent>
                        No, plasma treatment is a physical process that leaves no chemical residues on seeds. 
                        The reactive species generated during treatment break down immediately after the 
                        process, leaving only clean, treated seeds.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="safety-3">
                      <AccordionTrigger className="text-left">
                        Does plasma treatment affect seed viability?
                      </AccordionTrigger>
                      <AccordionContent>
                        When properly applied, plasma treatment actually enhances seed viability and germination rates. 
                        Treatment parameters are carefully optimized to eliminate pathogens while preserving 
                        and often improving seed vigor.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="safety-4">
                      <AccordionTrigger className="text-left">
                        What safety training is required?
                      </AccordionTrigger>
                      <AccordionContent>
                        We provide comprehensive operator training covering system operation, safety protocols, 
                        and emergency procedures. Training is included with all system installations and 
                        annual refresher training is available.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            {/* Technical Questions */}
            <div>
              <Card className="border-0 shadow-lg mb-8">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-luma-blue" />
                    <CardTitle className="text-2xl">Technology & Process</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-2">
                    <AccordionItem value="tech-1">
                      <AccordionTrigger className="text-left">
                        How long does the treatment process take?
                      </AccordionTrigger>
                      <AccordionContent>
                        Treatment time varies by seed type and system capacity, typically ranging from 30 seconds 
                        to 5 minutes per batch. The process is designed to fit into existing seed handling workflows 
                        without significant delays.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="tech-2">
                      <AccordionTrigger className="text-left">
                        What types of pathogens does plasma eliminate?
                      </AccordionTrigger>
                      <AccordionContent>
                        Plasma treatment is effective against a broad spectrum of seed-borne pathogens including 
                        bacteria (E. coli, Salmonella), fungi (Fusarium, Alternaria, Rhizoctonia), and some viruses. 
                        Efficacy varies by pathogen type and treatment parameters.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="tech-3">
                      <AccordionTrigger className="text-left">
                        Can plasma treatment replace all chemical seed treatments?
                      </AccordionTrigger>
                      <AccordionContent>
                        Plasma treatment effectively replaces many chemical seed treatments for pathogen control 
                        and germination enhancement. However, specific applications like insecticide coatings 
                        for pest control may still require chemical alternatives.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="tech-4">
                      <AccordionTrigger className="text-left">
                        What maintenance is required?
                      </AccordionTrigger>
                      <AccordionContent>
                        LUMA systems require minimal maintenance including periodic electrode cleaning, 
                        filter replacement, and annual safety system inspections. Most maintenance can be 
                        performed by trained operators with remote support from our team.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Crop Compatibility */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Leaf className="h-6 w-6 text-luma-green" />
                    <CardTitle className="text-2xl">Crop Compatibility</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-2">
                    <AccordionItem value="crop-1">
                      <AccordionTrigger className="text-left">
                        Which crops work best with plasma treatment?
                      </AccordionTrigger>
                      <AccordionContent>
                        Field crops like corn, soybeans, and wheat show excellent results, as do leafy greens, 
                        herbs, and many vegetable crops. Each crop type has optimized treatment protocols 
                        developed through extensive testing.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="crop-2">
                      <AccordionTrigger className="text-left">
                        Can treated seeds be planted immediately?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, plasma-treated seeds can be planted immediately after treatment or stored normally. 
                        There are no special storage requirements, and treatment effects remain stable during 
                        typical seed storage periods.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="crop-3">
                      <AccordionTrigger className="text-left">
                        Does treatment work on coated or pelleted seeds?
                      </AccordionTrigger>
                      <AccordionContent>
                        Plasma treatment is most effective on uncoated seeds. For coated or pelleted seeds, 
                        treatment can be applied before coating application, or coating formulations may need 
                        adjustment to allow plasma penetration.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="crop-4">
                      <AccordionTrigger className="text-left">
                        Are there any crops that cannot be treated?
                      </AccordionTrigger>
                      <AccordionContent>
                        Most agricultural seeds can be plasma treated, but some very small seeds or those with 
                        specific coating requirements may have limitations. Contact our team to discuss 
                        specific crop compatibility questions.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Settings className="h-6 w-6 text-luma-blue" />
                    <CardTitle className="text-2xl">System & Operations</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-2">
                    <AccordionItem value="ops-1">
                      <AccordionTrigger className="text-left">
                        What are the power requirements?
                      </AccordionTrigger>
                      <AccordionContent>
                        Power requirements vary by system size, typically ranging from standard 120V outlets for 
                        lab units to 480V 3-phase for commercial systems. Specific requirements are provided 
                        during system sizing and design.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="ops-2">
                      <AccordionTrigger className="text-left">
                        How much space is needed for installation?
                      </AccordionTrigger>
                      <AccordionContent>
                        Space requirements depend on system capacity and configuration. Lab units require minimal 
                        bench space, while commercial systems need dedicated floor space with proper ventilation 
                        and safety clearances as outlined in our installation guidelines.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="ops-3">
                      <AccordionTrigger className="text-left">
                        Can systems be integrated with existing equipment?
                      </AccordionTrigger>
                      <AccordionContent>
                        Yes, LUMA systems can be integrated into existing seed processing lines with appropriate 
                        material handling interfaces. Our engineering team works with customers to design 
                        integration solutions for specific operations.
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="ops-4">
                      <AccordionTrigger className="text-left">
                        What is the typical system lifespan?
                      </AccordionTrigger>
                      <AccordionContent>
                        LUMA systems are designed for 10+ year operational life with proper maintenance. 
                        Key components like electrodes may require periodic replacement, but the core system 
                        is built for long-term reliability in agricultural environments.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Organic Compatibility */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-luma-green" />
              </div>
              <CardTitle className="text-3xl">Organic Program Compatibility</CardTitle>
              <CardDescription className="text-lg">
                Understanding plasma treatment in organic and sustainable agriculture
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <Accordion type="single" collapsible className="space-y-2">
                <AccordionItem value="organic-1">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    Is plasma seed treatment approved for organic production?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Plasma seed treatment is a physical process that does not add any synthetic chemicals to seeds, 
                      making it generally compatible with organic certification requirements. However, certification 
                      requirements vary by certifying body and region.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      We recommend discussing plasma treatment with your organic certifier before implementation. 
                      We can provide technical documentation and certification support as needed.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="organic-2">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    How does plasma treatment support sustainable agriculture goals?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 leading-relaxed">
                      Plasma treatment supports sustainability by eliminating the need for chemical fungicides and 
                      pesticides in seed treatment, reducing environmental impact while maintaining or improving crop 
                      performance. The process requires only electrical energy and ambient air, with no chemical inputs or waste generation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="organic-3">
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    Can plasma treatment help with organic transition periods?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-600 leading-relaxed">
                      Yes, plasma treatment can be valuable during organic transition by providing pathogen control 
                      without chemical inputs, helping maintain crop quality and yields while building soil health 
                      and implementing organic practices.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* More FAQs Coming Soon */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg text-center max-w-2xl mx-auto">
            <CardContent className="pt-12 pb-12">
              <div className="w-20 h-20 bg-luma-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="h-10 w-10 text-luma-blue" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">[More FAQs Coming Soon]</h3>
              <p className="text-gray-600 text-lg mb-6">
                We're continuously expanding our FAQ section based on customer questions and feedback. 
                Have a question that's not covered here?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild className="bg-luma-blue hover:bg-blue-700">
                  <Link href="/contact">
                    Ask Our Experts <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="border-luma-green text-luma-green hover:bg-luma-green hover:text-white">
                  <Link href="/about">Learn About Our Team</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-luma">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Still Have Questions?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Our technical team is here to help with any questions about plasma seed treatment technology, 
              applications, or system requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" asChild className="bg-white text-luma-green hover:bg-gray-100">
                <Link href="/contact">
                  Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-luma-green">
                <Link href="/technology">Explore Technology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
