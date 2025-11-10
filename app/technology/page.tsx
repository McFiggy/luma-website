
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-luma-green">Technology</span> Overview
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Explore our nonthermal plasma technology and learn how it revolutionizes seed treatment
            </p>
          </div>
        </div>
      </section>

      {/* Technology Navigation */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/technology/how-it-works" className="group">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:border-luma-green">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-luma-green transition-colors">
                  How It Works
                </h3>
                <p className="text-gray-600 mb-4">
                  Understanding the science behind nonthermal plasma seed treatment
                </p>
                <Button variant="link" className="text-luma-green p-0">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </Link>

            <Link href="/technology/dbd-reactor" className="group">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:border-luma-blue">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-luma-blue transition-colors">
                  DBD Reactor Design
                </h3>
                <p className="text-gray-600 mb-4">
                  Technical specifications and engineering details of our reactor systems
                </p>
                <Button variant="link" className="text-luma-blue p-0">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </Link>

            <Link href="/technology/safety" className="group">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:border-luma-green">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-luma-green transition-colors">
                  Safety & Compliance
                </h3>
                <p className="text-gray-600 mb-4">
                  Safety systems, interlocks, and regulatory compliance information
                </p>
                <Button variant="link" className="text-luma-green p-0">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </Link>

            <Link href="/technology/installation" className="group">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:border-luma-blue">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-luma-blue transition-colors">
                  Installation & Service
                </h3>
                <p className="text-gray-600 mb-4">
                  Setup requirements, maintenance, and ongoing service support
                </p>
                <Button variant="link" className="text-luma-blue p-0">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
