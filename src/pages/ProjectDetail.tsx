import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import { IMAGES } from '@/assets/images';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
      liveUrl: "#",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      features: [
        "Pet Listings - Add, edit, and view detailed pet profiles with photos",
        "Search & Filters - Find pets by type, age, size, and location",
        "Adoption Requests - Submit and manage adoption applications",
        "Image Uploads - Upload photos for each pet using Firebase Storage",
        "Favorites - Save pets to a favorites list for later",
        "Admin Dashboard - Manage listings and review applications",
      ],
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
                <div className="glass-card p-8 rounded-xl animate-fade-in animated-border">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    About This Project
                  </h2>
                  <p className="text-foreground/90 leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Technologies Used */}
                <div className="glass-card p-8 rounded-xl animate-fade-in animated-border">
                  <h2 className="text-2xl font-bold mb-4 text-primary">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 glass-card text-sm font-medium text-primary hover:bg-primary/20 transition-all duration-300 animated-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="glass-card p-8 rounded-xl animate-fade-in animated-border">
                <h2 className="text-2xl font-bold mb-6 text-primary">
                  Key Features
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 glass-card rounded-lg hover:bg-white/10 transition-all duration-300 animated-border"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p className="text-foreground/90">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

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
