import React from 'react';
import '../Styles/Navbar.css';
const Navbar = () => {
  return (
   <nav className='navbar'>
      <div className='logo'>
        Rebelfit <span>Gym</span>
      </div>
      <ul className='nav-links'>
        <li><a href='#hero'>Home</a></li>
        <li><a href='#programs'>Programs</a></li>
        <li><a href='#trainers'>Trainers</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <button className='join-btn'>Join Now</button>
   </nav>
  )
}

export default Navbar;
