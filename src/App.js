import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navbar from './NavBar/Navbar';
import Home from './Home/Home';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';


function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home" style={{ height: '100vh', paddingTop: '60px' }}> {/* Ensure this section is tall enough and starts below the Navbar */}
        <Home />
      </section>
      <Projects />
      <Skills />
    </div>
  );
}

export default App;