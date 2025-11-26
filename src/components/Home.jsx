import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <div className='nav-section'>
        <img src="https://www.booktime.org/images/Logo_en.svg" alt="" />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Books">Books</Link>
        <Link to="/Favorites">Favorites</Link>
      </nav>
    </div>
    </>
  )
}

export default Home

