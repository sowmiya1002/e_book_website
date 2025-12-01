import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
function Favorites() {
  return (
    <>
     

        <Navbar/>
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
          }}>Favorites </h2>

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

          
          
          <Footer/>
    </>
  )
}

export default Favorites
