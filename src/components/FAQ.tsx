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
      question: 'What technologies do you work with?',
      answer:
        'I work mainly with React.js, Next.js, TypeScript, Node.js, PostgreSQL, Prisma, Redux, React Native, REST APIs, JWT authentication, Git, and GitHub. I choose the stack based on the project requirements.'
    },
    {
      question: 'What type of applications do you build?',
      answer:
        'I focus on full-stack web applications, SaaS products, business management systems, REST APIs, dashboards, and cross-platform mobile applications. I am particularly interested in building practical software that solves real business problems.'
    },
    {
      question: 'Can you work with an existing codebase?',
      answer:
        'Yes. I can work with an existing codebase to understand its architecture, fix bugs, add new features, improve components, integrate APIs, and gradually improve the overall implementation.'
    },
    {
      question: 'Do you develop both frontend and backend?',
      answer:
        'Yes. My focus is full-stack development, so I can work across the frontend, backend, database, authentication, APIs, and application architecture rather than focusing only on the UI.'
    },
    {
      question: 'Do you build mobile applications?',
      answer:
        'Yes. I use React Native for cross-platform mobile application development and can build applications that share a common codebase across Android and iOS.'
    },
    {
      question: 'What is your development process?',
      answer:
        'I generally follow four stages: understanding the requirements, planning the architecture and user experience, developing and integrating the application, and finally testing and preparing it for deployment.'
    },
    {
      question: 'How do you approach authentication and security?',
      answer:
        'Depending on the project, I work with authentication systems using JWT, cookies, role-based access control, protected routes, and permission-based authorization. Security requirements are considered as part of the application architecture.'
    },
    {
      question: 'Are you available for freelance or development work?',
      answer:
        'I am open to selected freelance, software development, and collaboration opportunities. If you have a project or an existing application that needs development, improvement, or technical assistance, feel free to get in touch.'
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-background/50">
      <div className="max-w-4xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Frequently Asked Questions
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A few common questions about my skills, development approach,
            and the type of software I build.
          </p>
        </div>

        {/* FAQ */}
        <div className="glass-card p-8 rounded-2xl animate-on-scroll">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground leading-relaxed">
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