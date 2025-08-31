import NavigationNew from "@/components/navigation-new";
import HeroSectionNew from "@/components/hero-section-new";
import SearchBarNew from "@/components/search-bar-new";
import PropertyCardNew from "@/components/property-card-new";
import PropertyModal from "@/components/property-modal";
import FloatingToggleNew from "@/components/floating-toggle-new";

import AdvantagesSection from "@/components/advantages-section";
import AboutSectionNew from "@/components/about-section-new";
import ContactSectionNew from "@/components/contact-section-new";
import { Button } from "@/components/ui/button";
import { useProperties } from "@/hooks/use-properties";
import { useState } from "react";
import type { Property } from "@shared/schema";

export default function Home() {
  const {
    properties,
    searchQuery,
    setSearchQuery,
    propertyType,
    setPropertyType,
    displayedCount,
    setDisplayedCount,
    hasMore
  } = useProperties();

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleLoadMore = () => {
    setDisplayedCount(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <NavigationNew />
      <HeroSectionNew />
      <SearchBarNew searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      {/* Properties Section */}
      <section id="properties" className="py-20 section-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Koleksi</span>
              <span className="text-white"> Eksklusif</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Jelajahi glamping dan villa premium dengan teknologi modern dan pemandangan Gunung Lawu yang menakjubkan
            </p>
          </div>
          
          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="properties-grid">
            {properties.slice(0, displayedCount).map((property, index) => (
              <div 
                key={property.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <PropertyCardNew 
                  property={property} 
                  onView={() => setSelectedProperty(property)}
                />
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-16">
              <Button 
                onClick={handleLoadMore}
                className="btn-secondary text-lg px-10 py-4"
                data-testid="button-load-more"
              >
                Lihat Lebih Banyak
              </Button>
            </div>
          )}
        </div>
      </section>

      <AboutSectionNew />
      <ContactSectionNew />

      <FloatingToggleNew 
        currentType={propertyType} 
        onToggle={() => setPropertyType(propertyType === "glamping" ? "villa" : "glamping")}
      />

      {selectedProperty && (
        <PropertyModal 
          property={selectedProperty} 
          onClose={() => setSelectedProperty(null)} 
        />
      )}
    </div>
  );
}
