import { Material, CaseStudy, BlogPost } from './types';
import materialsData from '@/data/materials.json';

// Local data fallback implementation
export class LocalCMS {
  async getMaterials(): Promise<Material[]> {
    return materialsData as Material[];
  }

  async getMaterialBySlug(slug: string): Promise<Material | null> {
    const materials = await this.getMaterials();
    return materials.find(material => material.slug === slug) || null;
  }

  async searchMaterials(query: string): Promise<Material[]> {
    const materials = await this.getMaterials();
    const lowercaseQuery = query.toLowerCase();

    return materials.filter(
      material =>
        material.name.toLowerCase().includes(lowercaseQuery) ||
        material.shortDescription.toLowerCase().includes(lowercaseQuery) ||
        material.category.toLowerCase().includes(lowercaseQuery) ||
        material.application.some(app =>
          app.toLowerCase().includes(lowercaseQuery)
        )
    );
  }

  async filterMaterials(filters: {
    category?: string;
    application?: string;
    minTensileStrength?: number;
    maxDensity?: number;
  }): Promise<Material[]> {
    const materials = await this.getMaterials();

    return materials.filter(material => {
      if (filters.category && material.category !== filters.category)
        return false;
      if (
        filters.application &&
        !material.application.includes(filters.application)
      )
        return false;
      if (
        filters.minTensileStrength &&
        (material.properties.tensile_strength_mpa as number) <
          filters.minTensileStrength
      )
        return false;
      if (
        filters.maxDensity &&
        (material.properties.density_kg_m3 as number) > filters.maxDensity
      )
        return false;
      return true;
    });
  }

  async getRelatedMaterials(materialSlug: string): Promise<Material[]> {
    const material = await this.getMaterialBySlug(materialSlug);
    if (!material || !material.relatedSlugs) return [];

    const materials = await this.getMaterials();
    return materials.filter(m => material.relatedSlugs?.includes(m.slug));
  }

  // Placeholder implementations for case studies and blog posts
  async getCaseStudies(): Promise<CaseStudy[]> {
    return [
      {
        id: 'cs-001',
        slug: 'bridge-rehabilitation-gujarat',
        title: 'Bridge Deck Rehabilitation with Vegnar GFRP',
        summary:
          'Highway AB-12 bridge deck rehabilitation using Vegnar GFRP High Strength, improving load capacity by 35%.',
        content:
          '# Bridge Deck Rehabilitation with Vegnar GFRP\n\n**Project:** Highway AB-12 bridge deck, Gujarat, India\n**Material used:** Vegnar GFRP High Strength\n\n## Summary\n\nVegnar GFRP High Strength was used to reinforce the bridge deck, improving load capacity by 35% while reducing added weight by 40% compared with traditional steel plate overlays.\n\n## Results\n\n- Installation time reduced by 30%\n- No corrosion issues after 12 months\n- Favorable lifecycle cost projections\n\n## Technical Details\n\n- Material thickness applied: 8 mm\n- Bonding adhesive: Vegnar Epoxy-Bond 200\n- Curing time: 24 hours at ambient 30°C',
        date: '2025-08-20',
        category: 'Infrastructure',
        materials: ['vegnar-gfrp-high-strength'],
        images: ['/images/case-bridge-1.jpg'],
        tags: ['bridge', 'rehabilitation', 'infrastructure'],
        author: 'Dr. Rajesh Kumar',
      },
    ];
  }

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
    const caseStudies = await this.getCaseStudies();
    return caseStudies.find(cs => cs.slug === slug) || null;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return [
      {
        id: 'bp-001',
        slug: 'advantages-gfrp-over-steel',
        title: '5 Key Advantages of GFRP Over Traditional Steel Reinforcement',
        excerpt:
          'Discover why GFRP is becoming the preferred choice for modern construction projects.',
        content:
          '# 5 Key Advantages of GFRP Over Traditional Steel Reinforcement\n\nGlass Fiber Reinforced Polymer (GFRP) is revolutionizing the construction industry...',
        date: '2025-08-25',
        author: 'Engineering Team',
        category: 'Technical',
        tags: ['GFRP', 'steel', 'comparison', 'construction'],
        featuredImage:
          'https://images.unsplash.com/photo-1503389152951-9c3d0bca6b0d?auto=format&fit=crop&w=800&q=80', // GFRP rods
        readTime: 5,
      },
      {
        id: 'bp-002',
        slug: 'gfrp-in-bridge-construction',
        title: 'How GFRP is Transforming Bridge Construction in India',
        excerpt:
          'A look at recent bridge projects using GFRP for enhanced durability and reduced maintenance.',
        content:
          '# How GFRP is Transforming Bridge Construction in India\n\nRecent infrastructure projects across India are leveraging GFRP for its corrosion resistance and lightweight properties...',
        date: '2025-09-01',
        author: 'Project Insights',
        category: 'Infrastructure',
        tags: ['GFRP', 'bridge', 'India', 'infrastructure'],
        featuredImage:
          'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', // Bridge construction
        readTime: 4,
      },
      {
        id: 'bp-003',
        slug: 'sustainability-gfrp',
        title: 'Sustainability Benefits of GFRP in Modern Construction',
        excerpt:
          'Explore how GFRP supports green building initiatives and reduces environmental impact.',
        content:
          '# Sustainability Benefits of GFRP in Modern Construction\n\nGFRP is not only strong and durable, but also supports sustainability goals by reducing lifecycle emissions...',
        date: '2025-09-10',
        author: 'Green Build Team',
        category: 'Sustainability',
        tags: ['GFRP', 'sustainability', 'green building'],
        featuredImage:
          'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80', // Sustainability/green
        readTime: 6,
      },
      {
        id: 'bp-004',
        slug: 'gfrp-vs-carbon-fiber',
        title: 'GFRP vs. Carbon Fiber: Which is Right for Your Project?',
        excerpt:
          'A technical comparison between GFRP and carbon fiber for civil engineering applications.',
        content:
          '# GFRP vs. Carbon Fiber: Which is Right for Your Project?\n\nBoth GFRP and carbon fiber have unique advantages. This article compares their properties, costs, and best use cases...',
        date: '2025-09-15',
        author: 'Materials Lab',
        category: 'Technical',
        tags: ['GFRP', 'carbon fiber', 'comparison'],
        featuredImage:
          'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80', // Composite materials
        readTime: 7,
      },
      {
        id: 'bp-005',
        slug: 'future-of-gfrp',
        title: 'The Future of GFRP: Trends and Innovations to Watch',
        excerpt:
          'What’s next for GFRP? We explore upcoming trends, research, and product innovations.',
        content:
          '# The Future of GFRP: Trends and Innovations to Watch\n\nFrom smart composites to new manufacturing techniques, GFRP is set to play a major role in the future of construction...',
        date: '2025-09-20',
        author: 'Innovation Desk',
        category: 'Trends',
        tags: ['GFRP', 'future', 'innovation', 'trends'],
        featuredImage:
          'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=800&q=80', // Product lineup
        readTime: 5,
      },
      {
        id: 'bp-006',
        slug: 'gfrp-installation-tips',
        title: 'Top 10 Tips for Installing GFRP Products Successfully',
        excerpt:
          'Practical advice for engineers and contractors to ensure the best results with GFRP.',
        content:
          '# Top 10 Tips for Installing GFRP Products Successfully\n\nProper installation is key to maximizing the benefits of GFRP. Here are 10 tips from our experts...',
        date: '2025-09-22',
        author: 'Field Support Team',
        category: 'Practical',
        tags: ['GFRP', 'installation', 'tips'],
        featuredImage:
          'https://images.unsplash.com/photo-1461344577544-4e5dc9487184?auto=format&fit=crop&w=800&q=80', // Manufacturing
        readTime: 4,
      },
    ];
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
    const posts = await this.getBlogPosts();
    return posts.find(post => post.slug === slug) || null;
  }
}

// Export default instance
export const cms = new LocalCMS();

// Utility functions for common operations
export const getUniqueCategories = async (): Promise<string[]> => {
  const materials = await cms.getMaterials();
  return [...new Set(materials.map(m => m.category))];
};

export const getUniqueApplications = async (): Promise<string[]> => {
  const materials = await cms.getMaterials();
  const allApplications = materials.flatMap(m => m.application);
  return [...new Set(allApplications)];
};

export const formatPropertyValue = (
  key: string,
  value: number | string | null
): string => {
  if (value === null) return 'N/A';

  const units: Record<string, string> = {
    density_kg_m3: 'kg/m³',
    tensile_strength_mpa: 'MPa',
    flexural_strength_mpa: 'MPa',
    elastic_modulus_gpa: 'GPa',
    elongation_percent: '%',
    thermal_conductivity_w_mk: 'W/m·K',
    water_absorption_percent: '%',
    salt_spray_hours: 'hours',
  };

  const unit = units[key] || '';
  return `${value}${unit ? ' ' + unit : ''}`;
};
