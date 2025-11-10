
'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
        toast({
          title: "Successfully subscribed!",
          description: "Thank you for subscribing to our newsletter.",
          duration: 5000,
        });
      } else {
        const data = await response.json();
        toast({
          title: "Subscription failed",
          description: data?.message || "Please try again later.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description: "Please check your connection and try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-md">
        <CheckCircle className="h-5 w-5 text-luma-green" />
        <span className="text-sm text-luma-green font-medium">
          Thanks for subscribing!
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex space-x-2">
        <div className="flex-1 relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 text-sm"
            required
          />
        </div>
        <Button
          type="submit"
          size="sm"
          disabled={isLoading || !email}
          className="bg-luma-green hover:bg-green-700 whitespace-nowrap"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </div>
      <p className="text-xs text-gray-500">
        No spam, unsubscribe at any time.
      </p>
    </form>
  );
}
