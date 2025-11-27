import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  const container = {
    maxWidth: "1200px",
    margin: "auto",
    padding: "20px",
    color: "black",
  };

  const sectionTitle = {
    fontSize: "30px",
    marginBottom: "10px",
    color: "black",
  };

  const paragraph = {
    lineHeight: "1.7",
    marginBottom: "12px",
    fontSize: "20px",
  };

  const impactTitle = {
    marginTop: "40px",
    fontSize: "24px",
  };

  const impactBox = {
    marginTop: "20px",
    background: "linear-gradient(90deg, #6613beff, #4987f1ff)",
    padding: "25px",
    borderRadius: "15px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "15px",
    color: "white",
    textAlign: "center",
  };

  const impactItemTitle = {
    fontSize: "28px",
    marginBottom: "5px",
  };

  const impactItemText = {
    fontSize: "14px",
    opacity: "0.9",
  };

  const readingGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    marginTop: "30px",
    textAlign: "center",
    
  };


 const readingItem = {
   padding: "10px",
   backgroundColor: "#ece6e6ff",
   border: "10px solid #ece6e6ff",
   borderRadius: "100px 50px 100px 50px",
 };

  const readingImg = {
    width: "200px",
    height: "150px",
    objectFit: "contain",
    marginBottom: "10px",
  };

  const readingItemTitle = {
    fontSize: "20px",
    marginBottom: "6px",
  };

  const readingItemText = {
    fontSize: "20px",
    opacity: 0.9,
    lineHeight: "1.5",
  };

  const downloadSection = {
    backgroundColor: "#e8d6ef",
    padding: "40px 20px",
    textAlign: "center",
    marginTop: "50px",
  };

  const downloadTitle = {
    fontSize: "32px",
    marginBottom: "10px",
  };

  const downloadSubtitle = {
    fontSize: "20px",
    lineHeight: 1.6,
    maxWidth: "800px",
    margin: "auto",
    marginBottom: "20px",
  };

  const downloadBtn = {
    background: "linear-gradient(90deg, #6a11cb, #2575fc)",
    border: "none",
    padding: "12px 25px",
    color: "white",
    borderRadius: "25px",
    fontSize: "20px",
    cursor: "pointer",
    marginBottom: "15px",
  };

  const storeRow = {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "25px",
  };

  const storeImg = {
    width: "130px",
    cursor: "pointer",
  };

  const imageArea = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  };

  const mobileImg = {
    width: "500px",
    height: "200px",
    zIndex: 2,
  };

  

  const freeBadge = {
    position: "absolute",
    left: "20%",
    top: "65%",
    background: "#ff1e9c",
    color: "white",
    padding: "12px 20px",
    fontSize: "20px",
    borderRadius: "50px",
    transform: "rotate(-10deg)",
  };

  const footer = {
    backgroundColor: "#f0f0f0",
    padding: "40px 20px",
    marginTop: "50px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  };

  const footerLeft = {
    maxWidth: "350px",
    marginBottom: "20px",
  };

  const footerLogo = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  };

  const footerText = {
    fontSize: "20px",
    lineHeight: 1.6,
  };

  const socialRow = {
    display: "flex",
    gap: "15px",
    marginTop: "10px",
  };

  const socialIcon = {
    width: "22px",
    cursor: "pointer",
  };

  const footerMenu = {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
  };

  const menuColumn = {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  };

  const menuItem = {
    fontSize: "20px",
    cursor: "pointer",
  };

  return (
    <>
      <div className="nav-section">
        <img src="https://www.booktime.org/images/Logo_en.svg" alt="" />

        <nav className="nav-item1">
          <Link className="menu" to="/">
            Home
          </Link>
          <Link className="menu" to="/Books">
            Books
          </Link>
          <Link className="menu" to="/Favorites">
            Favorites
          </Link>
          <Link className="menu" to="/About">
            AboutUs
          </Link>
        </nav>

        <nav className="nav-item2">
          <input type="text" placeholder="search book" />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
          <i className="fa-regular fa-user"></i>
        </nav>
      </div>

      <div
        style={{
          width: "100%",
          background: "linear-gradient(90deg, #a39e9eff, #a6c6ffff)",
          padding: "30px 0",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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

        <h1
          style={{
            fontSize: "36px",
            fontWeight: "500",
            color: "#333",
            textAlign: "center",
            
          }}
        >
          About Us
        </h1>

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

      <div style={container}>
        <h3 style={sectionTitle}>Who We Are</h3>

        <p style={paragraph}>
          Booktime is a global initiative from the Hindawi Foundation.
        </p>
        <p style={paragraph}>
          Launched in 2024, Booktime has already reached children across
          continents.
        </p>
        <p style={paragraph}>We come with experience since 2008.</p>
        <p style={paragraph}>
          Our goal is simple: every child deserves stories that inspire them.
        </p>

        <h3 style={impactTitle}>Our Impact</h3>

        <div style={impactBox}>
          <div>
            <h2 style={impactItemTitle}>+1.2M</h2>
            <p style={impactItemText}>Children Reading with Booktime</p>
          </div>

          <div>
            <h2 style={impactItemTitle}>+5.8M</h2>
            <p style={impactItemText}>Books Read</p>
          </div>

          <div>
            <h2 style={impactItemTitle}>190</h2>
            <p style={impactItemText}>Countries</p>
          </div>

          <div>
            <h2 style={impactItemTitle}>7</h2>
            <p style={impactItemText}>Languages</p>
          </div>
        </div>

        <h2 style={{ marginTop: "50px", fontSize: "28px", fontWeight: "400" }}>
          The Power of Reading
        </h2>

        <p style={paragraph}>Early access to books changes lives.</p>

        <div style={readingGrid}>
          <div style={readingItem}>
            <img
              src="https://i.pinimg.com/1200x/a8/f3/a5/a8f3a5ff34a3b7ba721fa44d9fa643cc.jpg"
              style={readingImg}
              alt=""
            />
            <p style={readingItemTitle}>Boosts Brain Development</p>
            <p style={readingItemText}>Strengthens memory and focus.</p>
          </div>

          <div style={readingItem}>
            <img
              src="https://i.pinimg.com/736x/2a/e5/da/2ae5da5c43f15af92b76daca2b8939c4.jpg"
              style={readingImg}
              alt=""
            />
            <p style={readingItemTitle}>Supercharges School Success</p>
            <p style={readingItemText}>Early readers perform better.</p>
          </div>

          <div style={readingItem}>
            <img
              src="https://i.pinimg.com/736x/48/83/65/488365efd52ad5e90b41c7de8bd6c267.jpg"
              style={readingImg}
              alt=""
            />
            <p style={readingItemTitle}>Sparks Creativity</p>
            <p style={readingItemText}>Encourages imagination.</p>
          </div>

          <div style={readingItem}>
            <img
              src="https://i.pinimg.com/736x/45/e9/15/45e915f04baf34a7b9474a32fd41bdfc.jpg"
              style={readingImg}
              alt=""
            />
            <p style={readingItemTitle}>Supports Language Growth</p>
            <p style={readingItemText}>Improves vocabulary.</p>
          </div>
        </div>
      </div>

      <div style={downloadSection}>
        <h1 style={downloadTitle}>Download Booktime</h1>

        <p style={downloadSubtitle}>
          Let your children discover the joy of reading…
        </p>

        <button style={downloadBtn}>Download the App</button>

        <div style={storeRow}>
          <img src="appstore" alt="App Store" style={storeImg} />
          <img src="playstore" alt="Play Store" style={storeImg} />
        </div>

        <div style={imageArea}>
          <img src="" style={mobileImg} />
          
        </div>
      </div>

      <div style={footer}>
        <div style={footerLeft}>
          <div style={footerLogo}>
            <img
              src="https://www.booktime.org/images/Logo_en.svg"
              alt="Booktime Logo"
              style={{ width: "150px" }}
            />
            
          </div>

          <p style={footerText}>
            Booktime is an initiative of the Hindawi Foundation, a registered
            charity in England and Wales. York House, 41 Sheet Street, Windsor
            SL4 1DD.
          </p>

          <div style={socialRow}>
            <img src="facebook" alt="fb" style={socialIcon} />
            <img src="instagram" alt="insta" style={socialIcon} />
            <img src="twitter" alt="twitter" style={socialIcon} />
          </div>
        </div>

        <div style={footerMenu}>
          <div style={menuColumn}>
            <span style={menuItem}>Home</span>
            <span style={menuItem}>Books</span>
            <span style={menuItem}>Series</span>
            <span style={menuItem}>Contributors</span>
          </div>

          <div style={menuColumn}>
            <span style={menuItem}>About Us</span>
            <span style={menuItem}>Donate</span>
            <span style={menuItem}>Privacy Policy</span>
            <span style={menuItem}>Terms & Conditions</span>
          </div>
        </div>
      </div>
    </>
  );
}
