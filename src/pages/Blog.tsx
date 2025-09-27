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
  ClockIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { cms } from '@/lib/cms';
import { BlogPost } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

const POSTS_PER_PAGE = 4;

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await cms.getBlogPosts();
        setPosts(data);
        setFilteredPosts(data);

        // Get unique categories
        const uniqueCategories = [...new Set(data.map(post => post.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        toast({
          title: 'Error loading blog posts',
          description: 'Please try again later',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, [toast]);

  useEffect(() => {
    let filtered = posts;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(
        post =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some(tag =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [posts, searchQuery, selectedCategory]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading blog posts...</p>
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
              Technical Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground/90">
              Insights, innovations, and technical guidance from the world of
              GFRP materials
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
                placeholder="Search articles..."
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
              Showing {startIndex + 1}-{Math.min(endIndex, filteredPosts.length)} of {filteredPosts.length} articles
              {filteredPosts.length !== posts.length && ` (filtered from ${posts.length} total)`}
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

      {/* Blog Posts with Sidebar */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground">
                    No articles found matching your criteria.
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
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentPosts.map(post => (
                      <Card
                        key={post.id}
                        className="bg-card shadow-card hover:shadow-elevated transition-shadow flex flex-col overflow-hidden"
                      >
                        {/* Featured Image */}
                        {post.featuredImage ? (
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="aspect-[16/9] w-full object-cover"
                            loading="lazy"
                          />
                        ) : (
                          <div className="aspect-[16/9] bg-gradient-to-br from-muted to-muted/50 rounded-t-lg" />
                        )}
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <Badge variant="outline">{post.category}</Badge>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <CalendarIcon className="h-3 w-3 mr-1" />
                              {new Date(post.date).toLocaleDateString()}
                            </div>
                          </div>
                          <CardTitle className="text-xl leading-tight line-clamp-2">
                            {post.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                        </CardHeader>

                        <CardContent className="pt-0">
                          {/* Author and Read Time */}
                          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                            <div className="flex items-center space-x-2">
                              <UserIcon className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <ClockIcon className="h-4 w-4" />
                              <span>{post.readTime} min read</span>
                            </div>
                          </div>
                          {/* Read More */}
                          <Link to={`/blog/${post.slug}`}>
                            <Button variant="outline" className="w-full">
                              Read Article
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center space-x-2 mt-12">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                      >
                        Previous
                      </Button>
                      
                      <div className="flex space-x-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                          <Button
                            key={page}
                            variant={currentPage === page ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrentPage(page)}
                            className="w-10"
                          >
                            {page}
                          </Button>
                        ))}
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                      >
                        Next
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6 h-fit">
              {/* First Author Card */}
              <Card className="bg-card shadow-card border">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <UserIcon className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground">Tushar</h4>
                      <p className="text-sm text-muted-foreground mb-2">Chief Executive Officer</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Leading expert in GFRP technology with 15+ years of experience in composite materials research and development. PhD in Materials Engineering from IIT Mumbai.
                      </p>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <a 
                        href="https://www.linkedin.com/in/hiranitushar/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <FaLinkedin className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=tushar@vegnar.com"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-red-500 hover:text-red-600 transition-colors"
                      >
                        <HiMail className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Second Author Card */}
              <Card className="bg-card shadow-card border">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center mx-auto">
                      <UserIcon className="h-10 w-10 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground">Aashish</h4>
                      <p className="text-sm text-muted-foreground mb-2">Chief Technology Officer</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Specialist in GFRP structural applications and design optimization. M.Tech in Structural Engineering with expertise in composite reinforcement systems.
                      </p>
                    </div>
                    <div className="flex justify-center space-x-4">
                      <a 
                        href="https://www.linkedin.com/in/ashiishchauhan/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <FaLinkedin className="h-6 w-6" />
                      </a>
                      <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=chauhanashish360@vegnar.com"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-red-500 hover:text-red-600 transition-colors"
                      >
                        <HiMail className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest insights on GFRP technology, industry trends, and
              technical innovations delivered directly to your inbox.
            </p>
            <Link to="/contact">
              <Button size="lg">Subscribe to Updates</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
