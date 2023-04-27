import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='nav-container'>
            <div>
                <h1>EMP </h1>
            </div>
           <ul>
            <li className='nav-item'><Link to='/'>Home</Link></li>
            <li className='nav-item'><Link to='/about'>About</Link></li>
            <li className='nav-item'><Link to='/contact'>Contact</Link></li>
            <li className='nav-item'><Link to='/feedback'>Feedback</Link></li>
           </ul> 
        </nav>
    </div>
  )
}

export default Navbar