import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavigationNew() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Beranda", href: "#home" },
    { label: "Properti", href: "#properties" },
    { label: "Tentang", href: "#about" },
    { label: "Kontak", href: "#contact" }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-card backdrop-blur-md bg-black/20 border-white/10' 
        : 'bg-transparent'
    }`} data-testid="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">PG</span>
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold">Pesona Glamping</h1>
              <p className="text-sm text-white/70">Tawangmangu</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium relative group"
                data-testid={`link-${item.label.toLowerCase()}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => window.open('https://wa.me/6282241819991?text=Halo%2C%20saya%20tertarik%20dengan%20PESONA%20GLAMPING%20TAWANGMANGU', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              data-testid="button-whatsapp"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
              data-testid="button-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card border-t border-white/10" data-testid="mobile-menu">
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-white/80 hover:text-white py-3 px-4 rounded-xl hover:bg-white/10 transition-all duration-200 animate-slide-in"
                style={{ animationDelay: `${index * 50}ms` }}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  window.open('https://wa.me/6282241819991?text=Halo%2C%20saya%20tertarik%20dengan%20PESONA%20GLAMPING%20TAWANGMANGU', '_blank');
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                Hubungi WhatsApp
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}