import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MagnifyingGlassIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { cms } from '@/lib/cms';
import { Material, CaseStudy, BlogPost } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

type SearchResults = {
  materials: Material[];
  caseStudies: CaseStudy[];
  blogPosts: BlogPost[];
};

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState<SearchResults>({ materials: [], caseStudies: [], blogPosts: [] });
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast();

  const performSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setHasSearched(true);
    
    try {
      const [materials, caseStudies, blogPosts] = await Promise.all([
        cms.searchMaterials(searchQuery),
        cms.getCaseStudies().then(studies => 
          studies.filter(study =>
            study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            study.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
            study.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            study.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
          )
        ),
        cms.getBlogPosts().then(posts =>
          posts.filter(post =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
          )
        )
      ]);

      setResults({ materials, caseStudies, blogPosts });
    } catch (error) {
      toast({
        title: "Search error",
        description: "Please try again later",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initialQuery = searchParams.get('q');
    if (initialQuery) {
      setQuery(initialQuery);
      performSearch(initialQuery);
    }
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query });
      performSearch(query);
    }
  };

  const totalResults = results.materials.length + results.caseStudies.length + results.blogPosts.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Search
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground/90">
              Find materials, case studies, articles, and technical resources
            </p>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <form onSubmit={handleSearch} className="flex gap-4 mb-8">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search materials, case studies, articles..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 h-12 text-lg"
              />
            </div>
            <Button type="submit" size="lg" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </Button>
          </form>

          {/* Results */}
          {hasSearched && (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  Search Results {query && `for "${query}"`}
                </h2>
                <p className="text-muted-foreground">
                  Found {totalResults} results across materials, case studies, and articles
                </p>
              </div>

              {totalResults === 0 ? (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search terms or browse our categories below.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/materials">
                        <Button variant="outline">Browse Materials</Button>
                      </Link>
                      <Link to="/case-studies">
                        <Button variant="outline">View Case Studies</Button>
                      </Link>
                      <Link to="/blog">
                        <Button variant="outline">Read Articles</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="all">All ({totalResults})</TabsTrigger>
                    <TabsTrigger value="materials">Materials ({results.materials.length})</TabsTrigger>
                    <TabsTrigger value="case-studies">Case Studies ({results.caseStudies.length})</TabsTrigger>
                    <TabsTrigger value="articles">Articles ({results.blogPosts.length})</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-8">
                    <div className="space-y-12">
                      {/* Materials */}
                      {results.materials.length > 0 && (
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Materials</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {results.materials.slice(0, 6).map((material) => (
                              <Card key={material.id} className="bg-card">
                                <CardHeader>
                                  <div className="flex justify-between items-start mb-2">
                                    <Badge variant="outline">{material.category}</Badge>
                                  </div>
                                  <CardTitle className="text-lg">{material.name}</CardTitle>
                                  <CardDescription>{material.shortDescription}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <div className="flex gap-2">
                                    <Link to={`/materials/${material.slug}`} className="flex-1">
                                      <Button variant="outline" size="sm" className="w-full">
                                        View Details
                                      </Button>
                                    </Link>
                                    {material.datasheetUrl && (
                                      <Button variant="outline" size="sm">
                                        <DocumentArrowDownIcon className="h-4 w-4" />
                                      </Button>
                                    )}
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                          {results.materials.length > 6 && (
                            <div className="text-center mt-4">
                              <Link to="/materials">
                                <Button variant="outline">View All Materials</Button>
                              </Link>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Case Studies */}
                      {results.caseStudies.length > 0 && (
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Case Studies</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {results.caseStudies.slice(0, 4).map((study) => (
                              <Card key={study.id} className="bg-card">
                                <CardHeader>
                                  <div className="flex justify-between items-start mb-2">
                                    <Badge variant="outline">{study.category}</Badge>
                                    <span className="text-sm text-muted-foreground">
                                      {new Date(study.date).toLocaleDateString()}
                                    </span>
                                  </div>
                                  <CardTitle className="text-lg">{study.title}</CardTitle>
                                  <CardDescription>{study.summary}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <Link to={`/case-studies/${study.slug}`}>
                                    <Button variant="outline" className="w-full">
                                      Read Case Study
                                    </Button>
                                  </Link>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                          {results.caseStudies.length > 4 && (
                            <div className="text-center mt-4">
                              <Link to="/case-studies">
                                <Button variant="outline">View All Case Studies</Button>
                              </Link>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Blog Posts */}
                      {results.blogPosts.length > 0 && (
                        <div>
                          <h3 className="text-xl font-semibold mb-4">Articles</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {results.blogPosts.slice(0, 4).map((post) => (
                              <Card key={post.id} className="bg-card">
                                <CardHeader>
                                  <div className="flex justify-between items-start mb-2">
                                    <Badge variant="outline">{post.category}</Badge>
                                    <span className="text-sm text-muted-foreground">
                                      {post.readTime} min read
                                    </span>
                                  </div>
                                  <CardTitle className="text-lg">{post.title}</CardTitle>
                                  <CardDescription>{post.excerpt}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <Link to={`/blog/${post.slug}`}>
                                    <Button variant="outline" className="w-full">
                                      Read Article
                                    </Button>
                                  </Link>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                          {results.blogPosts.length > 4 && (
                            <div className="text-center mt-4">
                              <Link to="/blog">
                                <Button variant="outline">View All Articles</Button>
                              </Link>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </TabsContent>

                  <TabsContent value="materials" className="mt-8">
                    {/* Materials tab content would be similar to the materials section above */}
                    <div className="text-center text-muted-foreground">
                      Materials search results will be implemented here
                    </div>
                  </TabsContent>

                  <TabsContent value="case-studies" className="mt-8">
                    <div className="text-center text-muted-foreground">
                      Case studies search results will be implemented here
                    </div>
                  </TabsContent>

                  <TabsContent value="articles" className="mt-8">
                    <div className="text-center text-muted-foreground">
                      Articles search results will be implemented here
                    </div>
                  </TabsContent>
                </Tabs>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}