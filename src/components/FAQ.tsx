import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and MongoDB. I also have experience with React Native for mobile development and various backend frameworks like FastAPI and Firebase."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website typically takes 2-3 weeks, while a full-stack application can take 6-12 weeks. I provide detailed timelines during the consultation phase."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes! All projects come with a support period (1-6 months depending on the package). I also offer extended maintenance packages for long-term support and updates."
    },
    {
      question: "Can you work with my existing codebase?",
      answer: "Absolutely! I can review, optimize, and extend existing codebases. I'll conduct a thorough analysis and provide recommendations for improvements."
    },
    {
      question: "What is your development process?",
      answer: "I follow a structured 4-step process: Discovery & Consultation, Planning & Design, Development, and Launch & Support. You'll receive regular updates and have opportunities to provide feedback throughout."
    },
    {
      question: "Do you offer mobile app development?",
      answer: "Yes, I develop cross-platform mobile applications using React Native, allowing your app to run on both iOS and Android with a single codebase."
    },
    {
      question: "What's included in the free consultation?",
      answer: "The free consultation includes a 30-minute discussion about your project goals, technical requirements, timeline estimation, and personalized recommendations for the best approach."
    },
    {
      question: "How do you handle project payments?",
      answer: "I typically work with a milestone-based payment structure: 30% upfront, 40% at mid-project, and 30% upon completion. Custom arrangements can be discussed based on project size."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about my services and process
          </p>
        </div>

        <div className="glass-card p-8 rounded-2xl animate-on-scroll">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;