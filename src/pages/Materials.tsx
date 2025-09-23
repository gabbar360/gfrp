import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MagnifyingGlassIcon, DocumentArrowDownIcon, EyeIcon } from '@heroicons/react/24/outline';
import { cms, getUniqueCategories, getUniqueApplications, formatPropertyValue } from '@/lib/cms';
import { Material } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

export default function Materials() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [filteredMaterials, setFilteredMaterials] = useState<Material[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedApplication, setSelectedApplication] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);
  const [applications, setApplications] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadData = async () => {
      try {
        const [materialsData, categoriesData, applicationsData] = await Promise.all([
          cms.getMaterials(),
          getUniqueCategories(),
          getUniqueApplications()
        ]);
        
        setMaterials(materialsData);
        setFilteredMaterials(materialsData);
        setCategories(categoriesData);
        setApplications(applicationsData);
      } catch (error) {
        toast({
          title: "Error loading materials",
          description: "Please try again later",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [toast]);

  useEffect(() => {
    let filtered = materials;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(material =>
        material.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        material.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        material.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        material.application.some(app => app.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(material => material.category === selectedCategory);
    }

    // Apply application filter
    if (selectedApplication !== 'all') {
      filtered = filtered.filter(material => 
        material.application.includes(selectedApplication)
      );
    }

    setFilteredMaterials(filtered);
  }, [materials, searchQuery, selectedCategory, selectedApplication]);

  const handleDownload = (url: string, filename: string) => {
    // In a real app, this would handle the actual download
    toast({
      title: "Download started",
      description: `Downloading ${filename}...`
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
          <p className="mt-4 text-muted-foreground">Loading materials...</p>
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
              Vegnar GFRP Rebars
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground/90">
              High-strength, corrosion-resistant GFRP reinforcement bars for concrete structures
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
                placeholder="Search materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Application Filter */}
            <Select value={selectedApplication} onValueChange={setSelectedApplication}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Application" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Applications</SelectItem>
                {applications.map((application) => (
                  <SelectItem key={application} value={application}>
                    {application}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Results count */}
          <div className="mt-4 flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              Showing {filteredMaterials.length} of {materials.length} materials
            </p>
            {(searchQuery || selectedCategory !== 'all' || selectedApplication !== 'all') && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedApplication('all');
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredMaterials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">No materials found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedApplication('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMaterials.map((material) => (
                <Card key={material.id} className="bg-card shadow-card hover:shadow-elevated transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="mb-2">
                        {material.category}
                      </Badge>
                      {material.certifications && material.certifications.length > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          Certified
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{material.name}</CardTitle>
                    <CardDescription>{material.shortDescription}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Applications */}
                    <div>
                      <h4 className="text-sm font-medium mb-2">Applications</h4>
                      <div className="flex flex-wrap gap-1">
                        {material.application.map((app) => (
                          <Badge key={app} variant="outline" className="text-xs">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Properties */}
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Properties</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-muted-foreground">Tensile Strength:</span>
                          <br />
                          <span className="font-medium">
                            {formatPropertyValue('tensile_strength_mpa', material.properties.tensile_strength_mpa)}
                          </span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Density:</span>
                          <br />
                          <span className="font-medium">
                            {formatPropertyValue('density_kg_m3', material.properties.density_kg_m3)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-4">
                      <Link to={`/materials/${material.slug}`} className="flex-1">
                        <Button variant="default" size="sm" className="w-full">
                          <EyeIcon className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </Link>
                      {material.datasheetUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDownload(material.datasheetUrl!, `${material.name}-datasheet.pdf`)}
                        >
                          <DocumentArrowDownIcon className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}