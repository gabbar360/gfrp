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
    
    return materials.filter(material => 
      material.name.toLowerCase().includes(lowercaseQuery) ||
      material.shortDescription.toLowerCase().includes(lowercaseQuery) ||
      material.category.toLowerCase().includes(lowercaseQuery) ||
      material.application.some(app => app.toLowerCase().includes(lowercaseQuery))
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
      if (filters.category && material.category !== filters.category) return false;
      if (filters.application && !material.application.includes(filters.application)) return false;
      if (filters.minTensileStrength && (material.properties.tensile_strength_mpa as number) < filters.minTensileStrength) return false;
      if (filters.maxDensity && (material.properties.density_kg_m3 as number) > filters.maxDensity) return false;
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
        id: "cs-001",
        slug: "bridge-rehabilitation-gujarat",
        title: "Bridge Deck Rehabilitation with Vegnar GFRP",
        summary: "Highway AB-12 bridge deck rehabilitation using Vegnar GFRP High Strength, improving load capacity by 35%.",
        content: "# Bridge Deck Rehabilitation with Vegnar GFRP\n\n**Project:** Highway AB-12 bridge deck, Gujarat, India\n**Material used:** Vegnar GFRP High Strength\n\n## Summary\n\nVegnar GFRP High Strength was used to reinforce the bridge deck, improving load capacity by 35% while reducing added weight by 40% compared with traditional steel plate overlays.\n\n## Results\n\n- Installation time reduced by 30%\n- No corrosion issues after 12 months\n- Favorable lifecycle cost projections\n\n## Technical Details\n\n- Material thickness applied: 8 mm\n- Bonding adhesive: Vegnar Epoxy-Bond 200\n- Curing time: 24 hours at ambient 30°C",
        date: "2025-08-20",
        category: "Infrastructure",
        materials: ["vegnar-gfrp-high-strength"],
        images: ["/images/case-bridge-1.jpg"],
        tags: ["bridge", "rehabilitation", "infrastructure"],
        author: "Dr. Rajesh Kumar"
      }
    ];
  }

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
    const caseStudies = await this.getCaseStudies();
    return caseStudies.find(cs => cs.slug === slug) || null;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return [
      {
        id: "bp-001",
        slug: "advantages-gfrp-over-steel",
        title: "5 Key Advantages of GFRP Over Traditional Steel Reinforcement",
        excerpt: "Discover why GFRP is becoming the preferred choice for modern construction projects.",
        content: "# 5 Key Advantages of GFRP Over Traditional Steel Reinforcement\n\nGlass Fiber Reinforced Polymer (GFRP) is revolutionizing the construction industry...",
        date: "2025-08-25",
        author: "Engineering Team",
        category: "Technical",
        tags: ["GFRP", "steel", "comparison", "construction"],
        featuredImage: "/images/blog-gfrp-vs-steel.jpg",
        readTime: 5
      }
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

export const formatPropertyValue = (key: string, value: number | string | null): string => {
  if (value === null) return 'N/A';
  
  const units: Record<string, string> = {
    'density_kg_m3': 'kg/m³',
    'tensile_strength_mpa': 'MPa',
    'flexural_strength_mpa': 'MPa',
    'elastic_modulus_gpa': 'GPa',
    'elongation_percent': '%',
    'thermal_conductivity_w_mk': 'W/m·K',
    'water_absorption_percent': '%',
    'salt_spray_hours': 'hours'
  };
  
  const unit = units[key] || '';
  return `${value}${unit ? ' ' + unit : ''}`;
};