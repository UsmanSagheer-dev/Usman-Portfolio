import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$499",
      period: "per project",
      description: "Perfect for small projects and startups",
      features: [
        "Responsive Web Design",
        "Up to 5 Pages",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "1 Month Support",
        "Mobile Optimized"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "per project",
      description: "Best for growing businesses",
      features: [
        "Everything in Basic",
        "Up to 15 Pages",
        "Advanced SEO & Analytics",
        "CMS Integration",
        "API Integration",
        "3 Months Support",
        "Performance Optimization",
        "Database Setup"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact for quote",
      description: "For large-scale applications",
      features: [
        "Everything in Professional",
        "Unlimited Pages",
        "Custom Features",
        "Advanced Backend",
        "Cloud Deployment",
        "6 Months Support",
        "Security Audit",
        "Priority Support"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Pricing Packages
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan for your project needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-2xl animate-on-scroll relative ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full" 
                variant={plan.popular ? "default" : "outline"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;