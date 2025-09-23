import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import manufacturing from '@/assets/manufacturing.jpg';
import {
  BuildingOfficeIcon,
  UsersIcon,
  AcademicCapIcon,
  TrophyIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const values = [
  {
    name: 'Innovation',
    description: 'Continuously advancing GFRP technology through research and development',
    icon: AcademicCapIcon,
  },
  {
    name: 'Quality',
    description: 'Rigorous testing and quality control in every manufacturing process',
    icon: TrophyIcon,
  },
  {
    name: 'Partnership',
    description: 'Collaborative approach with clients to deliver optimal solutions',
    icon: UsersIcon,
  },
  {
    name: 'Sustainability',
    description: 'Environmentally responsible manufacturing and material solutions',
    icon: BuildingOfficeIcon,
  },
];

const timeline = [
  {
    year: '2010',
    title: 'Company Founded',
    description: 'Vegnar Industries established with focus on advanced composite materials',
  },
  {
    year: '2015',
    title: 'First Major Project',
    description: 'Successful implementation of GFRP solutions in major infrastructure project',
  },
  {
    year: '2018',
    title: 'International Expansion',
    description: 'Expanded operations to serve global markets with enhanced manufacturing capacity',
  },
  {
    year: '2022',
    title: 'Technology Leadership',
    description: 'Achieved industry recognition for innovative GFRP material technologies',
  },
  {
    year: '2025',
    title: 'Sustainable Future',
    description: 'Leading the industry transition to sustainable composite material solutions',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              About Vegnar GFRP
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground/90">
              Pioneering the future of composite materials with innovative GFRP solutions 
              for construction, infrastructure, and industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Our Story</Badge>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                15+ Years of Engineering Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Vegnar GFRP has been at the forefront of Glass Fiber Reinforced Polymer 
                technology since 2010. We combine advanced manufacturing techniques with 
                rigorous quality control to deliver materials that exceed industry standards.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our commitment to innovation has made us a trusted partner for engineers, 
                contractors, and architects worldwide. From standard construction applications 
                to specialized marine and aerospace requirements, we provide solutions that 
                deliver superior performance and long-term value.
              </p>
              <Link to="/contact">
                <Button size="lg">
                  Partner With Us
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src={manufacturing}
                alt="Vegnar GFRP Manufacturing Facility"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide our approach to innovation, quality, and customer partnership
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card key={value.name} className="bg-card text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in our evolution as a leading GFRP manufacturer
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden lg:block" />
            
            <div className="space-y-12">
              {timeline.map((event, index) => (
                <div key={event.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-inherit`}>
                    <Card className="bg-card">
                      <CardHeader>
                        <div className="flex items-center gap-2 justify-center lg:justify-start">
                          <Badge variant="default">{event.year}</Badge>
                        </div>
                        <CardTitle>{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{event.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background hidden lg:block" />
                  
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground">200+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground">50+</div>
              <div className="text-primary-foreground/80">Material Variants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground">15+</div>
              <div className="text-primary-foreground/80">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-foreground">24/7</div>
              <div className="text-primary-foreground/80">Technical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our GFRP solutions can benefit your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">Contact Us</Button>
              </Link>
              <Link to="/materials">
                <Button variant="outline" size="lg">Browse Materials</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}