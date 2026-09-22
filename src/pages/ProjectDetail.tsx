import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  Database,
  Users,
  Pill,
  Receipt,
  Workflow,
  Smartphone,
  BarChart3,
  Truck,
  UserRound,
  Stethoscope,
  Building2,
} from "lucide-react";

import Header from "../components/Header";
import { IMAGES } from "@/assets/images";


const project = {
  id: "medicore",

  title: "Medicore",

  subtitle: "Hospital & Pharmacy Management System",

  description:
    "A full-stack healthcare management platform designed to simplify hospital and pharmacy operations through role-based workflows, patient management, prescriptions, inventory, billing, and pharmacy sales.",

  fullDescription:
    "Medicore is a healthcare management SaaS project built to manage hospital and pharmacy operations in a structured and scalable way. The system supports multiple organizations and user roles while keeping organization data isolated. It connects patient registration, doctor consultations, prescriptions, pharmacy dispensing, inventory, suppliers, sales, and billing into connected workflows.",

  image: IMAGES.CoverImage,

  github:
    "https://github.com/UsmanSagheer-dev/medicore-hms",

  live:
    "https://medicore-hms.vercel.app/",

  technologies: [
    "Next.js",
    "React.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Redux",
    "JWT",
    "Cookies",
    "REST APIs",
    "PWA",
  ],

  features: [
    {
      icon: Users,
      title: "Role-Based Access Control",
      description:
        "Different users receive access according to their role and organization permissions.",
    },

    {
      icon: Building2,
      title: "Multi-Organization Architecture",
      description:
        "The platform is designed to support separate hospitals and pharmacies while keeping their operational data isolated.",
    },

    {
      icon: Database,
      title: "Global Medicine Database",
      description:
        "A standardized medicine database provides reusable medicine information while allowing pharmacies to manage their own inventory independently.",
    },

    {
      icon: UserRound,
      title: "Patient Management",
      description:
        "Patient registration, visits, token management, follow-ups, consultation records, and related workflows are managed from one system.",
    },

    {
      icon: Stethoscope,
      title: "Doctor & Consultation Workflow",
      description:
        "Doctors can manage patient consultations, visit types, prescriptions, consultation fees, and follow-up information.",
    },

    {
      icon: Pill,
      title: "Prescription Management",
      description:
        "Prescriptions created during consultations can be connected with pharmacy workflows for medicine dispensing.",
    },

    {
      icon: Receipt,
      title: "Pharmacy Sales & Billing",
      description:
        "Pharmacy users can create sales, calculate totals, manage customers, handle credit sales, and generate billing records.",
    },

    {
      icon: Database,
      title: "Batch-Based Inventory",
      description:
        "Medicine stock is managed through batches with quantities, expiry information, purchase details, and stock movements.",
    },

    {
      icon: Truck,
      title: "Supplier Management",
      description:
        "Pharmacies can manage suppliers and connect supplier products with their inventory and purchase workflows.",
    },

    {
      icon: BarChart3,
      title: "Dashboard & Alerts",
      description:
        "Operational dashboards provide useful information about stock, sales, inventory conditions, and important alerts.",
    },

    {
      icon: Smartphone,
      title: "Progressive Web App",
      description:
        "Medicore supports an installable app-like experience through PWA capabilities.",
    },

    {
      icon: ShieldCheck,
      title: "Secure Authentication",
      description:
        "Authentication and authorization are handled through JWT-based authentication, cookies, protected routes, and role-based permissions.",
    },
  ],

  roles: [
    {
      icon: ShieldCheck,
      name: "Super Admin",
      description:
        "Manages organizations, users, global medicines, approvals, and system-level configuration.",
    },

    {
      icon: Building2,
      name: "Hospital Admin",
      description:
        "Manages hospital operations, staff, doctors, receptionists, and organization-level workflows.",
    },

    {
      icon: Stethoscope,
      name: "Doctor",
      description:
        "Handles patient consultations, visit types, prescriptions, fees, and follow-up information.",
    },

    {
      icon: UserRound,
      name: "Receptionist",
      description:
        "Manages patient registration, tokens, appointments/visits, and reception-level workflows.",
    },

    {
      icon: Pill,
      name: "Internal Pharmacy",
      description:
        "Handles prescriptions, dispensing, stock, suppliers, batches, sales, and pharmacy operations.",
    },

    {
      icon: Pill,
      name: "External Pharmacy",
      description:
        "Provides pharmacy-specific sales and inventory functionality for pharmacies operating independently.",
    },

    {
      icon: Users,
      name: "Pharmacy Salesman",
      description:
        "Handles day-to-day pharmacy sales operations according to assigned permissions.",
    },
  ],

  workflows: [
    {
      title: "Patient Registration → Consultation",
      steps: [
        "Patient registration",
        "Visit/token creation",
        "Doctor consultation",
        "Visit type determination",
        "Prescription creation",
        "Follow-up when required",
      ],
    },

    {
      title: "Prescription → Pharmacy",
      steps: [
        "Doctor creates prescription",
        "Prescription becomes available to pharmacy",
        "Pharmacy reviews prescribed medicines",
        "Medicine availability is checked",
        "Medicines are dispensed",
        "Inventory quantities are updated",
      ],
    },

    {
      title: "Medicine → Inventory",
      steps: [
        "Manufacturer",
        "Generic Medicine",
        "Medicine Variant",
        "Supplier Product",
        "Pharmacy Inventory",
        "Inventory Batch",
      ],
    },

    {
      title: "Pharmacy Sale Workflow",
      steps: [
        "Select customer",
        "Search or scan medicine",
        "Select batch",
        "Enter quantity",
        "Calculate sale",
        "Process payment or credit",
        "Update stock",
        "Generate sale record",
      ],
    },
  ],

  architecture: [
    "Multi-organization data isolation",
    "Role-based authorization",
    "Global medicine standardization",
    "Independent pharmacy inventory",
    "Batch-level stock management",
    "Centralized authentication",
    "Protected API routes",
    "Reusable business workflows",
    "Audit-friendly transaction records",
    "Scalable SaaS-oriented architecture",
  ],

  challenges: [
    "Designing role-based permissions for different healthcare users.",
    "Keeping organization data isolated in a multi-tenant environment.",
    "Designing medicine and inventory relationships around variants, suppliers, and batches.",
    "Handling stock deductions correctly during pharmacy sales and dispensing.",
    "Connecting hospital prescriptions with pharmacy workflows.",
    "Managing different workflows for internal and external pharmacies.",
    "Implementing secure authentication and protected routes.",
    "Designing business rules for patient visit types and follow-up visits.",
    "Maintaining consistency between inventory, sales, and transaction records.",
    "Building a system architecture that can grow into a SaaS product.",
  ],

  myRole:
    "Full-Stack Developer & System Architect",

  projectType:
    "Personal SaaS Product",

  timeline:
    "Ongoing Development",
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  if (id !== project.id) {
    return (
      <div className="min-h-screen bg-[#0b1120] text-white flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            Project Not Found
          </h1>

          <button
            onClick={() => navigate("/")}
            className="px-5 py-3 bg-primary rounded-lg font-semibold"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1120] text-white">
      <Header />

      <main className="pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back Button */}
          <button
            onClick={() => navigate("/#projects")}
            className="
              inline-flex
              items-center
              gap-2
              text-gray-400
              hover:text-white
              transition
              mb-6 sm:mb-8
              text-sm sm:text-base
            "
          >
            <ArrowLeft size={18} className="sm:size-20" />
            Back to Projects
          </button>

          {/* Hero */}
          <section className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 md:mb-20">

            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-5">
                Featured SaaS Project
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
                {project.title}
              </h1>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-4 sm:mb-6">
                {project.subtitle}
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-6 sm:leading-8 mb-6 sm:mb-8">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-4 sm:px-6
                    py-2.5 sm:py-3
                    rounded-lg
                    border
                    border-white/10
                    bg-white/5
                    hover:bg-white/10
                    transition
                    font-semibold
                    text-sm sm:text-base
                  "
                >
                  <Github size={16} className="sm:size-19" />
                  View Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    px-4 sm:px-6
                    py-2.5 sm:py-3
                    rounded-lg
                    bg-primary
                    hover:bg-primary/90
                    transition
                    font-semibold
                    text-sm sm:text-base
                  "
                >
                  <ExternalLink size={16} className="sm:size-19" />
                  Live Demo
                </a>

              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#111827] shadow-2xl">
              <img
                src={project.image}
                alt="Medicore Hospital and Pharmacy Management System"
                className="w-full h-[200px] sm:h-[300px] md:h-[430px] object-cover"
              />
            </div>
          </section>

          {/* Overview */}
          <section className="mb-20">
            <div className="max-w-4xl">
              <p className="text-primary font-semibold uppercase tracking-wider mb-3">
                Project Overview
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built to solve real healthcare management problems
              </h2>

              <p className="text-gray-400 text-lg leading-8">
                {project.fullDescription}
              </p>
            </div>
          </section>

          {/* Project Info */}
          <section className="grid md:grid-cols-3 gap-5 mb-20">

            <div className="p-6 rounded-xl bg-[#111827] border border-white/10">
              <p className="text-gray-500 text-sm mb-2">
                My Role
              </p>

              <p className="text-white font-semibold">
                {project.myRole}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#111827] border border-white/10">
              <p className="text-gray-500 text-sm mb-2">
                Project Type
              </p>

              <p className="text-white font-semibold">
                {project.projectType}
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#111827] border border-white/10">
              <p className="text-gray-500 text-sm mb-2">
                Timeline
              </p>

              <p className="text-white font-semibold">
                {project.timeline}
              </p>
            </div>

          </section>

          {/* Technologies */}
          <section className="mb-20">

            <p className="text-primary font-semibold uppercase tracking-wider mb-3">
              Technology Stack
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Technologies used
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    px-4
                    py-2.5
                    rounded-lg
                    bg-[#111827]
                    border
                    border-white/10
                    text-gray-300
                    font-medium
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-20">

            <p className="text-primary font-semibold uppercase tracking-wider mb-3">
              Core Features
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              What Medicore does
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

              {project.features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="
                      p-6
                      rounded-xl
                      bg-[#111827]
                      border
                      border-white/10
                      hover:border-primary/40
                      transition
                    "
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 leading-7">
                      {feature.description}
                    </p>
                  </div>
                );
              })}

            </div>
          </section>

          {/* Roles */}
          <section className="mb-20">

            <p className="text-primary font-semibold uppercase tracking-wider mb-3">
              System Roles
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Role-based system
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

              {project.roles.map((role) => {
                const Icon = role.icon;

                return (
                  <div
                    key={role.name}
                    className="
                      p-6
                      rounded-xl
                      bg-[#111827]
                      border
                      border-white/10
                    "
                  >
                    <div className="flex items-center gap-4 mb-4">

                      <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Icon size={22} />
                      </div>

                      <h3 className="text-lg font-semibold">
                        {role.name}
                      </h3>

                    </div>

                    <p className="text-gray-400 leading-7">
                      {role.description}
                    </p>
                  </div>
                );
              })}

            </div>
          </section>

          {/* Workflows */}
          <section className="mb-20">

            <p className="text-primary font-semibold uppercase tracking-wider mb-3">
              Business Workflows
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              How the system works
            </h2>

            <div className="grid lg:grid-cols-2 gap-6">

              {project.workflows.map((workflow) => (
                <div
                  key={workflow.title}
                  className="
                    p-7
                    rounded-xl
                    bg-[#111827]
                    border
                    border-white/10
                  "
                >
                  <div className="flex items-center gap-3 mb-6">

                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Workflow size={22} />
                    </div>

                    <h3 className="text-xl font-semibold">
                      {workflow.title}
                    </h3>

                  </div>

                  <div className="space-y-3">

                    {workflow.steps.map((step, index) => (
                      <div
                        key={step}
                        className="flex items-start gap-3"
                      >
                        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white/5 text-primary text-sm font-semibold shrink-0">
                          {index + 1}
                        </div>

                        <p className="text-gray-400 pt-1">
                          {step}
                        </p>
                      </div>
                    ))}

                  </div>
                </div>
              ))}

            </div>
          </section>

          {/* Architecture */}
          <section className="mb-20">

            <p className="text-primary font-semibold uppercase tracking-wider mb-3">
              Architecture
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              System design principles
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              {project.architecture.map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3
                    p-5
                    rounded-xl
                    bg-[#111827]
                    border
                    border-white/10
                  "
                >
                  <CheckCircle2
                    size={21}
                    className="text-primary shrink-0"
                  />

                  <span className="text-gray-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </section>

          {/* Challenges */}
          <section className="mb-20">

            <p className="text-primary font-semibold uppercase tracking-wider mb-3">
              Development Challenges
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Problems solved during development
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              {project.challenges.map((challenge, index) => (
                <div
                  key={challenge}
                  className="
                    flex
                    gap-4
                    p-5
                    rounded-xl
                    bg-[#111827]
                    border
                    border-white/10
                  "
                >
                  <span className="text-primary font-bold text-lg">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="text-gray-400 leading-7">
                    {challenge}
                  </p>
                </div>
              ))}

            </div>
          </section>

          {/* Final CTA */}
          <section
            className="
              rounded-2xl
              border
              border-primary/20
              bg-primary/5
              p-8
              md:p-12
              text-center
            "
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Medicore
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-7">
              Explore the project repository or open the live application to
              see how the system is structured and how its healthcare and
              pharmacy workflows work.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-lg
                  border
                  border-white/10
                  bg-white/5
                  hover:bg-white/10
                  font-semibold
                  transition
                "
              >
                <Github size={19} />
                GitHub Repository
              </a>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-lg
                  bg-primary
                  hover:bg-primary/90
                  font-semibold
                  transition
                "
              >
                <ExternalLink size={19} />
                Open Medicore
              </a>

            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;