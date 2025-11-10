
import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Contact <span className="text-luma-green">GrowLuma</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Ready to explore plasma seed treatment for your operation? Get in touch with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Whether you're interested in a pilot program, need technical specifications, or want to discuss partnership opportunities, 
                  we're here to help you understand how plasma seed treatment can benefit your operation.
                </p>
              </div>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-luma-green border-t-0 border-r-0 border-b-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-luma-green/10 rounded-lg flex items-center justify-center">
                          <Mail className="h-6 w-6 text-luma-green" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                        <p className="text-gray-600 mb-2">
                          General inquiries and information requests
                        </p>
                        <a 
                          href="mailto:hello@growluma.com" 
                          className="text-luma-green hover:text-green-700 font-medium"
                        >
                          hello@growluma.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-luma-blue border-t-0 border-r-0 border-b-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-luma-blue/10 rounded-lg flex items-center justify-center">
                          <Send className="h-6 w-6 text-luma-blue" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales & Demos</h3>
                        <p className="text-gray-600 mb-2">
                          Product demonstrations and pricing information
                        </p>
                        <a 
                          href="mailto:sales@growluma.com" 
                          className="text-luma-blue hover:text-blue-700 font-medium"
                        >
                          sales@growluma.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-luma-green border-t-0 border-r-0 border-b-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-luma-green/10 rounded-lg flex items-center justify-center">
                          <Phone className="h-6 w-6 text-luma-green" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                        <p className="text-gray-600 mb-2">
                          Direct line for urgent inquiries
                        </p>
                        <a 
                          href="tel:+12693696976" 
                          className="text-luma-green hover:text-green-700 font-medium"
                        >
                          (269) 369-6976
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-l-4 border-l-luma-blue border-t-0 border-r-0 border-b-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-luma-blue/10 rounded-lg flex items-center justify-center">
                          <MapPin className="h-6 w-6 text-luma-blue" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                        <p className="text-gray-600 mb-2">
                          Based in Michigan, serving North America
                        </p>
                        <p className="text-luma-blue font-medium">
                          Kalamazoo, Michigan, USA
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send us a message</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-lg text-center max-w-2xl mx-auto">
            <CardContent className="pt-8 pb-8">
              <div className="w-16 h-16 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-luma-green" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Response Time</h3>
              <p className="text-gray-600 mb-4">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
              <p className="text-sm text-gray-500">
                Business Hours: Monday - Friday, 9:00 AM - 5:00 PM EST
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
