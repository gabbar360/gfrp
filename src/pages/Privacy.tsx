import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheckIcon, 
  DocumentTextIcon, 
  UserGroupIcon, 
  LockClosedIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const privacySections = [
  {
    title: 'Information We Collect',
    icon: DocumentTextIcon,
    content: 'We collect information you provide directly to us, such as when you:',
    items: [
      'Fill out contact forms or request quotes',
      'Subscribe to our newsletter', 
      'Download technical documents',
      'Contact our support team'
    ]
  },
  {
    title: 'How We Use Your Information',
    icon: UserGroupIcon,
    content: 'We use the information we collect to:',
    items: [
      'Respond to your inquiries and provide customer support',
      'Send you technical information and product updates',
      'Improve our products and services',
      'Comply with legal obligations'
    ]
  },
  {
    title: 'Information Sharing',
    icon: ShieldCheckIcon,
    content: 'We do not sell, trade, or otherwise transfer your personal information to third parties except:',
    items: [
      'With your explicit consent',
      'To comply with legal requirements',
      'To protect our rights and safety'
    ]
  },
  {
    title: 'Data Security',
    icon: LockClosedIcon,
    content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
    items: []
  }
];

export default function Privacy() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="mb-4 border-secondary-foreground/30 bg-secondary-foreground/10 backdrop-blur-sm">
                <ShieldCheckIcon className="h-4 w-4 mr-2" />
                Legal Documentation
              </Badge>
            </div>
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl bg-gradient-to-r from-white to-secondary-foreground/80 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="mt-8 text-xl leading-8 text-secondary-foreground/90 max-w-2xl mx-auto">
              Your privacy is our priority. We are committed to protecting your personal information 
              and being transparent about our data practices.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4 text-secondary-foreground/70">
              <div className="flex items-center gap-2">
                <ClockIcon className="h-5 w-5" />
                <span className="text-sm">Last updated: January 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <GlobeAltIcon className="h-5 w-5" />
                <span className="text-sm">Applies globally</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-b from-background to-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">How We Protect Your Data</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow industry best practices and comply with international privacy standards
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {privacySections.map((section, index) => (
              <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xl">{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{section.content}</p>
                  {section.items.length > 0 && (
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
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
                  <PhoneIcon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">
                  Questions About Your Privacy?
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Our privacy team is here to help you understand how we protect your data
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                    <EnvelopeIcon className="h-6 w-6 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground mb-1">Email Us</span>
                    <span className="text-foreground font-semibold">info@vegnargfrp.com</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-background/50 rounded-lg">
                    <PhoneIcon className="h-6 w-6 text-primary mb-2" />
                    <span className="text-sm text-muted-foreground mb-1">Call Us</span>
                    <span className="text-foreground font-semibold">+91 84690 22953</span>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                  Contact Privacy Team
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Data Protection</h3>
              <p className="text-sm text-muted-foreground">Industry-standard encryption and security measures</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <LockClosedIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Secure Storage</h3>
              <p className="text-sm text-muted-foreground">Your data is stored in secure, compliant facilities</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <UserGroupIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Transparency</h3>
              <p className="text-sm text-muted-foreground">Clear policies and regular updates on data usage</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}