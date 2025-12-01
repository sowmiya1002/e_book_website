import React from 'react'
import { Link, useParams } from 'react-router-dom'
import "./Bookinfo.css"
import books from "./Booksdata"
import Navbar from './Navbar';

function Bookinfo() {

  const { id } = useParams();                      
  const book = books.find(item => item.id == id);

  // if (!book) return <h2>Book Not Found</h2>;


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
          <input type="text" placeholder='search book' />
          <button><i className="fa-solid fa-magnifying-glass"></i></button>
          <i className="fa-regular fa-user"></i>
        </nav>
      </div> */}

      <Navbar/>

      {/* book info */}
      <div className='title-main'><h2 className='bt'>Book Time</h2></div>

      <div className='book-info'>
        <div className='bk-img'>
          <img src={book.image} width={280} height={400} alt="" />
        </div>

        <div className='book-details'>
          <h3 className='b-name'>{book.name}</h3>   

          <div className='book-btn'>
            <button>Favorites</button>
            <button>Read</button>
          </div>

          <hr />

          <p className='b-para'>{book.description}</p>
          
          <p className='by'>Written By</p>
          <h5>{book.written_by}</h5>

          <p className='by'>Illustrated by</p>
          <h5>{book.Illustrated_by}</h5>
        </div>
      </div>


    </>
  )
}

export default Bookinfo
