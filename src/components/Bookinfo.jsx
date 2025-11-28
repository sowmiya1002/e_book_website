import React from 'react'
import { Link } from 'react-router-dom'
import "./Bookinfo.css"
// import books from "./Booksdata"

function Bookinfo() {

  // const {id} = useParams();
  // const book = books.find((p)=> p.id === Number(id));


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
    
   {/* book info */}
     <div className='title-main'><h2 className='bt'>Book Time</h2></div>
   <div className='book-info'>

    
    <div className='bk-img'>
      <img src="https://downloads.booktime.org/covers/en/37514969_en.webp?v=f997f774bce8f45aq5cab9565712d3dc" width={400} height={500} />
    </div>
    <div className='book-details'>
      <h1>bookname</h1>
      <div className='book-btn'>
        <button>Favorites</button>
        <button>read</button>
      </div>
      <p>book one line</p>
      <h5>author</h5>
      <h5>illustrate</h5>
    </div>
   </div>


    </>
  )
}

export default Bookinfo
