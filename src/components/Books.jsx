import React from 'react'
import { Link } from 'react-router-dom'
import './Books.css'

function Books() {
  return (
    <>
   <div className='nav-section'>
        <img className='logo' src="https://www.booktime.org/images/Logo_en.svg" alt="" />
      <nav className='nav-item1'>
       <Link className='menu' to="/">Home</Link>
              <Link className='menu' to="/Books">Books</Link>
              <Link className='menu' to="/Favorites">Favorites</Link>
              <Link className='menu' to="/About">AboutUs</Link>
      </nav>
     <nav className='nav-item2'>
        <input type="text"placeholder='search book' />
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
        <i class="fa-regular fa-user"></i>
     </nav>
    </div>
  
 
    
  <section className="book-section">
      <h2>BOOKS time</h2> 
  {/* <div className="book-heading">
    <h3>Animal Greetings</h3>
   
  </div> */}

  <div className="book-container">

    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/37514969_en.webp?v=f997f774bce8f45aq5cab9565712d3dc" alt="" />
      <p className="book-title">Hello Red Sea!</p></a>
    </div>

    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/53719095_en.webp?v=f997f774bce8f45aq5cab9565712d3dc" alt="" />
      <p className="book-title">Hello India!</p></a>
    </div>

    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/53910784_en.webp?v=f997f774bce8f45aq5cab9565712d3dc" alt="" />
      <p className="book-title">Hello Arctic!</p></a>
    </div>

    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/58616450_en.webp?v=f997f774bce8f45aq5cab9565712d3dc" alt="" />
      <p className="book-title">Hello African Savanna!</p></a>
    </div>

  


    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/75819472_en.webp?v=r977f774bce8f45af5cab9565712d3dc" alt="" />
      </a>
    </div>

    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/28214298_en.webp?v=r977f774bce8f45af5cab9565712d3dc" alt="" />
     </a>
    </div>

    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/30419120_en.webp?v=r977f774bce8f45af5cab9565712d3dc" alt="" />
      </a>
    </div>

    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/16717343_en.webp?v=23dec0f7d5a267855c0950265d0b9035" alt="" />
      </a>
    </div>

  </div>
</section>
     
    
    </>
  )
}

export default Books

