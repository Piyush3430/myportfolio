import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import AdminPanel from './components/AdminPanel';
import useAdminAccess from './hooks/useAdminAccess';

function App() {
  const [projects, setProjects] = useState([]);
  const { isAdminVisible, closeAdmin } = useAdminAccess();

  // Load projects from localStorage on component mount
  useEffect(() => {
    const savedProjects = localStorage.getItem('portfolio-projects');
    if (savedProjects) {
      try {
        setProjects(JSON.parse(savedProjects));
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    }
  }, []);

  // Save projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('portfolio-projects', JSON.stringify(projects));
  }, [projects]);

  const handleUpdateProjects = (newProjects) => {
    setProjects(newProjects);
  };

  return (
    <div className="bg-gray-100 min-h-screen text-gray-800 font-sans">
      <Navbar />
      <main className="container mx-auto px-4 md:px-0">
        <Hero />
        <About />
        <Skills />
        <Projects projects={projects} />
        <Education />
        <Contact />
      </main>

      {/* Admin Panel - Hidden by default, accessible via Ctrl+Shift+A */}
      <AdminPanel
        isVisible={isAdminVisible}
        onClose={closeAdmin}
        projects={projects}
        onUpdateProjects={handleUpdateProjects}
      />
    </div>
  );
}

export default App;
