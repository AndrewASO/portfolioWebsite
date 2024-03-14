import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid"; // Assuming you're using Heroicons v2

// Example project data with skills
const projectData = [
  {
    name: "Personal Website Frontend",
    description: "A dynamic, user-focused web application designed to boost daily productivity and motivation. Built with Angular and leveraging Angular Material for a sleek UI, this project features secure user authentication, dynamic content display through GIFs, comprehensive task management, and personalized widgets for progress tracking, weather updates, and novel chapters retrieval. It encapsulates modern web development practices, including reactive programming with RxJS and API integration for live weather data, providing a fully integrated and engaging user experience.",
    skills: ["Angular", "Angular Material", "RxJS", "API Integration", "Authentication & Session Management", "Dynamic Content Management", "Progress, Time, and Weather Widgets", "Dark Mode Implementation", "Task Management"]
  },
  {
    name: "Personal Website Backend",
    description: "This backend serves as the backbone for a comprehensive web application aimed at enhancing productivity and motivation. Leveraging the robustness of TypeScript and the flexibility of MongoDB, the project features sophisticated user authentication, dynamic task management, and innovative GPT model integration for AI-driven chat interactions. Additionally, it explores the realms of web scraping and API endpoint experimentation, making it a rich platform for backend technology exploration. Key technologies include Express for server-side logic, bcrypt for secure password handling, and axios combined with cheerio for web scraping, all orchestrated to support a seamless, experimental environment for learning and development in modern backend practices.",
    skills: ["TypeScript", "MongoDB", "Express", "CORS", "bcrypt", "axios", "cheerio", "Mongoose", "OpenAI's GPT API Integration", "CRUD Operations", "API Endpoint Experimentation", "User Authentication and Profile Management", "Web Scraping"]
  },
  {
    name: "NLP Scientific Notation Sentiment Analysis",
    description: "This NLP project delves into the intricate task of sentiment analysis within scientific citation sentences, leveraging the power of LSTM and CNN+LSTM models integrated with GloVe embeddings. The endeavor aims to discern the underlying sentiment of citations, offering insights into the broader perception of scientific works. By navigating the complexities of natural language processing and deep learning, we've embarked on a journey to enhance the accuracy and efficacy of sentiment analysis in the scientific domain. This research not only tests the bounds of current NLP methodologies but also seeks to contribute to the evolving discourse on how deep learning can illuminate the nuances of scientific literature's sentiment.",
    skills: ["Natural Language Processing", "Python", "Deep Learning", "Text Data Preprocessing", "Machine Learning Model Evaluation", "Sentiment Analysis", "Recurrent Neural Networks", "Convolutional Neural Networks", "Data Analysis and Visualization"]
  },
  {
    name: "Software Engineering Project 2 (NuPath) Backend",
    description: "NuPath Backend stands as the technological core behind a sophisticated educational platform, bridging the front-end application with seamless server interactions. Utilizing Java for its robust object-oriented capabilities and MongoDB for flexible data storage, this system excels in managing user profiles, class selections, and fostering community through a user forum. It's designed with dynamic leaderboards and comprehensive profile management to enhance the educational experience, ensuring responsiveness and user engagement. Key technologies like Maven for project management and the lightweight HTTP server API for request handling, underscore the backend's reliability and scalability. The project structure, from user authentication to forum interactions, is meticulously crafted to support a dynamic learning environment, showcasing a commitment to creating a responsive and intuitive user experience.",
    skills: ["Java", "MongoDB", "BSON", "Maven", "com.sun.net.httpserver", "User Authentication and Registration", "User Profile Management", "Dynamic Leaderboard Updates", "Forum Management", "Class and Dormitory Selection Management", "Preference Handling for Faculty and Facilities"]
  },
  {
    name: "Software Engineering Final Project (Game Finder) Backend",
    description: "This backend system is designed to power the GameFinder app, streamlining the management of game characters, NPCs, and user interactions for an immersive gaming experience. Built with TypeScript and MongoDB, it supports secure user authentication, character sheet management, and DM functionalities, including dynamic NPC management. The backend facilitates comprehensive campaign management, enhancing both player and Dungeon Master experiences through detailed API endpoints for profiles, spells, and character interactions.",
    skills: ["TypeScript", "MongoDB", "Express", "CORS", "User Authentication and Profile Management", "Character Sheet Management", "DM Screen Functionality", "Spell and NPC Management", "API Development", "Database Management", "Server Management"]
  },
  {
    name: "C++ 2D Game",
    description: "This 2D Roguelike Adventure Game, developed using C++ and SFML, offers players a journey through three uniquely challenging levels: Crystal Cave, Dungeon, and Spirit. The game focuses on combat against ghosts and golems, navigating intricate levels, and managing player health and mana. Our collaboration has led to a project that integrates dynamic enemy AI for a more engaging combat experience, alongside procedural map generation for varied gameplay. The inclusion of comprehensive UI elements, such as enemy health bars and a points HUD, along with the management of audio and textures, enriches the gaming experience. This project underscores the application of core game development concepts and the effective use of technology to create an immersive game environment.",
    skills: ["C++ Programming", "SFML Library", "Game AI Development", "Enemy Behavior and Pathfinding", "UI Design and Implementation", "Health and Points System", "Procedural Map Generation", "Audio and Texture Management", "Makefile for Project Compilation"]
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '4rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Projects</h1>
      {projectData.map((project, index) => (
        <div key={index} style={{ marginBottom: '1.5rem', color: '#ffffff', maxWidth: '650px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{project.name}</h2>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '10px' }}>
            {project.skills.map((skill, skillIndex) => (
              <div key={skillIndex} style={{ background: '#333', padding: '5px 10px', margin: '5px', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                <CheckIcon style={{ color: "#76e346", marginRight: "10px", width: "20px", height: "20px" }} />
                <span style={{ fontSize: '0.85em' }}>{skill}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1em' }}>{project.description}</p>
        </div>
      ))}
    </section>
  );
}
