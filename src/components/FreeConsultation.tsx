import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MessageCircle, Mail, Code2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const projectSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must be less than 100 characters' }),

  email: z
    .string()
    .trim()
    .email({ message: 'Invalid email address' })
    .max(255, { message: 'Email must be less than 255 characters' }),

  phone: z
    .string()
    .trim()
    .min(10, { message: 'Phone number must be at least 10 digits' })
    .max(20, { message: 'Phone number must be less than 20 characters' }),

  projectDetails: z
    .string()
    .trim()
    .min(10, { message: 'Please provide at least 10 characters' })
    .max(1000, { message: 'Project details must be less than 1000 characters' }),
});

const ProjectInquiry = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = projectSchema.safeParse(formData);

    if (!result.success) {
      const newErrors: Record<string, string> = {};

      result.error.errors.forEach((error) => {
        if (error.path[0]) {
          newErrors[error.path[0].toString()] = error.message;
        }
      });

      setErrors(newErrors);

      toast({
        title: 'Validation Error',
        description: 'Please check the form for errors.',
        variant: 'destructive',
      });

      return;
    }

    const message = [
      'Project Inquiry',
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      '',
      'Project Details:',
      formData.projectDetails,
    ].join('\n');

    const whatsappUrl = `https://wa.me/923049469130?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank');

    toast({
      title: 'Opening WhatsApp',
      description: 'Your project inquiry is ready to send.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      projectDetails: '',
    });

    setErrors({});
  };

  return (
    <section id="contact" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Let's Build Something
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project idea, an existing application, or a problem you
            want to solve? Tell me about it and let's discuss the right
            technical approach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="animate-on-scroll">

            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Have a project in mind?
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Whether you need a full-stack web application, SaaS product,
                REST API, dashboard, or React Native application, share your
                requirements and I can review them with you.
              </p>
            </div>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold mb-1">
                    Full-Stack Development
                  </h4>

                  <p className="text-muted-foreground text-sm">
                    Frontend, backend, APIs, databases, authentication, and
                    application architecture.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold mb-1">
                    Discuss Your Requirements
                  </h4>

                  <p className="text-muted-foreground text-sm">
                    Share your idea, requirements, existing codebase, or
                    technical problem through the form.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>

                <div>
                  <h4 className="font-semibold mb-1">
                    Start a Conversation
                  </h4>

                  <p className="text-muted-foreground text-sm">
                    Your inquiry will open in WhatsApp so we can continue the
                    conversation directly.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side - Form */}
          <div
            className="animate-on-scroll"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="glass-card p-8 rounded-2xl">

              <h3 className="text-2xl font-bold mb-6">
                Project Inquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Name */}
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    className={
                      errors.name ? 'border-destructive' : ''
                    }
                  />

                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    className={
                      errors.email ? 'border-destructive' : ''
                    }
                  />

                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    className={
                      errors.phone ? 'border-destructive' : ''
                    }
                  />

                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Project Details */}
                <div>
                  <Textarea
                    name="projectDetails"
                    placeholder="Tell me about your project or requirements *"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    className={`min-h-[140px] ${
                      errors.projectDetails
                        ? 'border-destructive'
                        : ''
                    }`}
                  />

                  {errors.projectDetails && (
                    <p className="text-destructive text-sm mt-1">
                      {errors.projectDetails}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send Project Inquiry
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Your message will open in WhatsApp to continue the
                  conversation.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProjectInquiry;