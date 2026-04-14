import photographyImg from '../assets/photography_project.png';
import tuitionImg from '../assets/tuition_project.png';
import freelanceHubImg from '../assets/freelance_hub.png';
import foodAlgoImg from '../assets/food_algo.png';
import ecoFlowImg from '../assets/ecoflow_ai.png';
import busTrackImg from '../assets/bus_track.png';

export const developerProjects = [
  {
    id: 1,
    title: "Freelance Hub",
    category: "Full Stack Development",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "Cloudinary"],
    description: "A comprehensive freelancing platform with real-time job matching, secure Stripe payments, and Cloudinary media management.",
    image: freelanceHubImg
  },
  {
    id: 2,
    title: "Algo-Optimized Delivery",
    category: "Backend / Algorithms",
    tags: ["C", "Dijkstra", "Apriori", "Data Structures"],
    description: "A food delivery engine optimized with Dijkstra's algorithm for routing and Apriori for personalized food recommendations.",
    image: foodAlgoImg
  },
  {
    id: 3,
    title: "ServeWell",
    category: "AI & Data Science",
    tags: ["LSTM", "XGBoost", "Facebook Prophet", "Python"],
    description: "A food wastage management system using advanced time-series forecasting (LSTM, Prophet) to predict demand and minimize surplus.",
    image: ecoFlowImg
  }
];

export const freelanceProjects = [
  {
    id: 4,
    title: "Artistic Photography Portfolio",
    category: "Frontend Development",
    tags: ["React", "Framer Motion", "Vite", "Tailwind"],
    description: "A visually stunning portfolio for a professional photographer, featuring smooth transitions and high-resolution galleries.",
    image: photographyImg
  },
  {
    id: 5,
    title: "Modern Education Portal",
    category: "Full Stack Development",
    tags: ["React", "Framer Motion", "Node.js", "Express"],
    description: "A comprehensive digital platform for a tuition center, streamlining student enrollment and course management.",
    image: tuitionImg
  },
  {
    id: 6,
    title: "Uni-Track",
    category: "Mobile Solutions",
    tags: ["React Native", "Google Maps API", "Firebase", "Real-time"],
    description: "A real-time bus tracking application for SSN/SNU students, providing precise live locations via Google Maps integration.",
    image: busTrackImg
  }
];



export const services = [
  {
    tier: "Pre-Production",
    color: "#82B3A9",
    features: ["Strategy & Research", "Concept Development", "Scriptwriting", "Storyboarding"]
  },
  {
    tier: "Production",
    color: "#E77C50",
    features: ["Directing", "Cinematography", "Casting", "Location Scouting"]
  },
  {
    tier: "Post-Production",
    color: "#D36A83",
    features: ["Editing", "Color Grading", "Sound Design", "Motion Graphics"]
  }
];

export const testimonials = [
  {
    quote: "They didn't just make a video; they told our story with a soul.",
    author: "Jane Doe",
    company: "Luxe Media"
  },
  {
    quote: "Precision meets passion. The best creative partner we've ever had.",
    author: "John Smith",
    company: "TechFlow"
  }
];
