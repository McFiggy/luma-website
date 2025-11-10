
'use client';

import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  volume: string;
  crop_type: string;
  location: string;
  timeline: string;
  system_interest: string[];
  current_treatment: string;
  additional_info: string;
}

export function PricingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    volume: '',
    crop_type: '',
    location: '',
    timeline: '',
    system_interest: [],
    current_treatment: '',
    additional_info: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      system_interest: checked 
        ? [...prev.system_interest, value]
        : prev.system_interest.filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.volume || !formData.crop_type) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, volume, and crop type are required.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await fetch('/api/pricing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          form_type: 'pricing'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          volume: '',
          crop_type: '',
          location: '',
          timeline: '',
          system_interest: [],
          current_treatment: '',
          additional_info: ''
        });
        toast({
          title: "Request submitted successfully!",
          description: "We'll send you a custom quote within 48 hours.",
          duration: 5000,
        });
      } else {
        const data = await response.json();
        toast({
          title: "Submission failed",
          description: data?.message || "Please try again later.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "Please check your connection and try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-luma-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-luma-green" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h3>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Thank you for your interest in GrowLuma. Our team will review your requirements and 
          send you a custom quote within 48 hours.
        </p>
        <Button 
          onClick={() => setIsSubmitted(false)} 
          variant="outline"
          className="border-luma-green text-luma-green hover:bg-luma-green hover:text-white"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              required
              className="border-gray-300 focus:border-luma-green focus:ring-luma-green"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              required
              className="border-gray-300 focus:border-luma-green focus:ring-luma-green"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-sm font-medium text-gray-700">Company</Label>
            <Input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your company name"
              className="border-gray-300 focus:border-luma-green focus:ring-luma-green"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="(123) 456-7890"
              className="border-gray-300 focus:border-luma-green focus:ring-luma-green"
            />
          </div>
        </div>
      </div>

      {/* Operation Details */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Operation Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="volume" className="text-sm font-medium text-gray-700">
              Annual Seed Volume <span className="text-red-500">*</span>
            </Label>
            <Select onValueChange={(value) => handleSelectChange('volume', value)} value={formData.volume}>
              <SelectTrigger className="border-gray-300 focus:border-luma-green focus:ring-luma-green">
                <SelectValue placeholder="Select volume range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="under-100kg">Under 100 kg</SelectItem>
                <SelectItem value="100-1000kg">100 - 1,000 kg</SelectItem>
                <SelectItem value="1000-10000kg">1,000 - 10,000 kg</SelectItem>
                <SelectItem value="10000-50000kg">10,000 - 50,000 kg</SelectItem>
                <SelectItem value="over-50000kg">Over 50,000 kg</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="crop_type" className="text-sm font-medium text-gray-700">
              Primary Crop Type <span className="text-red-500">*</span>
            </Label>
            <Select onValueChange={(value) => handleSelectChange('crop_type', value)} value={formData.crop_type}>
              <SelectTrigger className="border-gray-300 focus:border-luma-green focus:ring-luma-green">
                <SelectValue placeholder="Select crop type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="corn">Corn</SelectItem>
                <SelectItem value="soybeans">Soybeans</SelectItem>
                <SelectItem value="wheat">Wheat</SelectItem>
                <SelectItem value="lettuce">Lettuce</SelectItem>
                <SelectItem value="leafy-greens">Other Leafy Greens</SelectItem>
                <SelectItem value="vegetables">Vegetables</SelectItem>
                <SelectItem value="herbs">Herbs</SelectItem>
                <SelectItem value="cannabis">Cannabis/Hemp</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium text-gray-700">Location</Label>
            <Input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="City, State/Province"
              className="border-gray-300 focus:border-luma-green focus:ring-luma-green"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="timeline" className="text-sm font-medium text-gray-700">Implementation Timeline</Label>
            <Select onValueChange={(value) => handleSelectChange('timeline', value)} value={formData.timeline}>
              <SelectTrigger className="border-gray-300 focus:border-luma-green focus:ring-luma-green">
                <SelectValue placeholder="Select timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="immediate">Immediate (1-3 months)</SelectItem>
                <SelectItem value="near-term">Near-term (3-6 months)</SelectItem>
                <SelectItem value="planning">Planning phase (6-12 months)</SelectItem>
                <SelectItem value="evaluating">Evaluating options (12+ months)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* System Interest */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">System Interest</h3>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 mb-4">Select all options you'd like to learn more about:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: 'pilot', label: 'Pilot Program', desc: 'Risk-free evaluation' },
              { id: 'lab', label: 'LUMA Lab Unit', desc: 'Small-batch system' },
              { id: 'pro', label: 'LUMA Pro', desc: 'Commercial system' },
              { id: 'service', label: 'Per-batch Service', desc: 'Processing service' }
            ].map((option) => (
              <div key={option.id} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:border-luma-green transition-colors">
                <Checkbox
                  id={option.id}
                  checked={formData.system_interest.includes(option.id)}
                  onCheckedChange={(checked) => handleCheckboxChange(option.id, checked as boolean)}
                  className="mt-0.5"
                />
                <div>
                  <label htmlFor={option.id} className="text-sm font-medium text-gray-900 cursor-pointer">
                    {option.label}
                  </label>
                  <p className="text-xs text-gray-600">{option.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Additional Information</h3>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="current_treatment" className="text-sm font-medium text-gray-700">
              Current Seed Treatment Method
            </Label>
            <Input
              id="current_treatment"
              name="current_treatment"
              type="text"
              value={formData.current_treatment}
              onChange={handleInputChange}
              placeholder="e.g., Fungicide coating, none, etc."
              className="border-gray-300 focus:border-luma-green focus:ring-luma-green"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="additional_info" className="text-sm font-medium text-gray-700">
              Additional Information
            </Label>
            <Textarea
              id="additional_info"
              name="additional_info"
              value={formData.additional_info}
              onChange={handleInputChange}
              placeholder="Tell us about specific challenges, goals, or requirements..."
              rows={4}
              className="border-gray-300 focus:border-luma-green focus:ring-luma-green resize-none"
            />
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full md:w-auto bg-luma-green hover:bg-green-700 text-white px-8 py-3"
        >
          {isLoading ? (
            'Submitting...'
          ) : (
            <>
              Get Custom Quote
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
        
        <p className="text-xs text-gray-500 mt-4">
          By submitting this form, you agree to be contacted by GrowLuma regarding your pricing inquiry. 
          We'll respond within 48 hours with a custom quote based on your requirements.
        </p>
      </div>
    </form>
  );
}
