import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { ContactFormData } from '@/lib/types';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/24/outline';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
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
        title: 'Message sent successfully!',
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        subject: '',
        message: '',
        materialInterest: [],
      });
    } catch (error) {
      toast({
        title: 'Error sending message',
        description: 'Please try again later or contact us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-secondary to-secondary/90 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-gray-900/70"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white drop-shadow-2xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 drop-shadow-lg">
              Get in touch with our technical team for expert guidance on GFRP
              solutions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Contact Form */}
          <div className="mb-16">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Send us a message
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground mt-2">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="name"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Name *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={e =>
                          handleInputChange('name', e.target.value)
                        }
                        placeholder="Your full name"
                        className="h-12 border-2 border-gray-200 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="email"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={e =>
                          handleInputChange('email', e.target.value)
                        }
                        placeholder="your.email@company.com"
                        className="h-12 border-2 border-gray-200 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="company"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Company
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={e =>
                          handleInputChange('company', e.target.value)
                        }
                        placeholder="Your company name"
                        className="h-12 border-2 border-gray-200 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="phone"
                        className="text-sm font-semibold text-gray-700"
                      >
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={e =>
                          handleInputChange('phone', e.target.value)
                        }
                        placeholder="+91 12345 67890"
                        className="h-12 border-2 border-gray-200 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-gray-700">
                      Country
                    </Label>
                    <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                      <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-primary">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="germany">Germany</SelectItem>
                        <SelectItem value="france">France</SelectItem>
                        <SelectItem value="japan">Japan</SelectItem>
                        <SelectItem value="china">China</SelectItem>
                        <SelectItem value="brazil">Brazil</SelectItem>
                        <SelectItem value="mexico">Mexico</SelectItem>
                        <SelectItem value="south-africa">South Africa</SelectItem>
                        <SelectItem value="uae">United Arab Emirates</SelectItem>
                        <SelectItem value="singapore">Singapore</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="message"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={e =>
                        handleInputChange('message', e.target.value)
                      }
                      placeholder="Please describe your project requirements, technical specifications, or any specific questions you have about our GFRP materials..."
                      rows={6}
                      className="border-2 border-gray-200 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="h-5 w-5 mr-3" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <PhoneIcon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Call Us</h3>
                <p className="text-gray-600 mb-2">+91 90333 31031</p>
                <p className="text-gray-600">+91 90333 31005</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <EnvelopeIcon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email Us</h3>
                <p className="text-gray-600">sales@vegnar.com</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPinIcon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Visit Us</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  B-623, RK iconic, Sheetal Park,<br />
                  150 Ft. Ring Road, Rajkot<br />
                  Gujarat (360006)
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Business Hours */}
          <Card className="mt-8">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <ClockIcon className="h-6 w-6 text-orange-600" />
                <h3 className="text-xl font-semibold">Business Hours</h3>
              </div>
              <p className="text-gray-600 text-lg">
                Monday - Saturday: 10:00 AM - 7:00 PM
              </p>
              <p className="text-gray-500 mt-2">
                Sunday: Closed
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
