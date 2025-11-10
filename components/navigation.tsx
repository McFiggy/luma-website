
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navigationItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'Technology', 
    href: '/technology',
    submenu: [
      { name: 'How It Works', href: '/technology/how-it-works' },
      { name: 'DBD Reactor Design', href: '/technology/dbd-reactor' },
      { name: 'Safety & Compliance', href: '/technology/safety' },
      { name: 'Installation & Service', href: '/technology/installation' }
    ]
  },
  { 
    name: 'Benefits & Results', 
    href: '/benefits',
    submenu: [
      { name: 'Benefits Overview', href: '/benefits' },
      { name: 'Case Studies', href: '/benefits/case-studies' },
      { name: 'Trial Results', href: '/benefits/trial-results' }
    ]
  },
  { name: 'Applications', href: '/applications' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-xl font-bold text-luma-green hover:text-luma-blue transition-colors"
          >
            <Zap className="h-8 w-8" />
            <span>GrowLuma</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              item.submenu ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className={`text-sm font-medium transition-colors hover:text-luma-green ${
                        isActive(item.href) ? 'text-luma-green bg-green-50' : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem key={subItem.name} asChild>
                        <Link 
                          href={subItem.href}
                          className={`w-full ${
                            isActive(subItem.href) ? 'text-luma-green font-medium' : ''
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-luma-green rounded-md ${
                    isActive(item.href) 
                      ? 'text-luma-green bg-green-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            
            {/* CTA Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              <Button 
                variant="outline" 
                size="sm" 
                asChild
                className="border-luma-green text-luma-green hover:bg-luma-green hover:text-white"
              >
                <Link href="/pricing">Get Pricing</Link>
              </Button>
              <Button 
                size="sm" 
                asChild
                className="bg-luma-blue hover:bg-blue-700"
              >
                <Link href="/contact">Request Demo</Link>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors hover:text-luma-green rounded-md ${
                      isActive(item.href) 
                        ? 'text-luma-green bg-green-50' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-3 py-2 text-sm transition-colors hover:text-luma-green rounded-md ${
                            isActive(subItem.href) 
                              ? 'text-luma-green bg-green-50' 
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  asChild
                  className="w-full border-luma-green text-luma-green hover:bg-luma-green hover:text-white"
                >
                  <Link href="/pricing" onClick={() => setIsOpen(false)}>Get Pricing</Link>
                </Button>
                <Button 
                  size="sm" 
                  asChild
                  className="w-full bg-luma-blue hover:bg-blue-700"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Request Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
