import React from 'react'
import { Link } from 'react-router-dom'
import './Books.css'
import books from "./Booksdata"
import Footer from './Footer';
import Navbar from './Navbar';

function Books() {
  const filteredProducts = books;
  return (
    <>
   {/* <div className='nav-section'>
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
    </div> */}
  
 <Navbar/>
    
   
  <section className="book-section">

      {/* <h2>BOOKS</h2>  */}
  {/* <div className="book-heading">
    <h3>Animal Greetings</h3>
   
  </div> */}

   <div className='book-heading'
        style={{
          width: "100%",
          background: "linear-gradient(90deg, #a39e9eff, #b3c9dfff)",
          padding: "30px 0",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // marginTop:"65px",
          height:"50px",
        }}
      >
        <img
          src="https://www.booktime.org/images/books/icons/il.png"
          alt=""
          style={{
            position: "absolute",
            left: "20px",
            bottom: "-10px",
            width: "120px",
            height: "90px",
            padding: "10px",
          }}
        />

        <h2
          style={{
            fontSize: "36px",
            fontWeight: "500",
            color: "#333",
            textAlign: "center",
          }}>Books </h2>

        <img
          src="https://www.booktime.org/images/books/icons/ir.png"
          alt=""
          style={{
            position: "absolute",
            right: "20px",
            bottom: "0",
            width: "150px",
            height: "100px",
          }}
        />
      </div>

  <div className="books-container">

    {filteredProducts.map((books) => (
          <Link
            to={`/Books/${books.id}`}
            key={books.id}
            className="book-card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <img src={books.image} alt={books.name} className="image" />
          </Link>
          ))}

    {/* <div className="book-card">
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
    </div> */}

  </div>
</section>
     
    <Footer/>
    </>
  )
}

export default Books

