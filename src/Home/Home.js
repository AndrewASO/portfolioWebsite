import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const containerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: '100px',
    minHeight: '100vh',
    color: '#ffffff',
  };

  const aboutStyle = {
    width: isMobile ? '90%' : '70%', // Adjust width based on screen size
    padding: '20px',
    textAlign: 'center', // Keeps text centered
    fontSize: '20px',
    margin: isMobile ? '0 auto' : '0', // Center-align the container on mobile
  };
  
  const projectsStyle = {
    width: isMobile ? '90%' : '30%', // Adjust width based on screen size
    padding: '20px',
    position: 'relative',
    marginLeft: isMobile ? '0' : '100px', // Remove left margin on mobile
    textAlign: 'center', // Keeps title centered
    margin: isMobile ? '0 auto' : '0', // Center-align the container on mobile
  };
  

  const cornerStyle = {
    position: 'absolute',
    width: '0',
    height: '0',
    borderStyle: 'solid',
  };

  const projectLinkContainerStyle = {
    marginBottom: '20px', // Spacing between project links
    position: 'relative',
  };

  const projectLinkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    position: 'relative',
    display: 'inline', // Make link inline to fit content
    paddingBottom: '2px', // Spacing for the gradient line
  };

  const topLeftCorner = { ...cornerStyle, top: '30px', left: '100px', borderWidth: '30px 30px 0 0', borderColor: '#0235e9 transparent transparent transparent' };
  const topRightCorner = { ...cornerStyle, top: '30px', right: '100px', borderWidth: '0 30px 30px 0', borderColor: 'transparent #0235e9 transparent transparent' };
  const bottomLeftCorner = { ...cornerStyle, bottom: '10px', left: '100px', borderWidth: '30px 0 0 30px', borderColor: 'transparent transparent transparent #0235e9' };
  const bottomRightCorner = { ...cornerStyle, bottom: '10px', right: '100px', borderWidth: '0 0 30px 30px', borderColor: 'transparent transparent #0235e9 transparent' };

  // Adjust this value if needed to ensure visibility below your Navbar
  const adjustedHeaderPosition = '60px'; // Example adjustment

  return (
    <div className='home-container'>
      <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', position: 'absolute', top: adjustedHeaderPosition, right: 0, zIndex: 1050 }}>
        <a href="https://github.com/AndrewASO" style={{ color: '#ffffff', textDecoration: 'none', margin: '0 1rem' }}>GitHub</a>
        <a href="mailto:solivera.andrew@gmail.com" style={{ color: '#ffffff', textDecoration: 'none', margin: '0 1rem' }}>Email</a>
        <a href="https://linkedinprofile.com" style={{ color: '#ffffff', textDecoration: 'none', margin: '0 1rem' }}>LinkedIn</a>
      </header>
      <div style={containerStyle}>
        <div style={aboutStyle} className='about-container'>
          <h1>Welcome</h1>
          <p>As I navigate the final year of my Computer Science degree, I've engaged deeply with technologies across the spectrum, including ML, NLP, DL, embedded systems, and game design. My educational journey is complemented by hands-on project experience, from collaborative software engineering projects to innovative explorations in NLP and game development. With a comprehensive skill set that includes React, JavaScript, Python, and more, I’m poised to contribute to dynamic, technology-driven environments. I am particularly drawn to roles that promise diverse challenges and opportunities for growth, aiming to leverage my broad technical knowledge and collaborative experiences in the tech industry.</p>
        </div>
        <div style={projectsStyle} className='project-links-container'>
          <h2>Projects</h2>
          <div style={projectLinkContainerStyle}>
            <a href="https://github.com/AndrewASO/motivationWebsite" className="project-link" style={projectLinkStyle}>Personal Website Frontend</a>
          </div>
          <div style={projectLinkContainerStyle}>
            <a href="https://github.com/AndrewASO/motivationWebsiteBE" className="project-link" style={projectLinkStyle}>Personal Website Backend</a>
          </div>
          <div style={projectLinkContainerStyle}>
            <a href="https://github.com/marios-petrov/ScientificCitationSentimentAnalysisProject" className="project-link" style={projectLinkStyle}>NLP Scientific Citation</a>
          </div>
          <div style={projectLinkContainerStyle}>
            <a href="https://github.com/AndrewASO/NuPathBE" className="project-link" style={projectLinkStyle}>Software Engineering Project 2 Backend</a>
          </div>
          <div style={projectLinkContainerStyle}>
            <a href="https://github.com/AndrewASO/GameFinderWebserver" className="project-link" style={projectLinkStyle}>Software Engineering Final Project Backend</a>
          </div>
          <div style={projectLinkContainerStyle}>
            <a href="https://github.com/Furry/cppgamedev" className="project-link" style={projectLinkStyle}>C++ 2D Game</a>
          </div>
          <div style={topLeftCorner}></div>
          <div style={topRightCorner}></div>
          <div style={bottomLeftCorner}></div>
          <div style={bottomRightCorner}></div>
        </div>
      </div>
    </div>
  );
}
