import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import books from "./Booksdata"
import Footer from './Footer';
import Navbar from './Navbar';

 
 function Home() {
   
   const filteredProducts = books;
   return (
    <>
   
    <Navbar/>

    {/* hero-section */}
    <section>
    <div className='hero-section'>
      <h1>LOTS OF EBOOKS. 100 % FREE</h1>
      <p>Booktime is the children's and young readers' gateway to a world of knowledge and imagination. <br /> Explore a variety of interesting books and enjoyable stories in different languages.  <br /> <br /> <button>Sign Up</button>  </p>
      </div>
      </section>
          

   {/* book-section */}
      <section className="book-section">
        
  {/* 1  */}
  <div className="book-heading">
    <h3>Animal Greetings</h3>
    <a href="/Books" className="view-all">View All</a>
  </div>

  <div className="book-container">

    
        {filteredProducts.slice(0,4).map((books) => (
              <Link
                to={`/Books/${books.id}`}
                key={books.id}
                className="book-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img src={books.image} alt={books.name} className="image" />
              </Link>
              ))}



  </div>

{/* 2 */}
  <div className="book-heading">
    <h3>Friends and Feelings</h3>
    <a href="/Books" className="view-all">View All</a>
  </div>

  <div className="book-container">

     {filteredProducts.slice(5,9).map((books) => (
              <Link
                to={`/Books/${books.id}`}
                key={books.id}
                className="book-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img src={books.image} alt={books.name} className="image" />
              </Link>
              ))}

  </div>
  {/* 3 */}

   <div className="book-heading">
    <h3>Sleepy Stories</h3>
    <a href="/Books" className="view-all">View All</a>
  </div>

  <div className="book-container">

   
     {filteredProducts.slice(8,12).map((books) => (
              <Link
                to={`/Books/${books.id}`}
                key={books.id}
                className="book-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <img src={books.image} alt={books.name} className="image" />
              </Link>
              ))}

  </div>
</section>

{/* download-content */}

<section className='down-content'>
  <h1>Download Booktime</h1>
  <p>Let your children discover the joy of reading and unleash <br /> their imagination in a world of exciting stories and enjoyable <br /> books in different languages on topics that suit their interests and ages.</p>
<div className='app'>

<img  src="https://rsanimesh.github.io/images/play-store.png" alt="" />
<img src="https://rsanimesh.github.io/images/app-store.png" alt="" /></div>
</section>

  <Footer/>
    </>
    
  )
}

export default Home

