import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  const wrapper = {
    paddingTop: "65px",
    fontFamily: " serif",
    color: "#f8f6f6ff",
  };

  const hero = {
    width: "100%",
    backgroundImage:
      "url('https://i.pinimg.com/736x/8a/1f/3b/8a1f3b55eb83152b03fb24b352ffbe43.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "70px 20px",
    textAlign: "center",
    height: "300px",
  };


  const heroTitle = {
    fontSize: "42px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#a82929ff",
  };

  const heroSubtitle = {
    fontSize: "20px",
    maxWidth: "700px",
    margin: "auto",
    lineHeight: "1.6",
    color: "#e3e2e2ff",
  };

  const section = {
    maxWidth: "1100px",
    margin: "auto",
    padding: "30px 20px",
    lineHeight: "1.8",
  };

  const heading = {
    fontSize: "30px",
    fontWeight: "600",
    marginBottom: "15px",
    color: "#b93c3cff",
    padding:"20px",
  };

  const impactBox = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginTop: "25px",
  };

  const impactCard = {
    background:"linear-gradient(90deg, #8d0cefce, #731ba5ff)",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(255, 250, 250, 1)",
    textAlign: "center",
  };

  const impactNumber = {
    fontSize: "34px",
    color: "#f7f7f7ff",
    fontWeight: "700",
  };

  const impactText = {
    fontSize: "15px",
    marginTop: "5px",
    opacity: 0.8,
  };

  const featuresGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    marginTop: "30px",
  };

  const featureCard = {
    background: "#f7f7ff",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    border: "1px solid #ece9ff",
  };

  const featureImg = {
    width: "160px",
    height: "130px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px",
  };

  return (
    <>
      <Navbar />/

      <div style={wrapper}>
        {/* HERO */}
        <div style={hero}>
          <h1 style={heroTitle}>About Us</h1>
          <p style={heroSubtitle}>
            Discover a universe of stories, knowledge, and imagination. We bring
            reading to life for every child, student, and book lover.
          </p>
        </div>

        {/* WHO WE ARE */}
        <div style={section}>
          <h2 style={heading}>Who We Are</h2>
          <p>
            E-Book World is built for readers who love exploring stories beyond
            boundaries. From picture books to educational content, we bring a
            beautiful, easy, and modern reading experience to everyone.
          </p>

          <p>
            Since our launch in 2024, we have reached thousands of readers
            across countries and continue to grow every day.
          </p>
        </div>

        {/* IMPACT SECTION */}
        <div style={section}>
          <h2 style={heading}>Our Global Impact</h2>

          <div style={impactBox}>
            <div style={impactCard}>
              <div style={impactNumber}>1.4M+</div>
              <p style={impactText}>Active Readers</p>
            </div>
            <div style={impactCard}>
              <div style={impactNumber}>3.2M+</div>
              <p style={impactText}>E-Books Read</p>
            </div>
            <div style={impactCard}>
              <div style={impactNumber}>120+</div>
              <p style={impactText}>Countries Reached</p>
            </div>
            <div style={impactCard}>
              <div style={impactNumber}>9</div>
              <p style={impactText}>Languages Available</p>
            </div>
          </div>
        </div>

        {/* FEATURES WITH IMAGES */}
        <div style={section}>
          <h2 style={heading}>Why Readers Love Us</h2>

          <div style={featuresGrid}>
            <div style={featureCard}>
              <img
                src="https://i.pinimg.com/736x/48/83/65/488365efd52ad5e90b41c7de8bd6c267.jpg"
                alt="Reading"
                style={featureImg}
              />
              <h3>Boosts Creativity</h3>
              <p>Beautiful illustrations spark imagination in every child.</p>
            </div>

            <div style={featureCard}>
              <img
                src="https://i.pinimg.com/736x/2a/e5/da/2ae5da5c43f15af92b76daca2b8939c4.jpg"
                alt="Success"
                style={featureImg}
              />
              <h3>Improves Learning</h3>
              <p>Interactive and engaging books enhance understanding.</p>
            </div>

            <div style={featureCard}>
              <img
                src="https://i.pinimg.com/736x/45/e9/15/45e915f04baf34a7b9474a32fd41bdfc.jpg"
                alt="Kids Reading"
                style={featureImg}
              />
              <h3>Encourages Reading Habits</h3>
              <p>Easy-to-use design makes reading fun.</p>
            </div>

            <div style={featureCard}>
              <img
                src="https://i.pinimg.com/736x/48/09/7b/48097b54441177e12164f3de0f6ba4ad.jpg"
                alt="Ebooks"
                style={featureImg}
              />
              <h3>Huge Book Collection</h3>
              <p>Thousands of books categorized for every age group.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
