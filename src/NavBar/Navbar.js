import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#000', // Black background
    color: '#fff', // White text
    padding: '10px 20px', // Adjust padding as needed
    fontSize: '18pt', // Base font size for the navbar
    fontWeight: 'bold', // Bold text
    position: 'fixed', // Fixed at the top
    width: '100%', // Full width
    top: '0', // Align to the top
    left: '0', // Align to the left
    zIndex: '1000', // Ensure it stays on top
  };

  const navItemStyle = {
    marginLeft: '20px', // Space between items
    fontSize: '16pt', // Slightly smaller font size than the name
    textDecoration: 'none', // Remove underline from links
    color: '#fff', // White text for consistency
  };

  return (
    <nav style={navbarStyle}>
      <span>Andrew Skevington-Olivera</span>
      <span style={{ marginLeft: '20px' }}>|</span>
      {/* Assuming NavItem is a styled <a> tag or similar; adjust as needed */}
      <a href="#home" style={navItemStyle}>About Me</a>
      <a href="#projects" style={navItemStyle}>Past Work</a>
      <a href="#skills" style={navItemStyle}>Skills</a>
    </nav>
  );
};

export default Navbar;
