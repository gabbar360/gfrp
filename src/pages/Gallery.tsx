import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { MagnifyingGlassIcon, EyeIcon } from '@heroicons/react/24/outline';
import heroImage from '@/assets/hero-bridge.jpg';
import materialsShowcase from '@/assets/materials-showcase.jpg';
import manufacturing from '@/assets/manufacturing.jpg';

const galleryItems = [
  {
    id: 1,
    title: 'GFRP Bridge Construction',
    category: 'Infrastructure',
    description:
      'Advanced GFRP reinforcement in modern bridge construction project',
    image: heroImage,
    project: 'Highway AB-12 Bridge, Gujarat',
    material: 'Vegnar GFRP High Strength',
    year: '2024',
  },
  {
    id: 2,
    title: 'Material Sample Collection',
    category: 'Materials',
    description:
      'Various GFRP material samples showcasing different textures and finishes',
    image: materialsShowcase,
    project: 'Product Development',
    material: 'Multiple Variants',
    year: '2024',
  },
  {
    id: 3,
    title: 'Manufacturing Facility',
    category: 'Manufacturing',
    description:
      'State-of-the-art GFRP manufacturing facility with advanced quality control',
    image: manufacturing,
    project: 'Vegnar Industries',
    material: 'All Products',
    year: '2023',
  },
  {
    id: 4,
    title: 'Marine Application',
    category: 'Marine',
    description: 'GFRP components in offshore platform construction',
    image: heroImage,
    project: 'Offshore Platform Project',
    material: 'Vegnar GFRP Marine Grade',
    year: '2024',
  },
  {
    id: 5,
    title: 'Industrial Panels',
    category: 'Industrial',
    description: 'Fire-retardant GFRP panels in industrial facility',
    image: materialsShowcase,
    project: 'Chemical Plant Upgrade',
    material: 'Vegnar GFRP Fire-Retardant',
    year: '2023',
  },
  {
    id: 6,
    title: 'Quality Testing',
    category: 'Testing',
    description:
      'Comprehensive quality testing and material property validation',
    image: manufacturing,
    project: 'Quality Assurance',
    material: 'All Materials',
    year: '2024',
  },
];

const categories = [
  'All',
  'Infrastructure',
  'Materials',
  'Manufacturing',
  'Marine',
  'Industrial',
  'Testing',
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-secondary/90 text-secondary-foreground py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Project Gallery
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-foreground/90">
              Showcasing real-world applications and manufacturing excellence of
              Vegnar GFRP materials
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      {/* <section className="bg-muted py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <MagnifyingGlassIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by category:</span>
            </div>

            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredItems.length} of {galleryItems.length} images
            </p>
          </div>
        </div>
      </section> */}

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No images found in this category.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSelectedCategory('All')}
              >
                Show All Images
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map(item => (
                <Card
                  key={item.id}
                  className="bg-card shadow-card hover:shadow-elevated transition-shadow group cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-t-lg flex items-center justify-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="secondary"
                            size="sm"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => setSelectedImage(item)}
                          >
                            <EyeIcon className="h-4 w-4 mr-2" />
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <DialogHeader>
                            <DialogTitle>{selectedImage?.title}</DialogTitle>
                          </DialogHeader>
                          {selectedImage && (
                            <div className="space-y-4">
                              <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className="w-full h-96 object-cover rounded-lg"
                              />
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium text-sm text-muted-foreground mb-1">
                                    Project
                                  </h4>
                                  <p>{selectedImage.project}</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-sm text-muted-foreground mb-1">
                                    Material Used
                                  </h4>
                                  <p>{selectedImage.material}</p>
                                </div>
                                <div>
                                  <h4 className="font-medium text-sm text-muted-foreground mb-1">
                                    Category
                                  </h4>
                                  <Badge variant="outline">
                                    {selectedImage.category}
                                  </Badge>
                                </div>
                                <div>
                                  <h4 className="font-medium text-sm text-muted-foreground mb-1">
                                    Year
                                  </h4>
                                  <p>{selectedImage.year}</p>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium text-sm text-muted-foreground mb-1">
                                  Description
                                </h4>
                                <p>{selectedImage.description}</p>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{item.category}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Project:</span>{' '}
                        {item.project}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Material:</span>{' '}
                        {item.material}
                      </div>
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
