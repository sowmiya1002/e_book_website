import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="nav-section">
        <img
          className="logo"
          src="https://www.booktime.org/images/Logo_en.svg"
          alt=""
        />

        <nav className={`nav-item1 ${open ? "active" : ""}`}>
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
            {" "}
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
          <i class="fa-regular fa-user"></i>
        </nav>

        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>
    </>
  );
}

export default Navbar;
