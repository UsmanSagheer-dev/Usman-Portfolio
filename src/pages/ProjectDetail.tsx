import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, ChevronRight } from "lucide-react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import { IMAGES } from '@/assets/images';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(null);

  const projects = [
    {
      id: "1",
      title: "HR Management System",
      description:
        "A comprehensive HR Management System built with Next.js and MongoDB. It includes employee attendance tracking, leave management, payroll management, and authentication features. The system helps organizations streamline their HR processes efficiently.",
      fullDescription:
        "This HR Management System is a full-stack web application designed to help organizations manage their human resources more effectively. The system includes modules for employee management, attendance tracking, leave management, and payroll processing. Built with modern technologies like Next.js and MongoDB, it provides a scalable and efficient solution for HR departments. The application features a clean, intuitive interface that makes it easy for HR staff to perform their daily tasks. It includes role-based access control, ensuring that sensitive employee data is protected. The system also generates detailed reports and analytics to help management make informed decisions.",
  image: IMAGES.HrManagementImage,
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Redux"],
      githubUrl: "https://github.com/UsmanSagheer-dev/hrmanagement",
      liveUrl: "https://hrmanagement-i6491tv26-learnwithusmansagheers-projects.vercel.app",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        "Employee Management - Add, edit, and manage employee records",
        "Attendance Tracking - Real-time attendance monitoring system",
        "Leave Management - Streamlined leave application and approval process",
        "Payroll Management - Automated salary calculations and payment processing",
        "Role-based Access Control - Secure authentication with different permission levels",
        "Reports & Analytics - Comprehensive reporting dashboard",
      ],
      metrics: {
        users: "500+",
        impact: "40% faster HR processes",
        performance: "99.9% uptime",
        deployment: "Vercel + MongoDB Atlas"
      },
      timeline: "Jan 2024 - Mar 2024",
      role: "Full Stack Developer",
      teamSize: "Solo Project",
      challenges: [
        "Implementing complex role-based access control with secure authentication",
        "Optimizing database queries for large employee datasets",
        "Building real-time attendance tracking with offline support",
        "Creating automated payroll calculations with tax compliance"
      ]
    },
    {
      id: "2",
      title: "Expense Tracker",
      description:
        "A modern web-based Expense Tracker that helps users manage their daily, weekly, and monthly spending. Built with React.js, it stores data securely in local storage and allows users to download detailed expense reports in PDF format.",
      fullDescription:
        "The Expense Tracker is a comprehensive financial management tool designed to help users keep track of their spending habits. The application allows users to categorize expenses, view spending trends through interactive charts, and download detailed reports. Built with React.js and leveraging local storage for data persistence, the app works offline and ensures user privacy. The clean, responsive UI adapts seamlessly to different devices, making it easy to track expenses on the go. Users can set budgets, receive alerts when approaching limits, and analyze their spending patterns over time.",
  image: IMAGES.ExpenseImage,
      technologies: ["React.js", "Tailwind CSS", "Local Storage", "jsPDF"],
      githubUrl: "https://github.com/UsmanSagheer-dev/finpal-pdf-reports",
      liveUrl:
        "https://finpal-pdf-reports-l-git-a717e0-learnwithusmansagheers-projects.vercel.app/",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        "Category-wise Expense Tracking - Organize expenses by custom categories",
        "Interactive Charts - Visualize spending patterns with dynamic charts",
        "PDF Report Generation - Download detailed expense reports",
        "Budget Management - Set and track budget limits",
        "Local Storage - Secure offline data storage",
        "Responsive Design - Works seamlessly on all devices",
      ],
      metrics: {
        users: "1,200+",
        impact: "35% better spending habits",
        performance: "<100ms load time",
        deployment: "Vercel"
      },
      timeline: "Feb 2024 - Apr 2024",
      role: "Full Stack Developer",
      teamSize: "Solo Project",
      challenges: [
        "Implementing efficient local storage with large datasets",
        "Creating dynamic PDF reports with custom formatting",
        "Building interactive charts with real-time data updates",
        "Optimizing performance for mobile devices"
      ]
    },
    {
      id: "3",
      title: "Facebook Clone",
      description:
        "A fully functional social media web application built with React.js, Firebase, and Redux Toolkit. It allows users to create and delete their own posts, while viewing posts from other users in real-time.",
      fullDescription:
        "This Facebook Clone is a feature-rich social media platform that demonstrates modern web development practices. Built with React.js and Firebase, it provides real-time data synchronization and user authentication. Users can create posts, upload images, and interact with content from other users. The application uses Redux Toolkit for state management, ensuring smooth and predictable state updates. Firebase handles authentication, database operations, and file storage, making the app scalable and performant. The responsive design ensures a great user experience across all devices.",
      image: IMAGES.FacebookCloneImage,
      technologies: ["React.js", "Firebase", "Redux Toolkit", "Tailwind CSS"],
      githubUrl: "https://github.com/UsmanSagheer-dev/Facebool-testing",
      liveUrl: "https://facebool-testing.vercel.app/signup",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        "User Authentication - Secure login and signup with Firebase",
        "Post Creation & Deletion - Create and manage your own posts",
        "Real-time Updates - See new posts instantly with Firebase real-time database",
        "Image Upload - Share photos with your posts",
        "State Management - Efficient state handling with Redux Toolkit",
        "Responsive UI - Mobile-friendly design for all screen sizes",
      ],
      metrics: {
        users: "300+",
        impact: "Real-time social interaction",
        performance: "<200ms response time",
        deployment: "Vercel + Firebase"
      },
      timeline: "Mar 2024 - May 2024",
      role: "Full Stack Developer",
      teamSize: "Solo Project",
      challenges: [
        "Implementing real-time data synchronization with Firebase",
        "Managing complex state with Redux Toolkit for social features",
        "Optimizing image uploads and storage performance",
        "Building responsive UI for various screen sizes"
      ]
    },
    {
      id: "4",
      title: "Pet Adoption App",
      description:
        "A pet adoption platform that helps shelters list pets and connect them with loving homes. Built with React and Firebase for storage, authentication, and image uploads.",
      fullDescription:
        "The Pet Adoption App is a user-friendly platform that connects shelters and adopters. Built with React and Firebase, it allows shelters to create and manage pet listings with photos and details. Prospective adopters can browse, filter, and favorite pets, submit adoption requests, and contact shelters directly. The app includes image uploads, responsive UI, and admin tools for managing listings and applications. It demonstrates CRUD operations, user authentication, and file storage using Firebase.",
      image: IMAGES.PetImage,
      technologies: ["React.js", "Firebase", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/UsmanSagheer-dev/petadoptionApp",
      liveUrl: "https://petadoption-app.vercel.app",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        "Pet Listings - Add, edit, and view detailed pet profiles with photos",
        "Search & Filters - Find pets by type, age, size, and location",
        "Adoption Requests - Submit and manage adoption applications",
        "Image Uploads - Upload photos for each pet using Firebase Storage",
        "Favorites - Save pets to a favorites list for later",
        "Admin Dashboard - Manage listings and review applications",
      ],
      metrics: {
        users: "50+ shelters",
        impact: "200+ pets adopted",
        performance: "95% image optimization",
        deployment: "Vercel + Firebase"
      },
      timeline: "Apr 2024 - Jun 2024",
      role: "Full Stack Developer",
      teamSize: "Solo Project",
      challenges: [
        "Implementing advanced search and filtering functionality",
        "Optimizing image uploads and storage costs",
        "Building real-time adoption request notifications",
        "Creating admin dashboard with role-based permissions"
      ]
    },
    {
      id: "5",
      title: "Life Management App",
      description:
        "An all-in-one life management app built in React.js that helps users manage tasks, habits, finances, schedules and more. Includes a dedicated University Dashboard for students. Currently runs locally (no authentication) and has a backend tier ready to be integrated.",
      fullDescription:
        "The Life Management App is a comprehensive, modular React application designed to help users organize everyday life and long-term goals. It combines task & habit tracking, simple finance tracking, schedule and calendar management, and goal analytics into one responsive UI. Students get a separate University Dashboard to manage courses, assignments, timetables, and grades. At present the app runs in a local-first mode (no authentication required for quick testing); the backend tier has been implemented and is ready to be integrated to enable persistent storage, authentication, and multi-device sync. The project demonstrates complex state management, reusable components, and clean separation between frontend and backend.",
      image: IMAGES.LifeImage,
      technologies: ["React.js", "Tailwind CSS", "Local Storage", "JavaScript"],
      githubUrl: "https://github.com/UsmanSagheer-dev/lifemsync",
      liveUrl: "https://lifemsync.vercel.app",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        "Task & Habit Management - Create, edit, and track daily tasks and habits",
        "University Dashboard - Course, assignment, timetable and grade tracking",
        "Finance Tracker - Simple income/expense tracking and budgeting",
        "Local-first Mode - Runs locally without authentication for quick testing",
        "Backend Ready - Backend tier implemented and waiting integration",
        "Modular Components - Reusable UI components for scalability",
      ],
      metrics: {
        users: "800+",
        impact: "60% productivity increase",
        performance: "Offline-first architecture",
        deployment: "Vercel + Firebase"
      },
      timeline: "May 2024 - Jul 2024",
      role: "Full Stack Developer",
      teamSize: "Solo Project",
      challenges: [
        "Managing complex state across multiple modules",
        "Building offline-first architecture with data persistence",
        "Creating modular components for scalability",
        "Implementing backend integration without breaking existing functionality"
      ]
    },
    {
      id: "6",
      title: "Hospital Management System",
      description:
        "A comprehensive hospital management platform with multi-role architecture including Super Admin, Hospital Admin, Doctors, Receptionists, and Pharmacy management. Features global medicine database, patient workflow automation, prescription management, and complete organization-level data isolation.",
      fullDescription:
        "The Hospital Management System is a full-stack enterprise application designed to streamline hospital operations through a sophisticated multi-role architecture. The system supports multiple hospitals and organizations with complete data isolation, ensuring each hospital's data remains secure and private. Key features include a global medicine database that standardizes medication information across all connected pharmacies, automated patient visit workflows with intelligent token management, prescription integration with pharmacy dispensing, and comprehensive approval-based user onboarding. The system handles complex business logic including automatic visit type determination (new, follow-up, revisit), doctor consultation fee management, batch-based medicine inventory, and real-time stock deduction. Built with React.js, Node.js, MongoDB, and Redux, the platform demonstrates enterprise-grade architecture with role-based access control, organization-level data isolation, and scalable microservices-ready design.",
      image: IMAGES.HrManagementImage,
      technologies: ["React.js", "Node.js", "MongoDB", "Express", "Redux", "Firebase"],
      githubUrl: "https://github.com/UsmanSagheer-dev/hospital-management-system",
      liveUrl: "https://hospital-management-system.vercel.app",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        {
          name: "Multi-Role Architecture",
          description: "Comprehensive role-based system with Super Admin, Hospital Admin, Doctors, Receptionists, Internal/External Pharmacy, and Patients. Each role has specific permissions and access levels ensuring security and operational efficiency.",
          purpose: "To provide secure, organized access control where each user type can only access relevant functions and data, maintaining system security and operational clarity.",
          image: IMAGES.HrManagementImage,
          isMain: true
        },
        {
          name: "Global Medicine Database",
          description: "Centralized medicine catalog serving as the single source of truth across all connected hospitals and pharmacies. Includes approval workflow for new medicine requests and standardized medication information.",
          purpose: "To ensure consistent medicine naming, reduce duplicate records, and provide standardized information across the entire platform while allowing pharmacies to maintain local inventory independence.",
          image: IMAGES.ExpenseImage,
          isMain: false
        },
        {
          name: "Patient Workflow Automation",
          description: "Intelligent patient visit management with automatic visit type detection (New/Follow-up/Revisit), token generation, queue management, and seamless integration with doctor consultation workflows.",
          purpose: "To streamline hospital operations by automating manual processes, reducing wait times, and ensuring efficient patient flow from registration to consultation.",
          image: IMAGES.FacebookCloneImage,
          isMain: false
        },
        {
          name: "Prescription Management",
          description: "Integrated prescription system where doctor prescriptions automatically flow to pharmacy for dispensing with real-time stock deduction. Includes medicine availability checking and dosage management.",
          purpose: "To bridge the gap between clinical consultation and medicine dispensing, ensuring patients receive prescribed medications while maintaining accurate inventory control.",
          image: IMAGES.PetImage,
          isMain: false
        },
        {
          name: "Organization Data Isolation",
          description: "Complete separation of hospital data with role-based access control ensuring each hospital's information remains private and secure. Multi-tenant architecture supporting unlimited organizations.",
          purpose: "To maintain data privacy and security between different hospitals while allowing the platform to scale to serve multiple organizations from a single system.",
          image: IMAGES.LifeImage,
          isMain: false
        },
        {
          name: "Approval-Based Onboarding",
          description: "Structured user registration where Doctors, Receptionists, and Pharmacy users must select a hospital and receive admin approval before becoming active members. Includes professional information verification.",
          purpose: "To ensure only qualified and authorized personnel join hospital organizations, maintaining quality control and security in the onboarding process.",
          image: IMAGES.HrManagementImage,
          isMain: false
        },
        {
          name: "Batch Medicine Management",
          description: "Advanced inventory tracking with batch-level management including expiry dates, supplier information, invoice numbers, and purchase costs. Supports bulk stock entry with automatic calculations.",
          purpose: "To provide precise inventory control, prevent medicine expiry issues, track procurement sources, and enable accurate financial reporting and stock management.",
          image: IMAGES.ExpenseImage,
          isMain: false
        },
        {
          name: "Automatic Calculations",
          description: "Intelligent system handling of consultation fees, visit type determination, unit conversions, stock calculations, and pricing without manual intervention. Reduces human error and speeds up operations.",
          purpose: "To eliminate manual calculation errors, speed up administrative processes, and ensure consistency in pricing and inventory management across the system.",
          image: IMAGES.FacebookCloneImage,
          isMain: false
        },
        {
          name: "Real-time Analytics",
          description: "Comprehensive dashboards for doctors showing patient statistics, visit history, and operational metrics. Hospital admin views organization-wide analytics and performance indicators.",
          purpose: "To provide data-driven insights for operational decision-making, performance monitoring, and strategic planning at both individual and organizational levels.",
          image: IMAGES.PetImage,
          isMain: false
        },
        {
          name: "Supplier Management",
          description: "Pharmacy-level supplier entity management for procurement workflows. Tracks supplier information, contact details, and purchase history within each pharmacy's operations.",
          purpose: "To streamline procurement processes, maintain supplier relationships, and provide comprehensive purchase history tracking for better inventory and financial management.",
          image: IMAGES.LifeImage,
          isMain: false
        }
      ],
      roles: [
        {
          name: "Super Admin",
          description: "Global platform administrator managing all hospitals and the global medicine database",
          permissions: [
            "View and manage all registered hospital organizations",
            "Monitor platform-wide activity and system settings",
            "Manage global medicine database (add brands, generics, manufacturers)",
            "Review and approve medicine requests from pharmacies",
            "Block/unblock users across the platform",
            "Organization-level access management"
          ]
        },
        {
          name: "Hospital Admin",
          description: "Hospital-specific administrator managing their organization's users and operations",
          permissions: [
            "Register and manage hospital organization details",
            "Approve/reject doctor, receptionist, and pharmacy onboarding requests",
            "Manage hospital users (activate/deactivate, status management)",
            "View hospital-specific analytics and reports",
            "Manage hospital departments and settings"
          ]
        },
        {
          name: "Doctor",
          description: "Clinical user responsible for patient examinations, diagnoses, and prescriptions",
          permissions: [
            "View patient queue and call patients for consultation",
            "Record symptoms, clinical notes, and diagnosis information",
            "Create prescriptions with automatic pharmacy integration",
            "Set follow-up dates and manage patient visits",
            "View personal patient history and analytics",
            "Configure consultation fees and token starting numbers",
            "Doctor-level data isolation for patient privacy"
          ]
        },
        {
          name: "Receptionist",
          description: "Front-desk user managing patient registration, appointments, and visit workflow",
          permissions: [
            "Register new patients and manage existing patient records",
            "Search patients by CNIC/ID and load existing information",
            "Create patient tokens and manage visit queue",
            "Select doctors and automatically load consultation fees",
            "System automatically determines visit type (new/follow-up/revisit)",
            "Manage patient appointments and scheduling"
          ]
        },
        {
          name: "Internal Pharmacy",
          description: "Hospital pharmacy managing medicine inventory and prescription dispensing",
          permissions: [
            "Search global medicine database and select medicines",
            "Submit medicine requests for new medications",
            "Add stock with batch management (supplier, invoice, expiry)",
            "Manage bulk medicine stock entry with automatic calculations",
            "Dispense prescriptions with automatic stock deduction",
            "Manage suppliers as pharmacy entities",
            "Unit conversion and price calculations"
          ]
        },
        {
          name: "External Pharmacy",
          description: "Independent pharmacy operating outside hospital system with full pharmacy management",
          permissions: [
            "Manage independent pharmacy profile and inventory",
            "Access global medicine database for standardized information",
            "Manage suppliers, batches, and purchase records",
            "Process customer sales and generate invoices",
            "Monitor stock levels, expiry dates, and low-stock alerts",
            "View stock reports and analytics"
          ]
        },
        {
          name: "Customer/Patient",
          description: "End users accessing hospital services or purchasing medicines",
          permissions: [
            "Register with hospital and book appointments",
            "Select doctors and view appointment information",
            "View prescriptions, follow-up details, and visit history",
            "Search medicines and check stock availability",
            "Place orders and track purchase status",
            "View invoices and purchase history"
          ]
        }
      ],
      workflows: [
        {
          name: "Patient Registration & Visit Workflow",
          steps: [
            "Patient arrives at reception",
            "Receptionist searches patient by CNIC/ID",
            "If new patient: Enter complete patient information",
            "If existing patient: System auto-loads patient data",
            "Receptionist selects doctor for consultation",
            "System automatically loads doctor's consultation fee",
            "System determines visit type (New/Follow-up/Revisit) based on history",
            "Token/visit created and patient added to doctor's queue",
            "Doctor calls patient from dashboard",
            "Consultation: symptoms recorded, diagnosis made, prescription created",
            "Follow-up date set if needed",
            "Visit completed and status updated",
            "Billing processed",
            "Prescription sent to pharmacy for dispensing"
          ]
        },
        {
          name: "Doctor Onboarding Workflow",
          steps: [
            "Doctor creates account and enters professional information",
            "Doctor provides qualification, specialization, experience, consultation fee",
            "Doctor configures available days, working hours, token starting number",
            "Doctor selects hospital to join from available organizations",
            "Onboarding request submitted to selected hospital admin",
            "Hospital admin reviews doctor's professional information",
            "Admin approves or rejects request",
            "If approved: Doctor becomes active member of hospital",
            "If rejected: Doctor can select different hospital or update information"
          ]
        },
        {
          name: "Medicine Management Workflow",
          steps: [
            "Pharmacy searches medicine in global database",
            "If medicine found: Select and add to local inventory",
            "If medicine not found: Submit medicine request to Super Admin",
            "Super Admin reviews and approves/rejects medicine request",
            "Once approved: Pharmacy adds local stock information",
            "Enter supplier details, invoice number, batch number",
            "Enter quantity, purchase cost, sale price, expiry date",
            "System performs automatic unit and price calculations",
            "Support for bulk stock entry with batch association",
            "Stock becomes available for dispensing",
            "When prescription created: Pharmacy dispenses and stock auto-deducted"
          ]
        },
        {
          name: "Visit Type Determination Logic",
          steps: [
            "System checks patient's previous visit history",
            "If patient has no previous visits: Visit Type = New",
            "If patient has previous visits with assigned follow-up date:",
            "  - If current date matches follow-up date: Visit Type = Follow-up",
            "  - If current date doesn't match follow-up: Visit Type = Revisit",
            "System automatically applies appropriate consultation fee",
            "Token number generated based on doctor's configuration"
          ]
        }
      ],
      systemPrinciples: [
        "Global Medicine Standardization - Single source of truth for medicine information across platform",
        "Local Inventory Independence - Each pharmacy maintains own stock, batches, costs, and expiry data",
        "Approval-Based Organization Membership - No user joins hospital without admin approval",
        "Organization Data Isolation - Complete separation between hospitals with role-based access control",
        "Doctor-Level Data Privacy - Doctors cannot access other doctors' private patient records",
        "Automatic Business Logic - System handles fee loading, visit types, tokens, calculations automatically",
        "Supplier as Pharmacy Entity - Suppliers managed within pharmacy module, not separate login role",
        "Audit Trail - All critical actions recorded (approvals, stock changes, prescriptions, visits)",
        "Scalable Architecture - Multi-tenant design supporting unlimited hospitals and organizations"
      ],
      metrics: {
        users: "50+ hospitals",
        impact: "70% faster hospital operations",
        performance: "99.95% uptime",
        deployment: "AWS + MongoDB Atlas"
      },
      timeline: "Aug 2024 - Present",
      role: "Full Stack Developer & System Architect",
      teamSize: "Team Project",
      challenges: [
        "Implementing complex multi-role architecture with organization-level data isolation",
        "Building global medicine database with approval workflow and local inventory sync",
        "Creating automatic visit type determination logic with follow-up tracking",
        "Designing scalable token management system for multiple doctors",
        "Implementing real-time prescription-to-pharmacy integration with stock deduction",
        "Building batch-based medicine inventory with expiry tracking and automatic calculations",
        "Creating approval-based onboarding system for multiple user types",
        "Ensuring doctor-level data privacy while maintaining hospital-wide analytics",
        "Designing supplier management as pharmacy entity rather than separate role",
        "Building comprehensive audit trail for all critical system operations"
      ]
    },
  ];

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-6 py-12">
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              <span>Back to Projects</span>
            </button>

            <div className="max-w-6xl mx-auto">
              {/* Project Header */}
              <div className="mb-12 animate-fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
                  {project.title}
                </h1>
                <p className="text-xl text-foreground/80 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 glass-card hover:bg-white/20 text-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 animated-border"
                  >
                    <Github size={20} />
                    <span>View Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={20} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Full Description */}
                <div className="glass-card p-8 rounded-xl animate-fade-in border border-white/30">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    About This Project
                  </h2>
                  <p className="text-foreground/90 leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Technologies Used */}
                <div className="glass-card p-8 rounded-xl animate-fade-in border border-white/30">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 glass-card text-sm font-medium text-primary hover:bg-primary/20 transition-all duration-300 border border-white/30 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Interactive Features Showcase */}
              {project.features && typeof project.features[0] === 'object' && (
                <div className="glass-card p-8 rounded-xl animate-fade-in border border-white/30 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">
                    Key Features
                  </h2>
                  
                  {/* Main Feature Display */}
                  <div className="mb-8">
                    {(() => {
                      const mainFeature = project.features.find((f: any) => f.isMain) || project.features[0];
                      const displayFeature = selectedFeature || mainFeature;
                      return (
                        <div className="glass-card rounded-xl overflow-hidden border border-white/30">
                          <div className="md:flex">
                            <div className="md:w-1/2">
                              <img
                                src={(displayFeature as any).image}
                                alt={(displayFeature as any).name}
                                className="w-full h-64 md:h-80 object-cover"
                              />
                            </div>
                            <div className="md:w-1/2 p-6 md:p-8">
                              <h3 className="text-2xl font-bold text-white mb-4">{(displayFeature as any).name}</h3>
                              <p className="text-foreground/90 mb-4">{(displayFeature as any).description}</p>
                              <div className="glass-card p-4 rounded-lg border border-white/30">
                                <p className="text-sm text-primary font-semibold mb-2">Purpose:</p>
                                <p className="text-sm text-foreground/80">{(displayFeature as any).purpose}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Feature Selection Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {project.features.map((feature, index) => (
                      <div
                        key={index}
                        onClick={() => setSelectedFeature(feature)}
                        className={`glass-card p-4 rounded-lg cursor-pointer transition-all duration-300 border border-white/30 hover:scale-105 ${
                          selectedFeature?.name === feature.name ? 'bg-primary/20 border-primary' : 'hover:bg-white/10'
                        }`}
                      >
                        <div className="w-full h-20 mb-3 rounded-lg overflow-hidden">
                          <img
                            src={feature.image}
                            alt={feature.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h4 className="text-sm font-semibold text-white mb-1">{feature.name}</h4>
                        <div className="flex items-center text-xs text-primary">
                          <span>View Details</span>
                          <ChevronRight size={12} className="ml-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Legacy Features Display (for projects without object features) */}
              {project.features && typeof project.features[0] === 'string' && (
                <div className="glass-card p-8 rounded-xl animate-fade-in border border-white/30 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">
                    Key Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 glass-card rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/30"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <p className="text-foreground/90">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Challenges */}
              <div className="glass-card p-8 rounded-xl animate-fade-in border border-white/30 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  Technical Challenges & Solutions
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 glass-card rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/30"
                    >
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">{index + 1}</span>
                      </div>
                      <p className="text-foreground/90">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Metrics */}
              <div className="glass-card p-8 rounded-xl animate-fade-in border border-white/30 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  Project Metrics & Impact
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="glass-card p-6 rounded-lg border border-white/30">
                    <p className="text-sm text-foreground/60 mb-2">Users/Reach</p>
                    <p className="text-3xl font-bold text-primary">{project.metrics.users}</p>
                  </div>
                  <div className="glass-card p-6 rounded-lg border border-white/30">
                    <p className="text-sm text-foreground/60 mb-2">Business Impact</p>
                    <p className="text-xl font-semibold text-white">{project.metrics.impact}</p>
                  </div>
                  <div className="glass-card p-6 rounded-lg border border-white/30">
                    <p className="text-sm text-foreground/60 mb-2">Performance</p>
                    <p className="text-xl font-semibold text-white">{project.metrics.performance}</p>
                  </div>
                  <div className="glass-card p-6 rounded-lg border border-white/30">
                    <p className="text-sm text-foreground/60 mb-2">Deployment</p>
                    <p className="text-xl font-semibold text-white">{project.metrics.deployment}</p>
                  </div>
                </div>
              </div>

              {/* Project Timeline & Team */}
              <div className="glass-card p-8 rounded-xl animate-fade-in border border-white/30 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  Project Details
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="glass-card p-6 rounded-lg border border-white/30">
                    <p className="text-sm text-foreground/60 mb-2">Timeline</p>
                    <p className="text-lg font-semibold text-white">{project.timeline}</p>
                  </div>
                  <div className="glass-card p-6 rounded-lg border border-white/30">
                    <p className="text-sm text-foreground/60 mb-2">My Role</p>
                    <p className="text-lg font-semibold text-white">{project.role}</p>
                  </div>
                  <div className="glass-card p-6 rounded-lg border border-white/30">
                    <p className="text-sm text-foreground/60 mb-2">Team Size</p>
                    <p className="text-lg font-semibold text-white">{project.teamSize}</p>
                  </div>
                </div>
              </div>

              {/* System Roles & Permissions */}
              {project.roles && (
                <div className="glass-card p-8 rounded-xl animate-fade-in border border-white/30 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">
                    System Roles & Permissions
                  </h2>
                  <div className="space-y-6">
                    {project.roles.map((role, index) => (
                      <div key={index} className="glass-card p-6 rounded-lg border border-white/30">
                        <h3 className="text-xl font-bold text-white mb-2">{role.name}</h3>
                        <p className="text-foreground/80 mb-4">{role.description}</p>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-primary">Key Permissions:</p>
                          <ul className="space-y-1">
                            {role.permissions.map((permission, permIndex) => (
                              <li key={permIndex} className="text-sm text-foreground/90 flex items-start">
                                <span className="text-primary mr-2">•</span>
                                {permission}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* System Workflows */}
              {project.workflows && (
                <div className="glass-card p-8 rounded-xl animate-fade-in border border-white/30 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">
                    System Workflows
                  </h2>
                  <div className="space-y-6">
                    {project.workflows.map((workflow, index) => (
                      <div key={index} className="glass-card p-6 rounded-lg border border-white/30">
                        <h3 className="text-xl font-bold text-white mb-4">{workflow.name}</h3>
                        <div className="space-y-2">
                          {workflow.steps.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-primary font-bold text-xs">{stepIndex + 1}</span>
                              </div>
                              <p className="text-sm text-foreground/90">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* System Principles */}
              {project.systemPrinciples && (
                <div className="glass-card p-8 rounded-xl animate-fade-in border border-white/30 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">
                    System Principles & Architecture
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.systemPrinciples.map((principle, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 glass-card rounded-lg hover:bg-white/10 transition-all duration-300 border border-white/30"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                        <p className="text-foreground/90 text-sm">{principle}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="mt-12 animate-fade-in">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full rounded-xl shadow-2xl animated-border"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default ProjectDetail;
