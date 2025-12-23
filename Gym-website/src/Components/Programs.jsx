import React from 'react';
import '../Styles/Programs.css';
import { programData } from '../Data/web-Data.js';
const Programs = () => {
  return (
    <section id='programs' className='programs reveal'>
      <h2 className='section-title' style={{color:'#ff6600'}}>Our Training Programs</h2>
      <div className='program-grid'>
        {programData.map((program) => (
          <div key={program.id} className='program-card'>
            <img src={program.img} alt={program.title} className='program-image' />
            <h3 className='program-title'>{program.title}</h3>
            <p className='program-description' style={{color:'#666'}}>{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Programs;
