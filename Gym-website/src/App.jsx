import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero.jsx';
import Programs from './Components/Programs.jsx';
import Trainers from './Components/Trainers.jsx';
import Contact from './Components/Contact.jsx';
import Footer from './Components/Footer.jsx';
const App = () => {
    useEffect(() => {
        const revealElements = () => document.querySelectorAll('.reveal');
        const handleOnScroll = () => {
          const elements = revealElements();
          elements.forEach((el) => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 150) el.classList.add('active');
            else el.classList.remove('active');
          });
        };

        window.addEventListener('scroll', handleOnScroll);
        handleOnScroll();
        return () => window.removeEventListener('scroll', handleOnScroll);
    }, []);
  

  return (
    <div>
      <Navbar />
      <Hero />
      <Programs />
      <Trainers />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
