import React from 'react';

export default function Home() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: '100px',
    minHeight: '100vh',
    color: '#ffffff',
  };

  const aboutStyle = {
    width: '70%', // Making "About Me" larger
    padding: '20px',
    textAlign: 'center', // Center "Welcome" text
  };

  const projectsStyle = {
    width: '30%', // Making "Projects" smaller
    padding: '20px',
    position: 'relative',
    marginLeft: '100px', // Adjust to prevent going off-screen
    textAlign: 'center', // Center "Projects" title
  };

  const cornerStyle = {
    position: 'absolute',
    width: '0',
    height: '0',
    borderStyle: 'solid',
  };

  const projectLinkStyle = {
    color: '#ffffff',
    textDecoration: 'none',
    display: 'block',
    margin: '10px 0',
  };

  const topLeftCorner = { ...cornerStyle, top: '-20px', left: '-20px', borderWidth: '20px 20px 0 0', borderColor: '#0235e9 transparent transparent transparent' };
  const topRightCorner = { ...cornerStyle, top: '-20px', right: '0', borderWidth: '0 20px 20px 0', borderColor: 'transparent transparent #0235e9 transparent' };
  const bottomLeftCorner = { ...cornerStyle, bottom: '-20px', left: '-20px', borderWidth: '20px 0 0 20px', borderColor: 'transparent transparent transparent #0235e9' };
  const bottomRightCorner = { ...cornerStyle, bottom: '-20px', right: '0', borderWidth: '0 0 20px 20px', borderColor: 'transparent transparent #0235e9 transparent' };

  return (
    <>
      <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem', backgroundColor: '#000', position: 'fixed', top: 0, width: '100%', zIndex: 100 }}>
        <a href="insertGitHubURLHere" style={{ color: '#ffffff', textDecoration: 'none', margin: '0 1rem' }}>GitHub</a>
        <a href="insertEmailHere" style={{ color: '#ffffff', textDecoration: 'none', margin: '0 1rem' }}>Email</a>
      </header>
      <div style={containerStyle}>
        <div style={aboutStyle}>
          <h1>Welcome</h1>
          <p>As I navigate the final year of my Computer Science degree, I've engaged deeply with technologies across the spectrum, including ML, NLP, DL, embedded systems, and game design. My educational journey is complemented by hands-on project experience, from collaborative software engineering projects to innovative explorations in NLP and game development. With a comprehensive skill set that includes React, JavaScript, Python, and more, I’m poised to contribute to dynamic, technology-driven environments. I am particularly drawn to roles that promise diverse challenges and opportunities for growth, aiming to leverage my broad technical knowledge and collaborative experiences in the tech industry.</p>
        </div>
        <div style={projectsStyle}>
          <h2>Projects</h2>
          <div>
            <a href="https://github.com/AndrewASO/motivationWebsite" style={projectLinkStyle}>Personal Website Frontend</a>
            <a href="https://github.com/AndrewASO/motivationWebsiteBE" style={projectLinkStyle}>Personal Website Backend</a>
            <a href="https://github.com/marios-petrov/ScientificCitationSentimentAnalysisProject" style={projectLinkStyle}>NLP Scientific Citation</a>
            <a href="https://github.com/AndrewASO/NuPathBE" style={projectLinkStyle}>Software Engineering Project 2 Backend</a>
            <a href="https://github.com/AndrewASO/GameFinderWebserver" style={projectLinkStyle}>Software Engineering Final Project Backend</a>
            <a href="https://github.com/Furry/cppgamedev" style={projectLinkStyle}>C++ 2D Game</a>
          </div>
          <div style={topLeftCorner}></div>
          <div style={{ ...topRightCorner, borderWidth: '0 20px 20px 0', borderColor: 'transparent #0235e9 transparent transparent' }}></div> {/* Correct rotation for top right */}
          <div style={bottomLeftCorner}></div>
          <div style={bottomRightCorner}></div>
        </div>
      </div>
    </>
  );
}
