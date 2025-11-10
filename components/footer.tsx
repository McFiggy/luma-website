
import React from 'react';
import Link from 'next/link';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';
import { NewsletterSignup } from '@/components/newsletter-signup';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-luma-green" />
              <span className="text-xl font-bold text-gray-900">GrowLuma</span>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed">
              Chemical-free seed sanitation with nonthermal plasma. Making high-performance seed treatment accessible from lab bench to farm.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-luma-green" />
                <span>Kalamazoo, Michigan, USA</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-luma-green" />
                <Link href="mailto:hello@growluma.com" className="hover:text-luma-green transition-colors">
                  hello@growluma.com
                </Link>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-luma-green" />
                <Link href="tel:+12693696976" className="hover:text-luma-green transition-colors">
                  (269) 369-6976
                </Link>
              </div>
            </div>
          </div>

          {/* Technology Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Technology</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/technology/how-it-works" className="text-sm text-gray-600 hover:text-luma-green transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/technology/dbd-reactor" className="text-sm text-gray-600 hover:text-luma-green transition-colors">
                  DBD Reactor Design
                </Link>
              </li>
              <li>
                <Link href="/technology/safety" className="text-sm text-gray-600 hover:text-luma-green transition-colors">
                  Safety & Compliance
                </Link>
              </li>
              <li>
                <Link href="/applications" className="text-sm text-gray-600 hover:text-luma-green transition-colors">
                  Applications
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-luma-green transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="text-sm text-gray-600 hover:text-luma-green transition-colors">
                  Benefits & Results
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-luma-green transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-luma-green transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Stay Updated</h3>
            <p className="text-sm text-gray-600">
              Get the latest updates on plasma seed treatment technology and agricultural innovation.
            </p>
            <NewsletterSignup />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600 text-center md:text-left">
              <p>© {new Date().getFullYear()} GrowLuma. All rights reserved.</p>
              <p className="mt-1 font-medium text-gray-700">
                Not a pesticide. No chemical residue. Grower remains responsible for local compliance.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/pricing" className="text-sm text-gray-600 hover:text-luma-green transition-colors">
                Pricing
              </Link>
              <Link href="/faq" className="text-sm text-gray-600 hover:text-luma-green transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
