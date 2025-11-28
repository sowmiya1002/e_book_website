import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"


function Home() {
  return (
    <>
    {/* navbar */}
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

    {/* hero-section */}
    <section>
    <div className='hero-section'>
      <h1>LOTS OF EBOOKS. 100 % FREE</h1>
      <p>Booktime is the children's and young readers' gateway to a world of knowledge and imagination. <br /> Explore a variety of interesting books and enjoyable stories in different languages.  <br /> <br /> <button>Sign Up</button>  </p>
      </div>
      </section>
          

{/* book-section */}
      <section className="book-section">
  <h2>BOOKS</h2>

  {/* 1  */}
  <div className="book-heading">
    <h3>Animal Greetings</h3>
    <a href="/Books" className="view-all">View All →</a>
  </div>

  <div className="book-container">

    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/37514969_en.webp?v=f997f774bce8f45aq5cab9565712d3dc" alt="" />
      </a>
    </div>

    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/53719095_en.webp?v=f997f774bce8f45aq5cab9565712d3dc" alt="" />
     </a>
    </div>

    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/53910784_en.webp?v=f997f774bce8f45aq5cab9565712d3dc" alt="" />
      </a>
    </div>

    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/58616450_en.webp?v=f997f774bce8f45aq5cab9565712d3dc" alt="" />
      </a>
    </div>

  </div>

{/* 2 */}
  <div className="book-heading">
    <h3>Friends and Feelings</h3>
    <a href="/Books" className="view-all">View All →</a>
  </div>

  <div className="book-container">

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
  {/* 3 */}

   <div className="book-heading">
    <h3>Sleepy Stories</h3>
    <a href="/Books" className="view-all">View All →</a>
  </div>

  <div className="book-container">

    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/20315604_en.webp?v=f997f774bce8f45aq5cab9565712d3dc" alt="" />
      </a>
    </div>

    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/73012729_en.webp?v=f997f774bce8f45aq5cab9565712d3dc" alt="" />
     </a>
    </div>

    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/14617289_en.webp?v=f997f774bce8f45aq5cab9565712d3dc" alt="" />
      </a>
    </div>

    <div className="book-card">
      <a href="/Bookinfo">
      <img src="https://downloads.booktime.org/covers/en/68710264_en.webp?v=f997f774bce8f45aq5cab9565712d3dc" alt="" />
      </a>
    </div>

  </div>
</section>

{/* download-content */}

<section className='down-content'>
  <h1>Download Booktime</h1>
  <p>Let your children discover the joy of reading and unleash <br /> their imagination in a world of exciting stories and enjoyable <br /> books in different languages on topics that suit their interests and ages.</p>
<img src="https://apps.apple.com/us/app/id6695740177" alt="" />
<img src="https://play.google.com/store/apps/details?id=org.booktime" alt="" />
</section>
    </>
    
  )
}

export default Home

