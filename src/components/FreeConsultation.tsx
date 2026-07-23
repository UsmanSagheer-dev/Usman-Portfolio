import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Calendar, Clock, Gift } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const consultationSchema = z.object({
  name: z.string().trim().min(2, { message: "Name must be at least 2 characters" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().min(10, { message: "Phone number must be at least 10 digits" }).max(20, { message: "Phone number must be less than 20 characters" }),
  projectDetails: z.string().trim().min(10, { message: "Please provide at least 10 characters" }).max(500, { message: "Project details must be less than 500 characters" })
});

const FreeConsultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    const result = consultationSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          newErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(newErrors);
      toast({
        title: "Validation Error",
        description: "Please check the form for errors",
        variant: "destructive"
      });
      return;
    }

    // Encode data for WhatsApp
    const message = `Free Consultation Request:\n\nName: ${encodeURIComponent(formData.name)}\nEmail: ${encodeURIComponent(formData.email)}\nPhone: ${encodeURIComponent(formData.phone)}\n\nProject Details:\n${encodeURIComponent(formData.projectDetails)}`;
    
    window.open(`https://wa.me/923049469130?text=${message}`, '_blank');
    
    toast({
      title: "Request Sent!",
      description: "Opening WhatsApp to complete your consultation request"
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectDetails: ''
    });
    setErrors({});
  };

  return (
    <section id="FreeConsultation" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Info */}
          <div className="animate-on-scroll">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                <Gift className="w-5 h-5" />
                <span className="font-semibold">Limited Time Offer</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
                Get a Free Consultation
              </h2>
              <p className="text-muted-foreground text-lg">
                Schedule a 30-minute free consultation to discuss your project. 
                No obligations, just valuable insights and recommendations.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                  <p className="text-muted-foreground text-sm">
                    Choose a time that works best for you. Available on weekdays and weekends.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">30-Minute Session</h3>
                  <p className="text-muted-foreground text-sm">
                    Enough time to understand your needs and provide actionable recommendations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Completely Free</h3>
                  <p className="text-muted-foreground text-sm">
                    No hidden costs. Get professional advice at no charge.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Book Your Free Session</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'border-destructive' : ''}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? 'border-destructive' : ''}
                  />
                  {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Textarea
                    name="projectDetails"
                    placeholder="Tell me about your project *"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    className={`min-h-[120px] ${errors.projectDetails ? 'border-destructive' : ''}`}
                  />
                  {errors.projectDetails && <p className="text-destructive text-sm mt-1">{errors.projectDetails}</p>}
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Request Free Consultation
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to be contacted via WhatsApp regarding your consultation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;