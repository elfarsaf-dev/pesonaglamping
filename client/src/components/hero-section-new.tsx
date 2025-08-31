import { Star, MapPin, Calendar } from "lucide-react";
import logoImage from "@assets/logo pesona_1756221891563.png";
import { Button } from "@/components/ui/button";

export default function HeroSectionNew() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Background with gradient and effects */}
      <div className="absolute inset-0 hero-bg"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl floating"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl floating" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-yellow-400/20 rounded-full blur-lg floating" style={{animationDelay: '4s'}}></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo with glass effect */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-block glass-card p-8 mb-6">
            <img 
              src={logoImage} 
              alt="PESONA GLAMPING TAWANGMANGU Logo" 
              className="w-48 h-48 mx-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
        
        {/* Main headline with solid colors */}
        <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-yellow-400">Pesona</span>
            <br />
            <span className="text-white">Glamping</span>
            <br />
            <span className="text-yellow-400">Tawangmangu</span>
          </h1>
        </div>
        
        {/* Subtitle */}
        <div className="animate-slide-up" style={{animationDelay: '0.4s'}}>
          <p className="text-xl md:text-2xl dynamic-text-muted mb-8 max-w-3xl mx-auto leading-relaxed">
            Nikmati pengalaman menginap eksklusif di glamping dan villa modern dengan pemandangan Gunung Lawu yang menakjubkan
          </p>
        </div>
        
        {/* Stats cards */}
        <div className="animate-slide-up mb-12" style={{animationDelay: '0.6s'}}>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="glass-card px-6 py-4">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold text-white">4.9 Rating</span>
              </div>
            </div>
            <div className="glass-card px-6 py-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="font-semibold text-white">50+ Properti</span>
              </div>
            </div>
            <div className="glass-card px-6 py-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-green-400" />
                <span className="font-semibold text-white">5000+ Tamu</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="animate-slide-up space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center" style={{animationDelay: '0.8s'}}>
          <Button 
            onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-lg px-10 py-6"
            data-testid="button-explore"
          >
            Jelajahi Properti
          </Button>
          <Button 
            onClick={() => window.open('https://wa.me/6282241819991?text=Halo%2C%20saya%20tertarik%20dengan%20PESONA%20GLAMPING%20TAWANGMANGU', '_blank')}
            className="btn-secondary text-lg px-10 py-6"
            data-testid="button-contact"
          >
            Hubungi Kami
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}