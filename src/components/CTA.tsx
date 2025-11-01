import React from 'react';
import { Button } from './ui/button';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const CTA = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:usmanshahid397@gmail.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+923074715676';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923074715676', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="glass-card p-12 rounded-3xl animate-on-scroll relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's transform your ideas into reality. Get in touch today and receive a free consultation 
              to discuss your project requirements and goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                onClick={handleEmailClick}
                className="min-w-[200px]"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handlePhoneClick}
                className="min-w-[200px]"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={handleWhatsAppClick}
                className="min-w-[200px]"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Quick Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>100% Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;