import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CalendarIcon,
  UserIcon,
  ClockIcon,
  ArrowLeftIcon,
  TagIcon,
} from '@heroicons/react/24/outline';
import { cms } from '@/lib/cms';
import { BlogPost } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

export default function BlogPostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;

      setLoading(true);
      try {
        const data = await cms.getBlogPostBySlug(slug);
        setPost(data);
      } catch (error) {
        toast({
          title: 'Error loading blog post',
          description: 'Please try again later',
          variant: 'destructive',
        });
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug, toast]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The requested article could not be found.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
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
            <Link to="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
            <span className="text-muted-foreground">/</span>
            <Link
              to="/blog"
              className="text-muted-foreground hover:text-primary"
            >
              Blog
            </Link>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Content with Sidebar */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Image placeholder */}
              <div className="aspect-[16/9] bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-8" />

              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <UserIcon className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {post.readTime} min read
                  </div>
                </div>

                <h1 className="text-4xl font-bold tracking-tight mb-4">
                  {post.title}
                </h1>

                <p className="text-xl text-muted-foreground">{post.excerpt}</p>
              </div>

              {/* Tags */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TagIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Tags</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Content */}
              <Card className="mb-12">
                <CardContent className="pt-6">
                  <div
                    className="prose max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
                    style={{ whiteSpace: 'pre-wrap' }}
                  >
                    {post.content}
                  </div>
                </CardContent>
              </Card>

              {/* Related Content CTA */}
              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      Need Technical Support?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Our engineering team is ready to help with material selection
                      and application guidance.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/contact" state={{ subject: 'Technical Support' }}>
                        <Button size="lg">Contact Technical Team</Button>
                      </Link>
                      <Link to="/materials">
                        <Button variant="outline" size="lg">
                          Browse Materials
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* First Author Card */}
              <Card className="bg-card shadow-card border">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto">
                      <UserIcon className="h-10 w-10 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-foreground">Dr. Rajesh Patel</h4>
                      <p className="text-sm text-muted-foreground mb-2">Chief Technical Officer</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Leading expert in GFRP technology with 15+ years of experience in composite materials research and development. PhD in Materials Engineering from IIT Mumbai.
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        Email
                      </Button>
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
                      <h4 className="font-bold text-lg text-foreground">Eng. Priya Sharma</h4>
                      <p className="text-sm text-muted-foreground mb-2">Senior Application Engineer</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Specialist in GFRP structural applications and design optimization. M.Tech in Structural Engineering with expertise in composite reinforcement systems.
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        Email
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Article Info */}
              <Card className="bg-card shadow-card border">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">Article Information</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Published:</span>
                      <span className="font-medium">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Reading Time:</span>
                      <span className="font-medium">{post.readTime} min</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Category:</span>
                      <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    </div>
                    <div className="pt-2 border-t">
                      <span className="text-muted-foreground block mb-2">Tags:</span>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 3).map(tag => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Articles */}
              <Card className="bg-card shadow-card border">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-4">Related Topics</h4>
                  <div className="space-y-3">
                    <Link to="/materials" className="block p-2 rounded-md hover:bg-muted transition-colors">
                      <div className="text-sm font-medium text-foreground">GFRP Materials Guide</div>
                      <div className="text-xs text-muted-foreground">Complete material specifications</div>
                    </Link>
                    <Link to="/benefits" className="block p-2 rounded-md hover:bg-muted transition-colors">
                      <div className="text-sm font-medium text-foreground">Benefits of GFRP</div>
                      <div className="text-xs text-muted-foreground">Why choose GFRP over steel</div>
                    </Link>
                    <Link to="/contact" className="block p-2 rounded-md hover:bg-muted transition-colors">
                      <div className="text-sm font-medium text-foreground">Technical Support</div>
                      <div className="text-xs text-muted-foreground">Get expert consultation</div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
