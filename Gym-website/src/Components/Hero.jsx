import React from 'react';
import '../Styles/Hero.css';
const Hero = () => {
  return (
    <section className="hero" id='hero'>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className='hero-title'>TRANSFORM YOUR <span>BODY</span>&MIND</h1>
          <p className='hero-subtitle'>unleash your inner strength with <strong style={{color:'#ff6600'}}>Rebel Fitness</strong> where fashion meets power</p>
          <div className='hero-buttons'>
            <button className='btn-primary'>join now</button>
            <button className='btn-secondary'>Explore more programs</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
