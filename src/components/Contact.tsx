
import React, { useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: 'Email not configured',
        description:
          'Email service is not configured. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in your .env',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Failed to send message');
      }

      toast({ title: "Message sent", description: "Thanks — I'll get back to you soon." });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Send message error:', error);
      toast({ title: 'Send failed', description: 'Could not send your message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: '#',
      icon: Github,
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Fiverr',
      url: '#',
      icon: '💼',
      color: 'hover:text-green-400'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-white/80 text-lg mt-6 max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-on-scroll">
              <div className="glass-card p-8 rounded-xl h-full">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Email</h4>
                    <p className="text-white/80">usmansagheerdev@gmail.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Phone</h4>
                    <p className="text-white/80">+92 304 9469130</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Response Time</h4>
                    <p className="text-white/80">Usually within 24 hours</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Availability</h4>
                    <p className="text-white/80">Open to freelance projects and full-time opportunities</p>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-white mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        className={`p-3 glass-card rounded-lg hover:scale-110 transition-all duration-300 text-white ${link.color}`}
                        aria-label={link.name}
                      >
                        {typeof link.icon === 'string' ? (
                          <span className="text-xl">{link.icon}</span>
                        ) : (
                          <link.icon size={24} />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-on-scroll">
              <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl space-y-6">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Send Message</h3>
                
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 font-semibold rounded-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-primary/50 cursor-not-allowed'
                      : 'bg-primary hover:bg-primary/90 hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
