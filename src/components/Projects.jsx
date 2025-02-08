import React from "react";
import Portfolio from "../assets/Portfolio.png";
import Studynotion from "../assets/Studynotion.png";
import Password11 from "../assets/Password11.png";
import Weather from "../assets/Weather.png";

const projects = [
  {
    id: 1,
    name: "Study notion",
    technologies: "MERN Stack",
    image: Studynotion,
    github: "https://github.com/Mayank7110/StudyNotion",
  },
  {
    id: 2,
    name: "Portfolio ",
    technologies: "MERN Stack",
    image: Portfolio,
    github: "https://github.com/Mayank7110/Portfolio",
  },
  {
    id: 3,
    name: "Weather App",
    technologies: "Javascript",
    image: Weather,
    github: "https://github.com/Mayank7110/Weather-app",
  },
  {
    id: 4,
    name: "Password Generator",
    technologies: "Javascript",
    image: Password11,
    github: "https://github.com/Mayank7110/Password_generator",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
             <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
