import { Link } from 'react-router-dom';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const navigation = {
  products: [
    { name: 'Standard GFRP', href: '/materials/vegnar-gfrp-standard-1' },
    { name: 'High Strength', href: '/materials/vegnar-gfrp-high-strength' },
    { name: 'Fire Retardant', href: '/materials/vegnar-gfrp-fire-retardant' },
    { name: 'Marine Grade', href: '/materials/vegnar-gfrp-marine-grade' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Gallery', href: '/gallery' },
  ],
  support: [
    { name: 'Contact', href: '/contact' },
    { name: 'Technical Support', href: '/contact?subject=technical' },
    { name: 'Downloads', href: '/materials' },
    { name: 'Documentation', href: '/materials' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/images/gfrp_logo.png" 
                alt="Vegnar GFRP Logo" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-secondary-foreground/80 mb-6 max-w-md">
              Leading manufacturer of Glass Fiber Reinforced Polymer (GFRP) products. 
              Providing innovative composite solutions for construction, infrastructure, 
              and industrial applications.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <BuildingOfficeIcon className="h-5 w-5 text-primary" />
                <span className="text-sm">B-623 RK Iconic, Shital Park
Rajkot, Gujarat 360006, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-primary" />
                <span className="text-sm">+91 90333 31005</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-primary" />
                <span className="text-sm">info@vegnargfrp.com</span>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-secondary-foreground/60">
              © 2025 Vegnar GFRP. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}