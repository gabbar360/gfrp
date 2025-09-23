import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  CalendarIcon,
  UserIcon,
  ArrowLeftIcon,
  TagIcon
} from '@heroicons/react/24/outline';
import { cms } from '@/lib/cms';
import { CaseStudy } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

export default function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadCaseStudy = async () => {
      if (!slug) return;
      
      setLoading(true);
      try {
        const data = await cms.getCaseStudyBySlug(slug);
        setCaseStudy(data);
      } catch (error) {
        toast({
          title: "Error loading case study",
          description: "Please try again later",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    loadCaseStudy();
  }, [slug, toast]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested case study could not be found.</p>
          <Link to="/case-studies">
            <Button>
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="bg-muted py-4">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">Home</Link>
            <span className="text-muted-foreground">/</span>
            <Link to="/case-studies" className="text-muted-foreground hover:text-primary">Case Studies</Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{caseStudy.title}</span>
          </nav>
        </div>
      </section>

      {/* Header */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/case-studies">
              <Button variant="ghost" className="mb-6">
                <ArrowLeftIcon className="h-4 w-4 mr-2" />
                Back to Case Studies
              </Button>
            </Link>
            
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="outline">{caseStudy.category}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="h-4 w-4 mr-1" />
                {new Date(caseStudy.date).toLocaleDateString()}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <UserIcon className="h-4 w-4 mr-1" />
                {caseStudy.author}
              </div>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl text-muted-foreground">
              {caseStudy.summary}
            </p>
          </div>

          {/* Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Materials Used */}
            {caseStudy.materials.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Materials Used</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {caseStudy.materials.map((material) => (
                      <Link
                        key={material}
                        to={`/materials/${material}`}
                        className="block"
                      >
                        <Badge variant="outline" className="hover:bg-accent cursor-pointer">
                          {material.replace('vegnar-gfrp-', '').replace('-', ' ')}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <TagIcon className="h-4 w-4 mr-2" />
                  Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <div 
                className="prose max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
                style={{ whiteSpace: 'pre-wrap' }}
              >
                {caseStudy.content}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="bg-muted">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">
                  Interested in Similar Solutions?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Contact our technical team to discuss how Vegnar GFRP materials can benefit your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" state={{ subject: 'Project Consultation' }}>
                    <Button size="lg">Contact Technical Team</Button>
                  </Link>
                  <Link to="/materials">
                    <Button variant="outline" size="lg">Browse Materials</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}