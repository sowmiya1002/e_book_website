import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const footer = {
    backgroundColor: "#f0f0f0",
    padding: "30px 20px", // reduced padding
    marginTop: "50px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "flex-start",
    minHeight: "200px", // ensures footer stays around 200px
  };

  const footerLeft = {
    maxWidth: "300px",
    marginBottom: "20px",
  };

  const footerLogo = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "8px",
  };

  const footerText = {
    fontSize: "16px",
    lineHeight: 1.4,
  };

  const socialRow = {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
  };

  const socialIcon = {
    width: "18px",
    cursor: "pointer",
  };

  const footerMenu = {
    display: "flex",
    gap: "30px",
    flexWrap: "wrap",
  };

  const menuColumn = {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  };

  const menuItem = {
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <>
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
