import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/logo pesona_1756221891563.png";

export default function ContactSectionNew() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Chat langsung dengan tim kami",
      value: "+62 822-4181-9991",
      action: {
        text: "Chat WhatsApp",
        onClick: () => window.open('https://wa.me/6282241819991?text=Halo%2C%20saya%20tertarik%20dengan%20PESONA%20GLAMPING%20TAWANGMANGU', '_blank'),
        className: "bg-green-600 hover:bg-green-700"
      },
      color: "text-green-400"
    },
    {
      icon: Phone,
      title: "Telepon",
      description: "Hubungi kami langsung",
      value: "+62 822-4181-9991",
      action: {
        text: "Telepon Sekarang",
        onClick: () => window.open('tel:+6282241819991'),
        className: "bg-blue-600 hover:bg-blue-700"
      },
      color: "text-blue-400"
    },
    {
      icon: MapPin,
      title: "Lokasi",
      description: "Tawangmangu, Karanganyar",
      value: "Kaki Gunung Lawu",
      color: "text-yellow-400"
    }
  ];

  return (
    <section id="contact" className="py-20 section-blur" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Hubungi</span>
            <span className="text-white"> Kami</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Siap membantu Anda merencanakan liburan yang tak terlupakan di Tawangmangu
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="glass-card p-8 text-center hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`w-16 h-16 ${method.color} mx-auto mb-6 p-4 rounded-2xl glass`}>
                <method.icon className="w-full h-full" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-white/60 mb-4">{method.description}</p>
              <p className="text-lg font-semibold text-white mb-6">{method.value}</p>
              
              {method.action && (
                <Button 
                  onClick={method.action.onClick}
                  className={`w-full text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${method.action.className}`}
                  data-testid={`button-contact-${index}`}
                >
                  {method.action.text}
                </Button>
              )}
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="border-t border-white/10 pt-12">
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            {/* Logo */}
            <div className="w-24 h-24 mx-auto mb-6 glass-card p-4 rounded-2xl">
              <img 
                src={logoImage} 
                alt="PESONA GLAMPING TAWANGMANGU Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            
            <h3 className="text-3xl font-bold gradient-text mb-4">
              PESONA GLAMPING TAWANGMANGU
            </h3>
            
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Pengalaman glamping & villa terbaik di kaki Gunung Lawu dengan fasilitas modern dan pelayanan terbaik
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-white/50 hover:text-primary-400 transition-colors transform hover:scale-110" data-testid="link-facebook">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📘</span>
                </div>
              </a>
              <a href="#" className="text-white/50 hover:text-primary-400 transition-colors transform hover:scale-110" data-testid="link-instagram">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📷</span>
                </div>
              </a>
              <a 
                href="https://wa.me/6282241819991" 
                target="_blank"
                className="text-white/50 hover:text-green-400 transition-colors transform hover:scale-110" 
                data-testid="link-whatsapp"
              >
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💬</span>
                </div>
              </a>
            </div>
            
            <div className="glass-card inline-block px-8 py-4 rounded-2xl">
              <p className="text-white/60 text-center" data-testid="text-copyright">
                Made with ❤️ for travelers seeking unforgettable mountain adventures
                <br />
                <span className="text-sm">&copy; {new Date().getFullYear()} PESONA GLAMPING TAWANGMANGU. All rights reserved.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}