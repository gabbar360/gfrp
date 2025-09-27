import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  CalculatorIcon,
  ClipboardDocumentListIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

interface QuoteFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  applicationArea: string;
  quantity: string;
  specifications: string;
  timeline: string;
  budget: string;
  additionalRequirements: string;
  materials: string[];
}

export default function GetQuote() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    applicationArea: "",
    quantity: "",
    specifications: "",
    timeline: "",
    budget: "",
    additionalRequirements: "",
    materials: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof QuoteFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleMaterialChange = (material: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      materials: checked
        ? [...prev.materials, material]
        : prev.materials.filter((m) => m !== material),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Quote request submitted successfully!",
        description: "Our team will review your requirements and get back to you within 24 hours with a detailed quote.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        projectType: "",
        applicationArea: "",
        quantity: "",
        specifications: "",
        timeline: "",
        budget: "",
        additionalRequirements: "",
        materials: [],
      });
    } catch (error) {
      toast({
        title: "Error submitting quote request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const materialOptions = [
    "GFRP Rebars",
    "GFRP Mesh",
    "GFRP Sheets",
    "GFRP Profiles",
    "GFRP Pipes",
    "Custom GFRP Solutions",
  ];

  const features = [
    {
      icon: CalculatorIcon,
      title: "Accurate Pricing",
      description: "Get detailed quotes based on your exact specifications",
    },
    {
      icon: ClipboardDocumentListIcon,
      title: "Technical Support",
      description: "Our experts will help optimize your material selection",
    },
    {
      icon: CheckCircleIcon,
      title: "Quality Assurance",
      description: "All materials meet international standards and certifications",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-primary to-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <CalculatorIcon className="h-16 w-16 mx-auto mb-6 text-white/90" />
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-white drop-shadow-2xl">
              Get Your Quote
            </h1>
            <p className="mt-6 text-xl leading-8 text-white/90 drop-shadow-lg">
              Request a customized quote for your GFRP material requirements. Our technical team will provide detailed pricing and specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Request Your Custom Quote
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground mt-2">
                Fill out the form below with your project details and we'll provide a comprehensive quote
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        className="h-12 border-2 border-gray-200 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@company.com"
                        className="h-12 border-2 border-gray-200 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="company" className="text-sm font-semibold text-gray-700">
                        Company Name *
                      </Label>
                      <Input
                        id="company"
                        required
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name"
                        className="h-12 border-2 border-gray-200 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 12345 67890"
                        className="h-12 border-2 border-gray-200 focus:border-primary transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Project Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="projectType" className="text-sm font-semibold text-gray-700">
                        Project Type *
                      </Label>
                      <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-primary">
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="infrastructure">Infrastructure</SelectItem>
                          <SelectItem value="marine">Marine</SelectItem>
                          <SelectItem value="industrial">Industrial</SelectItem>
                          <SelectItem value="residential">Residential</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="applicationArea" className="text-sm font-semibold text-gray-700">
                        Application Area *
                      </Label>
                      <Select value={formData.applicationArea} onValueChange={(value) => handleInputChange("applicationArea", value)}>
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-primary">
                          <SelectValue placeholder="Select application area" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="reinforcement">Concrete Reinforcement</SelectItem>
                          <SelectItem value="structural">Structural Elements</SelectItem>
                          <SelectItem value="cladding">Cladding & Facades</SelectItem>
                          <SelectItem value="piping">Piping Systems</SelectItem>
                          <SelectItem value="flooring">Flooring Solutions</SelectItem>
                          <SelectItem value="custom">Custom Application</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="quantity" className="text-sm font-semibold text-gray-700">
                        Estimated Quantity *
                      </Label>
                      <Input
                        id="quantity"
                        required
                        value={formData.quantity}
                        onChange={(e) => handleInputChange("quantity", e.target.value)}
                        placeholder="e.g., 1000 meters, 50 sheets"
                        className="h-12 border-2 border-gray-200 focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="timeline" className="text-sm font-semibold text-gray-700">
                        Project Timeline *
                      </Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-primary">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                          <SelectItem value="short">Short term (1 month)</SelectItem>
                          <SelectItem value="medium">Medium term (2-3 months)</SelectItem>
                          <SelectItem value="long">Long term (3+ months)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Material Selection */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Material Requirements</h3>
                  <div className="space-y-4">
                    <Label className="text-sm font-semibold text-gray-700">
                      Select Materials of Interest *
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {materialOptions.map((material) => (
                        <div key={material} className="flex items-center space-x-3">
                          <Checkbox
                            id={material}
                            checked={formData.materials.includes(material)}
                            onCheckedChange={(checked) =>
                              handleMaterialChange(material, checked as boolean)
                            }
                          />
                          <Label htmlFor={material} className="text-sm font-medium">
                            {material}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Technical Specifications</h3>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <Label htmlFor="specifications" className="text-sm font-semibold text-gray-700">
                        Technical Specifications *
                      </Label>
                      <Textarea
                        id="specifications"
                        required
                        value={formData.specifications}
                        onChange={(e) => handleInputChange("specifications", e.target.value)}
                        placeholder="Please provide detailed specifications: dimensions, strength requirements, environmental conditions, standards compliance, etc."
                        rows={4}
                        className="border-2 border-gray-200 focus:border-primary transition-colors resize-none"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="budget" className="text-sm font-semibold text-gray-700">
                        Budget Range (Optional)
                      </Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger className="h-12 border-2 border-gray-200 focus:border-primary">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1l">Under ₹1 Lakh</SelectItem>
                          <SelectItem value="1l-5l">₹1-5 Lakhs</SelectItem>
                          <SelectItem value="5l-10l">₹5-10 Lakhs</SelectItem>
                          <SelectItem value="10l-25l">₹10-25 Lakhs</SelectItem>
                          <SelectItem value="25l-50l">₹25-50 Lakhs</SelectItem>
                          <SelectItem value="above-50l">Above ₹50 Lakhs</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="additionalRequirements" className="text-sm font-semibold text-gray-700">
                        Additional Requirements
                      </Label>
                      <Textarea
                        id="additionalRequirements"
                        value={formData.additionalRequirements}
                        onChange={(e) => handleInputChange("additionalRequirements", e.target.value)}
                        placeholder="Any additional requirements, special conditions, delivery preferences, installation support needed, etc."
                        rows={3}
                        className="border-2 border-gray-200 focus:border-primary transition-colors resize-none"
                      />
                    </div>
                  </div>
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
                      Submitting Quote Request...
                    </>
                  ) : (
                    <>
                      <CalculatorIcon className="h-5 w-5 mr-3" />
                      Request Quote
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Need Immediate Assistance?</h2>
            <p className="text-lg text-muted-foreground">Our technical team is ready to help you with your GFRP requirements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="text-center p-6">
              <PhoneIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">Speak directly with our technical experts</p>
              <div className="space-y-1">
                <p className="font-medium">+91 90333 31031</p>
                <p className="font-medium">+91 90333 31005</p>
              </div>
            </Card>
            <Card className="text-center p-6">
              <EnvelopeIcon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground mb-4">Send us your detailed requirements</p>
              <p className="font-medium">sales@vegnar.com</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}