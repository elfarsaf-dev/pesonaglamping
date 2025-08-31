import { CheckCircle, Star, Users, MapPin } from "lucide-react";

export default function AboutSectionNew() {
  const stats = [
    { icon: Star, label: "Rating 4.9/5", value: "4.9", color: "text-yellow-400" },
    { icon: Users, label: "5000+ Tamu Puas", value: "5K+", color: "text-green-400" },
    { icon: MapPin, label: "50+ Properti", value: "50+", color: "text-blue-400" }
  ];

  const features = [
    "Lokasi strategis di kaki Gunung Lawu",
    "Fasilitas modern dan lengkap",
    "Pelayanan 24/7 yang ramah",
    "Pemandangan alam yang menakjubkan",
    "Akses mudah ke destinasi wisata",
    "Keamanan terjamin"
  ];

  return (
    <section id="about" className="py-20 section-blur" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">Tentang</span>
              <br />
              <span className="text-white">Pesona Glamping</span>
              <br />
              <span className="text-yellow-400">Tawangmangu</span>
            </h2>
            
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Kami adalah penyedia akomodasi glamping dan villa terpercaya di Tawangmangu yang telah melayani ribuan tamu dengan pengalaman menginap yang tak terlupakan.
            </p>
            
            <p className="text-lg text-white/70 mb-10 leading-relaxed">
              Dengan koleksi glamping dan villa terbaik, kami berkomitmen memberikan kenyamanan maksimal bagi setiap tamu. Lokasi strategis di kaki Gunung Lawu memberikan akses mudah ke berbagai destinasi wisata dengan udara sejuk pegunungan.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="text-primary-400 h-5 w-5 flex-shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-2xl text-center animate-slide-up"
                  style={{ animationDelay: `${(index + 6) * 100}ms` }}
                >
                  <stat.icon className={`${stat.color} h-8 w-8 mx-auto mb-2`} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="glass-card p-8 rounded-3xl">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Pesona Glamping Tawangmangu" 
                className="rounded-2xl w-full shadow-2xl"
                data-testid="img-about"
              />
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/20 rounded-full blur-xl floating"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl floating" style={{animationDelay: '3s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}