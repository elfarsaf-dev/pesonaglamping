import { MapPin, Users, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Property } from "@shared/schema";

interface PropertyCardNewProps {
  property: Property;
  onView: () => void;
}

export default function PropertyCardNew({ property, onView }: PropertyCardNewProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const lowestRate = Math.min(...property.rates.map(rate => rate.price));

  return (
    <div className="group relative overflow-hidden rounded-3xl glass-card hover-lift cursor-pointer" onClick={onView} data-testid={`card-property-${property.id}`}>
      {/* Property Image */}
      <div className="relative h-40 md:h-64 overflow-hidden">
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Property type badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
            property.type === 'glamping' 
              ? 'bg-green-500/20 text-green-300 border border-green-400/30' 
              : 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
          }`}>
            {property.type === 'glamping' ? 'Glamping' : 'Villa'}
          </span>
        </div>
        
        {/* Rating badge */}
        <div className="absolute top-4 right-4 flex items-center space-x-1 bg-black/30 backdrop-blur-md rounded-full px-2 py-1">
          <Star className="w-3 h-3 text-yellow-400 fill-current" />
          <span className="text-white text-xs font-medium">4.8</span>
        </div>
        
        {/* View button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button className="bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-2xl px-6 py-3 font-semibold transition-all duration-300 hover:bg-white/30">
            <Eye className="w-4 h-4 mr-2" />
            Lihat Detail
          </Button>
        </div>
      </div>
      
      {/* Property Info */}
      <div className="p-3 md:p-6">
        {/* Property name and location */}
        <div className="mb-3 md:mb-4">
          <h3 className="text-sm md:text-xl font-bold dynamic-text mb-1 md:mb-2 group-hover:text-primary-300 transition-colors line-clamp-2">
            {property.name}
          </h3>
          <div className="flex items-center dynamic-text-light">
            <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1 text-primary-400 flex-shrink-0" />
            <span className="text-xs md:text-sm truncate">{property.location}</span>
          </div>
        </div>
        
        {/* Facilities preview */}
        <div className="mb-3 md:mb-4">
          <div className="flex items-center dynamic-text-light mb-1 md:mb-2">
            <Users className="w-3 h-3 md:w-4 md:h-4 mr-1 text-yellow-400" />
            <span className="text-xs md:text-sm">{property.capacity}</span>
          </div>
          <div className="hidden md:flex flex-wrap gap-2">
            {property.facilities.slice(0, 2).map((facility, index) => (
              <span 
                key={index}
                className="text-xs bg-white/10 dynamic-text-muted px-2 py-1 rounded-lg backdrop-blur-sm"
              >
                {facility}
              </span>
            ))}
            {property.facilities.length > 2 && (
              <span className="text-xs text-primary-300 font-medium">
                +{property.facilities.length - 2} lainnya
              </span>
            )}
          </div>
          <div className="md:hidden">
            <span className="text-xs text-primary-300 font-medium">
              {property.facilities.length} fasilitas
            </span>
          </div>
        </div>
        
        {/* Pricing */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-2 md:mb-0">
            <p className="text-lg md:text-2xl font-bold dynamic-text">
              {formatPrice(lowestRate)}
            </p>
            <p className="text-xs md:text-sm dynamic-text-light">per malam</p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-xs md:text-sm dynamic-text-light hidden md:block">Mulai dari</p>
            <p className="text-xs text-primary-300 font-medium">
              {property.rates.length} pilihan harga
            </p>
          </div>
        </div>
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500/10 to-yellow-400/10 blur-xl"></div>
      </div>
    </div>
  );
}