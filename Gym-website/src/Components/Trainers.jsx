import React from 'react';
import '../Styles/Trainers.css';
import { trainerData } from '../Data/web-Data.js';
const Trainers = () => {
  return (
    <section id='trainers' className='trainers reveal'>
      <h2 className='trainers-title' style={{color:'#ff6600'}}>Our Trainers</h2>
      <div className='trainers-grid'>
      {
        trainerData.map((trainer)=>
          <div key={trainer.id} className='trainer-card'>
            <img src={trainer.img} alt={trainer.name} className='trainer-img' />
            <h3 className='trainer-name' style={{color:'#ff6600'}}>{trainer.name}</h3>
            <p className='trainer-role' style={{color:'grey'}}>{trainer.role}</p>
          </div>
        )
      }
      </div>
    </section>
  )
}

export default Trainers;
