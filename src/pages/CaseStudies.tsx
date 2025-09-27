import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  MagnifyingGlassIcon,
  CalendarIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { cms } from '@/lib/cms';
import { CaseStudy } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [filteredCaseStudies, setFilteredCaseStudies] = useState<CaseStudy[]>(
    []
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadCaseStudies = async () => {
      try {
        const data = await cms.getCaseStudies();
        setCaseStudies(data);
        setFilteredCaseStudies(data);

        // Get unique categories
        const uniqueCategories = [...new Set(data.map(cs => cs.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        toast({
          title: 'Error loading case studies',
          description: 'Please try again later',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    loadCaseStudies();
  }, [toast]);

  useEffect(() => {
    let filtered = caseStudies;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        cs =>
          cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cs.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cs.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          cs.tags.some(tag =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(cs => cs.category === selectedCategory);
    }

    setFilteredCaseStudies(filtered);
  }, [caseStudies, searchQuery, selectedCategory]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading case studies...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Case Studies
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground/90">
              Real-world applications and success stories of Vegnar GFRP
              materials in action
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-muted py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Results count */}
          <div className="mt-4 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Showing {filteredCaseStudies.length} of {caseStudies.length} case
              studies
            </p>
            {(searchQuery || selectedCategory !== 'all') && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No case studies found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map(caseStudy => (
                <Card
                  key={caseStudy.id}
                  className="bg-card shadow-card hover:shadow-elevated transition-shadow"
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{caseStudy.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarIcon className="h-3 w-3 mr-1" />
                        {new Date(caseStudy.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl leading-tight">
                      {caseStudy.title}
                    </CardTitle>
                    <CardDescription>{caseStudy.summary}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Author */}
                    <div className="flex items-center space-x-2">
                      <UserIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {caseStudy.author}
                      </span>
                    </div>

                    {/* Tags */}
                    <div>
                      <div className="flex flex-wrap gap-1">
                        {caseStudy.tags.slice(0, 3).map(tag => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {caseStudy.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{caseStudy.tags.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Materials Used */}
                    {caseStudy.materials.length > 0 && (
                      <div>
                        <h4 className="text-sm font-medium mb-2">
                          Materials Used
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {caseStudy.materials.slice(0, 2).map(material => (
                            <Badge
                              key={material}
                              variant="outline"
                              className="text-xs"
                            >
                              {material
                                .replace('vegnar-gfrp-', '')
                                .replace('-', ' ')}
                            </Badge>
                          ))}
                          {caseStudy.materials.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{caseStudy.materials.length - 2} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Read More */}
                    <Link to={`/case-studies/${caseStudy.slug}`}>
                      <Button variant="outline" className="w-full mt-4">
                        Read Full Case Study
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Have a Success Story to Share?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We'd love to feature your project using Vegnar GFRP materials.
              Contact us to discuss creating a case study highlighting your
              innovative application.
            </p>
            <Link to="/contact">
              <Button size="lg">Submit Your Project</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
