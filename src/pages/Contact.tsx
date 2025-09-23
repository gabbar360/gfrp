import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { ContactFormData } from '@/lib/types';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

const contactInfo = [
  {
    icon: MapPinIcon,
    title: 'Address',
    details: 'Vegnar Industries\nGujarat, India 380001',
  },
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: '+91 84690 22953\n+91 75673 62291',
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: 'info@vegnargfrp.com\ntechnical@vegnargfrp.com',
  },
  {
    icon: ClockIcon,
    title: 'Business Hours',
    details: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 9:00 AM - 2:00 PM',
  },
];

const materialOptions = [
  'Vegnar GFRP Standard 1',
  'Vegnar GFRP High Strength',
  'Vegnar GFRP Fire-Retardant',
  'Vegnar GFRP Marine Grade',
  'Vegnar GFRP Thermal Insulation',
  'Vegnar GFRP Lightweight',
];

const subjectOptions = [
  'General Inquiry',
  'Technical Support',
  'Product Quote',
  'Project Consultation',
  'Partnership Opportunity',
  'Other',
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    materialInterest: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleMaterialInterestChange = (material: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      materialInterest: checked
        ? [...(prev.materialInterest || []), material]
        : (prev.materialInterest || []).filter(m => m !== material),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        materialInterest: [],
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground/90">
              Get in touch with our technical team for expert guidance on GFRP solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info) => (
              <Card key={info.title} className="bg-card text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="whitespace-pre-line text-center">
                    {info.details}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your company name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+91 12345 67890"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjectOptions.map((subject) => (
                            <SelectItem key={subject} value={subject}>
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Materials of Interest</Label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {materialOptions.map((material) => (
                          <div key={material} className="flex items-center space-x-2">
                            <Checkbox
                              id={material}
                              checked={formData.materialInterest?.includes(material) || false}
                              onCheckedChange={(checked) => handleMaterialInterestChange(material, checked as boolean)}
                            />
                            <Label htmlFor={material} className="text-sm">
                              {material}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please describe your project requirements, technical specifications, or any specific questions you have about our GFRP materials..."
                        rows={5}
                      />
                    </div>

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our technical team provides expert guidance on material selection, 
                    application methods, and performance optimization.
                  </p>
                  <ul className="text-sm space-y-2">
                    <li>• Material property consultation</li>
                    <li>• Application engineering support</li>
                    <li>• Custom material development</li>
                    <li>• Quality assurance assistance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to inquiries within 24 hours during business days. 
                    For urgent technical support, please call us directly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality Commitment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    All our GFRP materials are manufactured under strict quality control 
                    and backed by comprehensive testing documentation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}