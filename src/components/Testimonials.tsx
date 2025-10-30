import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Working with Maaz was a game-changer. His skills transformed our app's performance and UX. Highly recommend!",
    image: "/placeholder.svg",
    delay: "0s"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "StartupXYZ",
    content: "Maaz delivers not just code but value. Every line makes sense and serves a purpose.",
    image: "/placeholder.svg",
    delay: "0.2s"
  },
  {
    name: "Emily Davis",
    role: "Engineering Lead",
    company: "InnovateLab",
    content: "The architecture design, speed, and attention to detail were exceptional. Couldn't ask for more!",
    image: "/placeholder.svg",
    delay: "0.4s"
  },
  {
    name: "David Lee",
    role: "Founder",
    company: "GrowthCo",
    content: "Maaz delivered top-notch, clean code and communicated throughout the project. A true professional.",
    image: "/placeholder.svg",
    delay: "0.1s"
  },
  {
    name: "Rachel Green",
    role: "Marketing Lead",
    company: "BrandWorks",
    content: "Maaz understood our vision perfectly and turned it into a beautiful, functional platform.",
    image: "/placeholder.svg",
    delay: "0.3s"
  },
  {
    name: "James Wilson",
    role: "VP Engineering",
    company: "DataFlow",
    content: "His technical expertise and problem-solving skills saved our project. Absolutely brilliant work!",
    image: "/placeholder.svg",
    delay: "0.5s"
  },
  {
    name: "Olivia Martinez",
    role: "Tech Lead",
    company: "CloudNet",
    content: "Working with Maaz was seamless. He's proactive, skilled, and delivers beyond expectations.",
    image: "/placeholder.svg",
    delay: "0.15s"
  },
  {
    name: "Noah Taylor",
    role: "Cloud Engineer",
    company: "DevOps Inc",
    content: "His DevOps knowledge helped us move from chaos to a clean CI/CD setup in no time.",
    image: "/placeholder.svg",
    delay: "0.35s"
  },
  {
    name: "Sophia Brown",
    role: "Senior Developer",
    company: "WebSolutions",
    content: "Maaz's code quality and clean architecture made our complex system easy to understand and maintain.",
    image: "/placeholder.svg",
    delay: "0.25s"
  },
  {
    name: "Ethan Wright",
    role: "Tech Founder",
    company: "StartupHub",
    content: "He built our entire MVP faster and with quality we didn't think was possible. Incredible!",
    image: "/placeholder.svg",
    delay: "0.45s"
  },
  {
    name: "Grace Anderson",
    role: "Entrepreneur",
    company: "VisionTech",
    content: "We had an idea. Maaz turned it into a polished product. Can't thank him enough!",
    image: "/placeholder.svg",
    delay: "0.2s"
  },
  {
    name: "Chloe Thomas",
    role: "UI Engineer",
    company: "PixelPerfect",
    content: "His attention to UI details and animations took our design from good to exceptional.",
    image: "/placeholder.svg",
    delay: "0.4s"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center glow-text animate-on-scroll">
          Testimonials
        </h2>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 testimonials-container">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="animated-border glass-card testimonial-card animate-on-scroll"
                style={{
                  animationDelay: testimonial.delay,
                  transform: `rotate(${(index % 3) - 1}deg)`
                }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground/70">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;