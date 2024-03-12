import React from "react";

// Example project data
const projectData = [
  {
    name: "Personal Website Frontend",
    description: "A dynamic, user-focused web application designed to boost daily productivity and motivation. Built with Angular and leveraging Angular Material for a sleek UI, this project features secure user authentication, dynamic content display through GIFs, comprehensive task management, and personalized widgets for progress tracking, weather updates, and novel chapters retrieval. It encapsulates modern web development practices, including reactive programming with RxJS and API integration for live weather data, providing a fully integrated and engaging user experience."
  },
  {
    name: "Personal Website Backend",
    description: "This backend serves as the backbone for a comprehensive web application aimed at enhancing productivity and motivation. Leveraging the robustness of TypeScript and the flexibility of MongoDB, the project features sophisticated user authentication, dynamic task management, and innovative GPT model integration for AI-driven chat interactions. Additionally, it explores the realms of web scraping and API endpoint experimentation, making it a rich platform for backend technology exploration. Key technologies include Express for server-side logic, bcrypt for secure password handling, and axios combined with cheerio for web scraping, all orchestrated to support a seamless, experimental environment for learning and development in modern backend practices."
  },
  {
    name: "NLP Scientific Notation Sentiment Analysis",
    description: "This is a description of Project 1, detailing what it accomplishes and the technologies it uses."
  },
  {
    name: "Software Engineering Project 2 (NuPath) Backend",
    description: "NuPath Backend stands as the technological core behind a sophisticated educational platform, bridging the front-end application with seamless server interactions. Utilizing Java for its robust object-oriented capabilities and MongoDB for flexible data storage, this system excels in managing user profiles, class selections, and fostering community through a user forum. It's designed with dynamic leaderboards and comprehensive profile management to enhance the educational experience, ensuring responsiveness and user engagement. Key technologies like Maven for project management and the lightweight HTTP server API for request handling, underscore the backend's reliability and scalability. The project structure, from user authentication to forum interactions, is meticulously crafted to support a dynamic learning environment, showcasing a commitment to creating a responsive and intuitive user experience."
  },
  {
    name: "Software Engineering Final Project (Game Finder) Backend",
    description: "This backend system is designed to power the GameFinder app, streamlining the management of game characters, NPCs, and user interactions for an immersive gaming experience. Built with TypeScript and MongoDB, it supports secure user authentication, character sheet management, and DM functionalities, including dynamic NPC management. The backend facilitates comprehensive campaign management, enhancing both player and Dungeon Master experiences through detailed API endpoints for profiles, spells, and character interactions."
  },
  {
    name: "C++ 2D Game",
    description: "This is a description of Project 1, detailing what it accomplishes and the technologies it uses."
  }
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '4rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Projects</h1>
      {projectData.map((project, index) => (
        <div key={index} style={{ marginBottom: '1.5rem', color: '#ffffff', maxWidth: '650px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{project.name}</h2>
          <p style={{ fontSize: '1em' }}>{project.description}</p>
        </div>
      ))}
    </section>
  );
}
