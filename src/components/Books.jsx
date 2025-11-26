import React from 'react'
import { Link } from 'react-router-dom'
function Books() {
  return (
    <>
   <div className='nav-section'>
        <img src="https://www.booktime.org/images/Logo_en.svg" alt="" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Books">Books</Link>
        <Link to="/Favorites">Favorites</Link>
        <Link to="/About">AboutUs</Link>
      </nav>
     <nav>
        <input type="text"placeholder='search book' />
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
         <i class="fa-regular fa-user"></i>
     </nav>
    </div>
    </>
  )
}

export default Books

