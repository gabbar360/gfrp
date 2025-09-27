import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import {
  DocumentArrowDownIcon,
  StarIcon,
  CalendarIcon,
  CheckCircleIcon,
  ArrowLeftIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { cms, formatPropertyValue } from '@/lib/cms';
import { Material } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

export default function MaterialDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [material, setMaterial] = useState<Material | null>(null);
  const [relatedMaterials, setRelatedMaterials] = useState<Material[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadMaterial = async () => {
      if (!slug) return;

      setLoading(true);
      try {
        const materialData = await cms.getMaterialBySlug(slug);
        if (materialData) {
          setMaterial(materialData);

          // Load related materials
          const related = await cms.getRelatedMaterials(slug);
          setRelatedMaterials(related);
        }
      } catch (error) {
        toast({
          title: 'Error loading material',
          description: 'Please try again later',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    loadMaterial();
  }, [slug, toast]);

  const handleDownload = (url: string, filename: string) => {
    toast({
      title: 'Download started',
      description: `Downloading ${filename}...`,
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <StarIconSolid key={i} className="h-4 w-4 text-yellow-400" />
      ) : (
        <StarIcon key={i} className="h-4 w-4 text-gray-300" />
      )
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">
            Loading material details...
          </p>
        </div>
      </div>
    );
  }

  if (!material) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Material Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The requested material could not be found.
          </p>
          <Link to="/materials">
            <Button>
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Materials
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
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              to="/materials"
              className="text-muted-foreground hover:text-primary"
            >
              Materials
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{material.name}</span>
          </nav>
        </div>
      </section>

      {/* Header */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <Badge variant="outline">{material.category}</Badge>
                {material.certifications &&
                  material.certifications.length > 0 && (
                    <Badge variant="secondary">
                      <CheckCircleIcon className="h-3 w-3 mr-1" />
                      Certified
                    </Badge>
                  )}
              </div>

              <h1 className="text-4xl font-bold tracking-tight mb-4">
                {material.name}
              </h1>

              <p className="text-xl text-muted-foreground mb-6">
                {material.shortDescription}
              </p>

              {/* Applications */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {material.application.map(app => (
                    <Badge key={app} variant="outline">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  state={{ materialInterest: [material.name] }}
                >
                  <Button size="lg">Get Quote</Button>
                </Link>
                {material.datasheetUrl && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() =>
                      handleDownload(
                        material.datasheetUrl!,
                        `${material.name}-datasheet.pdf`
                      )
                    }
                  >
                    <DocumentArrowDownIcon className="h-4 w-4 mr-2" />
                    Download Datasheet
                  </Button>
                )}
              </div>
            </div>

            {/* Image placeholder */}
            <div className="lg:w-96">
              <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Material Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-96">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="properties">Properties</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Material Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="prose max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: material.longDescription,
                    }}
                  />

                  {material.downloads && material.downloads.length > 0 && (
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold mb-4">Downloads</h4>
                      <div className="space-y-2">
                        {material.downloads.map((download, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            className="w-full justify-start"
                            onClick={() =>
                              handleDownload(download.url, download.label)
                            }
                          >
                            <DocumentArrowDownIcon className="h-4 w-4 mr-2" />
                            {download.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="properties" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Properties</CardTitle>
                  <CardDescription>
                    Detailed material properties and performance characteristics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(material.properties).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-2 border-b"
                      >
                        <span className="font-medium">
                          {key
                            .replace(/_/g, ' ')
                            .replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                        <span className="text-muted-foreground">
                          {formatPropertyValue(key, value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certifications" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Certifications & Standards</CardTitle>
                  <CardDescription>
                    Industry certifications and compliance standards
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {material.certifications &&
                  material.certifications.length > 0 ? (
                    <div className="space-y-4">
                      {material.certifications.map(cert => (
                        <div key={cert} className="flex items-center space-x-3">
                          <CheckCircleIcon className="h-5 w-5 text-green-500" />
                          <span className="font-medium">{cert}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">
                      Certification information is being updated. Please contact
                      us for current compliance status.
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Reviews</CardTitle>
                  <CardDescription>
                    Feedback from engineers and project managers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {material.reviews && material.reviews.length > 0 ? (
                    <div className="space-y-6">
                      {material.reviews.map((review, index) => (
                        <div
                          key={index}
                          className="border-b pb-6 last:border-b-0"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <span className="font-medium">
                                {review.author}
                              </span>
                              <div className="flex items-center">
                                {renderStars(review.rating)}
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <CalendarIcon className="h-4 w-4 mr-1" />
                              {new Date(review.date).toLocaleDateString()}
                            </div>
                          </div>
                          <p className="text-muted-foreground">{review.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">
                      No reviews yet. Be the first to review this material!
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Materials */}
      {relatedMaterials.length > 0 && (
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Related Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedMaterials.map(relatedMaterial => (
                <Card key={relatedMaterial.id} className="bg-card">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {relatedMaterial.name}
                    </CardTitle>
                    <CardDescription>
                      {relatedMaterial.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/materials/${relatedMaterial.slug}`}>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
