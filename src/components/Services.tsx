import React from "react";
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Palette,
  Layers3,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Modern and responsive web applications built with scalable frontend technologies.",
    features: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Responsive Interfaces",
    ],
  },

  {
    icon: <Code className="w-8 h-8" />,
    title: "Full-Stack Development",
    description:
      "Complete web application development from frontend interfaces to backend APIs and databases.",
    features: [
      "Frontend & Backend",
      "REST APIs",
      "Authentication",
      "Database Integration",
    ],
  },

  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend & API Development",
    description:
      "Structured backend systems and APIs designed for reliable business applications.",
    features: [
      "Node.js",
      "RESTful APIs",
      "PostgreSQL",
      "Prisma ORM",
    ],
  },

  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications focused on practical user experiences.",
    features: [
      "React Native",
      "Android Applications",
      "API Integration",
      "Responsive UI",
    ],
  },

  {
    icon: <Layers3 className="w-8 h-8" />,
    title: "SaaS Development",
    description:
      "Business-focused SaaS applications with authentication, roles, organizations, and scalable workflows.",
    features: [
      "Multi-Tenant Systems",
      "Role-Based Access",
      "Business Workflows",
      "Subscription-Ready Architecture",
    ],
  },

  {
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Implementation",
    description:
      "Clean, responsive, and user-friendly interfaces designed around real product workflows.",
    features: [
      "Modern UI",
      "Responsive Design",
      "Dashboard Interfaces",
      "User Experience",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <p className="text-primary font-semibold uppercase tracking-wider mb-3">
            What I Do
          </p>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4 glow-text">
            My Services
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I build modern web, mobile, and SaaS applications with a focus on
            scalable architecture and real-world business requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="
                glass-card
                p-8
                hover:scale-[1.03]
                transition-all
                duration-500
                group
                animate-on-scroll
              "
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon */}
              <div
                className="
                  mb-6
                  text-primary
                  group-hover:scale-110
                  transition-transform
                  duration-300
                  inline-flex
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-7">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="
                      flex
                      items-center
                      text-sm
                      text-muted-foreground
                    "
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <p className="text-lg text-muted-foreground mb-6">
            Have an idea or need a software solution?
          </p>

          <a
            href="#contact"
            className="
              inline-block
              px-8
              py-4
              bg-primary
              text-primary-foreground
              rounded-lg
              font-semibold
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              hover:shadow-primary/50
            "
          >
            Let's Work Together
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;