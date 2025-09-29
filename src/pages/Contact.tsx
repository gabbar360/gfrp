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
import { useToast } from '@/hooks/use-toast';
import { ContactFormData } from '@/lib/types';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  PaperAirplaneIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import contactBackground from '@/assets/contact.jpeg';

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative py-20 overflow-hidden h-[500px]">
        <div 
          className="absolute inset-0 bg-no-repeat bg-center"
          style={{ 
            backgroundImage: `url(${contactBackground})`,
            backgroundSize: '100% 100%'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight animate-fade-in">
              <span className="bg-gradient-to-r from-orange-300 to-yellow-300 bg-clip-text text-transparent">
                GET IN
              </span>
              <br />
              <span className="text-5xl md:text-6xl text-orange-100">
                TOUCH
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Contact Section - 50/50 Split */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Connect with our team of GFRP specialists. We're committed to providing you with expert guidance and innovative solutions.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                <Card className="border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <PhoneIcon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                        <p className="text-gray-600 mb-1">Sales: +91 90333 31031</p>
                        <p className="text-gray-600">Support: +91 90333 31005</p>
                        <p className="text-sm text-gray-500 mt-2">Available Mon-Sat, 10 AM - 7 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <EnvelopeIcon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Address</h3>
                        <p className="text-gray-600 mb-1">sales@vegnar.com</p>
                        <p className="text-sm text-gray-500 mt-2">We respond within 24 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPinIcon className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
                        <p className="text-gray-600 leading-relaxed">
                          B-623, RK Iconic, Sheetal Park,<br />
                          150 Ft. Ring Road, Rajkot<br />
                          Gujarat 360006, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <Card className="shadow-2xl border-0 bg-white">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          required
                          value={formData.name}
                          onChange={e => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={e => handleInputChange('email', e.target.value)}
                          placeholder="your.email@company.com"
                          className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={e => handleInputChange('company', e.target.value)}
                          placeholder="Your company name"
                          className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={e => handleInputChange('phone', e.target.value)}
                          placeholder="+91 12345 67890"
                          className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700">
                        Country
                      </Label>
                      <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                        <SelectTrigger className="h-11 border-gray-300 focus:border-orange-500 focus:ring-orange-500">
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

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={e => handleInputChange('message', e.target.value)}
                        placeholder="Please describe your project requirements, technical specifications, or any questions about our GFRP materials..."
                        rows={5}
                        className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full h-12 text-base font-semibold bg-orange-600 hover:bg-orange-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending Message...
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
          </div>
        </div>
      </section>
    </div>
  );
}
