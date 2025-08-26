import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import type { Property } from "@shared/schema";

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Get property-specific image slider
  const getSliderImages = () => {
    const imageMap: Record<string, string[]> = {
      // Villa FJ
      "Villa FJ": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5954.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5951.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5950.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5952.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5953.jpeg'
      ],
      // Villa DT
      "Villa DT": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5898.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5896.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5897.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5895.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5899.jpeg'
      ],
      // Villa ALM
      "Villa ALM": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5921.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5920.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5922.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5924.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5923.jpeg'
      ],
      // Villa TD JW
      "Villa TD JW": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5912.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5911.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5910.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5913.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5914.jpeg'
      ],
      // KRYSM
      "KRYSM": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5940.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5941.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5943.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5944.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5942.jpeg'
      ],
      // Villa "KU"
      "Villa \"KU\"": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Ku/IMG_6004.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Ku/IMG_6001.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Ku/IMG_6003.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Ku/IMG_6005.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Ku/IMG_6002.jpeg'
      ],
      // Villa ADR
      "Villa ADR": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5904.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5903.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5902.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5901.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5900.jpeg'
      ],
      // Villa KMD
      "Villa KMD": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5909.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5908.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5906.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5907.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5905.jpeg'
      ],
      // Villa ZZ
      "Villa ZZ": [
        property.image,
        'https://github.com/elfarsaf-dev/Heu/blob/main/ZIezo/IMG_5849.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/ZIezo/IMG_5851.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/ZIezo/IMG_5853.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/ZIezo/IMG_5850.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/ZIezo/IMG_5852.jpeg?raw=true'
      ],
      // Villa RYL
      "Villa RYL": [
        property.image,
        'https://github.com/elfarsaf-dev/Heu/blob/main/Royal/IMG_5854.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Royal/IMG_5858.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Royal/IMG_5857.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Royal/IMG_5856.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Royal/IMG_5855.jpeg?raw=true'
      ],
      // Villa DNDR 2
      "Villa DNDR 2": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5873.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5872.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5870.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5871.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5874.jpeg'
      ],
      // Villa BDL 2A
      "Villa BDL 2A": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5918.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5916.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5915.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5917.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5919.jpeg'
      ],
      // Villa Pine
      "Villa Pine": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5866.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5868.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5869.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5867.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5865.jpeg'
      ],
      // Villa EDLW
      "Villa EDLW": [
        property.image,
        'https://github.com/elfarsaf-dev/Heu/blob/main/Edelwis/IMG_5844.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Edelwis/IMG_5845.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Edelwis/IMG_5846.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Edelwis/IMG_5847.jpeg?raw=true',
        'https://github.com/elfarsaf-dev/Heu/blob/main/Edelwis/IMG_5848.jpeg?raw=true'
      ],
      // Mongkrang SC
      "Mongkrang SC": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5884.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5883.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5881.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5882.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5880.jpeg'
      ],
      // DZ Glamping
      "DZ Glamping": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5928.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5927.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5926.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5929.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5925.jpeg'
      ],
      // ZHY Glamping
      "ZHY Glamping": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5931.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5933.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5934.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5930.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5932.jpeg'
      ],
      // BMW Glamping
      "BMW Glamping": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5935.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5937.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5938.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5936.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5939.jpeg'
      ],
      // Glamping SYD 2
      "Glamping SYD 2": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5948.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5949.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5945.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5947.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5946.jpeg'
      ],
      // AZL Glamping
      "AZL Glamping": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5956.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5955.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5958.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5957.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5959.jpeg'
      ],
      // TR Glamping
      "TR Glamping": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5964.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5961.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5962.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5963.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5960.jpeg'
      ],
      // Glamping LWPR
      "Glamping LWPR": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5969.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5968.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5967.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5965.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5966.jpeg'
      ],
      // B.HILLS B
      "B.HILLS B": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5974.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5973.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5971.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5970.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5972.jpeg'
      ],
      // DV Glamping
      "DV Glamping": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5979.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5978.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5976.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5977.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5975.jpeg'
      ],
      // B.HILLS A
      "B.HILLS A": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5983.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5981.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5980.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5984.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5982.jpeg'
      ],
      // Glamping Jingga
      "Glamping Jingga": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Svg/IMG_5988.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Svg/IMG_5987.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Svg/IMG_5986.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5985.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5989.jpeg'
      ],
      // Glamping SVG
      "Glamping SVG": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/IMG_5993.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/IMG_5992.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/IMG_5991.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Svg/IMG_5994.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Svg/IMG_5990.jpeg'
      ],
      // Glamping ALM
      "Glamping ALM": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Ku/IMG_5999.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Ku/IMG_5998.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Ku/IMG_5996.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Alami/IMG_5997.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Alami/IMG_5995.jpeg'
      ],
      // Glamping DYN
      "Glamping DYN": [
        property.image,
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5898.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5896.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5897.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5895.jpeg',
        'https://raw.githubusercontent.com/elfarsaf-dev/Heu/main/Jingga/IMG_5899.jpeg'
      ]
    };
    
    return imageMap[property.name] || [
      property.image,
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600'
    ];
  };
  
  const sliderImages = getSliderImages();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => prev === 0 ? sliderImages.length - 1 : prev - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleWhatsApp = () => {
    const message = `Halo, saya tertarik dengan ${property.name} di ${property.location}. Bisakah saya mendapatkan informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/6282241819991?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    const message = `Halo, saya ingin menghubungi langsung tentang ${property.name}. Mohon info lebih lanjut`;
    const whatsappUrl = `https://wa.me/6282241819991?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl w-[90vw] max-h-[85vh] overflow-y-auto p-0 rounded-2xl border-0 shadow-2xl" data-testid={`modal-property-${property.id}`}>
        <DialogTitle className="sr-only">{property.name} - Detail Properti</DialogTitle>
        <DialogDescription className="sr-only">
          Detail lengkap untuk {property.name} di {property.location} dengan fasilitas dan informasi booking
        </DialogDescription>
        
        <div className="relative rounded-2xl overflow-hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-3 right-3 z-10 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-1.5 transition-all shadow-lg"
            data-testid="button-close-modal"
          >
            <X className="h-4 w-4 text-gray-600" />
          </Button>
          
          {/* Image Slider */}
          <div className="relative h-80" data-testid="image-slider">
            <div className="h-full">
              {sliderImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${property.name} ${index + 1}`}
                  className={`w-full h-full object-cover ${index === currentSlide ? '' : 'hidden'}`}
                  data-testid={`img-slide-${index}`}
                />
              ))}
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={prevSlide}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-1.5 transition-all shadow-lg"
              data-testid="button-prev-slide"
            >
              <ChevronLeft className="h-4 w-4 text-gray-600" />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={nextSlide}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-1.5 transition-all shadow-lg"
              data-testid="button-next-slide"
            >
              <ChevronRight className="h-4 w-4 text-gray-600" />
            </Button>
            
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white shadow-lg' : 'bg-white bg-opacity-60'
                  }`}
                  data-testid={`button-slide-dot-${index}`}
                />
              ))}
            </div>
          </div>
          
          {/* Property Details */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-2xl font-bold text-gray-900" data-testid="text-modal-name">
                  {property.name}
                </h2>
                <p className="text-base text-gray-600 flex items-center mt-1" data-testid="text-modal-location">
                  <span className="mr-2">📍</span>
                  {property.location}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <Badge className="bg-primary-600 text-white px-3 py-1.5 rounded-full text-sm font-medium capitalize">
                  {property.type}
                </Badge>
                <Badge className="bg-gray-100 text-gray-800 px-3 py-1.5 rounded-full text-sm font-medium" data-testid="text-modal-units">
                  {property.units} unit tersedia
                </Badge>
              </div>
            </div>
            
            {/* Capacity */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kapasitas</h3>
              <p className="text-gray-600 flex items-center" data-testid="text-modal-capacity">
                <span className="mr-2">👥</span>
                {property.capacity}
              </p>
            </div>
            
            {/* Rates */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Harga</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3" data-testid="rates-grid">
                {property.rates.map((rate, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg" data-testid={`rate-item-${index}`}>
                    <p className="font-medium text-gray-900 text-sm">{rate.label}</p>
                    <p className="text-base font-bold text-primary-600">
                      {rate.price > 0 ? new Intl.NumberFormat('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                      }).format(rate.price) : 'Hubungi untuk info harga'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Facilities */}
            <div className="mb-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fasilitas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5" data-testid="facilities-grid">
                {property.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center" data-testid={`facility-item-${index}`}>
                    <Check className="text-primary-600 mr-2 h-3.5 w-3.5" />
                    <span className="text-gray-700 text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Notes */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Syarat & Ketentuan</h3>
              <ul className="space-y-1" data-testid="notes-list">
                {property.notes.map((note, index) => (
                  <li key={index} className="flex items-start" data-testid={`note-item-${index}`}>
                    <Info className="text-primary-600 mr-2 mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Info Message */}
            <div className="mb-5 p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <p className="text-blue-800 text-center font-medium text-sm">
                Ada pertanyaan atau ingin tahu lebih detail? Silakan hubungi kami😊
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                onClick={handleWhatsApp}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2.5 px-5 rounded-xl font-medium transition-colors"
                data-testid="button-whatsapp"
              >
                <span className="mr-2">💬</span>
                Tanya Ketersediaan
              </Button>
              <Button 
                onClick={handleCall}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-5 rounded-xl font-medium transition-colors"
                data-testid="button-call"
              >
                <span className="mr-2">☎️</span>
                Hubungi Sekarang
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}