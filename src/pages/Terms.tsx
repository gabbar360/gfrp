import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CheckCircleIcon,
  BeakerIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  DocumentDuplicateIcon,
  ScaleIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  ClockIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const termsSections = [
  {
    title: 'Acceptance of Terms',
    icon: CheckCircleIcon,
    content:
      'By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.',
    items: [],
  },
  {
    title: 'Product Information',
    icon: BeakerIcon,
    content:
      'All GFRP products and specifications are provided for informational purposes. Actual product performance may vary based on:',
    items: [
      'Environmental conditions',
      'Installation methods',
      'Application requirements',
      'Quality of accompanying materials',
    ],
  },
  {
    title: 'Technical Specifications',
    icon: DocumentCheckIcon,
    content:
      'Technical data sheets and specifications are based on standard testing conditions. Vegnar GFRP reserves the right to modify specifications without prior notice.',
    items: [],
  },
  {
    title: 'Limitation of Liability',
    icon: ExclamationTriangleIcon,
    content:
      'Vegnar GFRP shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our products or information.',
    items: [],
  },
  {
    title: 'Intellectual Property',
    icon: DocumentDuplicateIcon,
    content:
      'All content, trademarks, and intellectual property on this website are owned by Vegnar GFRP and protected by applicable laws.',
    items: [],
  },
  {
    title: 'Governing Law',
    icon: ScaleIcon,
    content:
      'These terms shall be governed by and construed in accordance with the laws of India.',
    items: [],
  },
];

export default function Terms() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-6">
              <Badge
                variant="outline"
                className="mb-4 border-secondary-foreground/30 bg-secondary-foreground/10 backdrop-blur-sm"
              >
                <ScaleIcon className="h-4 w-4 mr-2" />
                Legal Documentation
              </Badge>
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-white to-secondary-foreground/80 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="mt-8 text-xl leading-8 text-secondary-foreground/90 max-w-2xl mx-auto">
              Please read these terms carefully before using our services and
              products. These terms govern your use of our website and services.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 text-secondary-foreground/70">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span className="text-sm">Last updated: January 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <GlobeAltIcon className="h-5 w-5" />
                <span className="text-sm">Governed by Indian Law</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Terms & Conditions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding your rights and responsibilities when using Vegnar
              GFRP services
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {termsSections.map((section, index) => (
              <Card
                key={index}
                className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xl">{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {section.content}
                  </p>
                  {section.items.length > 0 && (
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-20">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20 shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <BuildingOfficeIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Legal Questions?</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Contact our legal team for clarification on terms and
                  conditions
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <div className="text-foreground font-semibold text-lg mb-2">
                    Vegnar Industries
                  </div>
                  <p className="text-muted-foreground">Gujarat, India</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                    <EnvelopeIcon className="h-6 w-6 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground mb-1">
                      Email Legal Team
                    </span>
                    <span className="text-foreground font-semibold">
                      sales@vegnar.com
                    </span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                    <PhoneIcon className="h-6 w-6 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground mb-1">
                      Call Legal Team
                    </span>
                    <span className="text-foreground font-semibold">
                      +91 84690 22953
                    </span>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  Contact Legal Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legal Compliance */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ScaleIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Legal Compliance
              </h3>
              <p className="text-sm text-muted-foreground">
                All terms comply with Indian commercial law
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <DocumentCheckIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                Regular Updates
              </h3>
              <p className="text-sm text-muted-foreground">
                Terms are reviewed and updated regularly
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircleIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Fair Terms</h3>
              <p className="text-sm text-muted-foreground">
                Balanced terms protecting both parties
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
