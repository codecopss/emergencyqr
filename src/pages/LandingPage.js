import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const [visibleSection, setVisibleSection] = useState("");

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? "" : section);
  };

  return (
    <div className="landing-wrapper">
      <header className="navbar">
        <div className="container">
          <h1 className="logo">EmergencyQR</h1>
          <nav className="nav-links">
            <button onClick={() => toggleSection("how")} className="nav-btn">How It Works</button>
            <button onClick={() => toggleSection("features")} className="nav-btn">Features</button>
            {/* <button onClick={() => toggleSection("about")} className="nav-btn">About</button> */}
            <button onClick={() => toggleSection("contact")} className="nav-btn">Contact</button>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-container">
          <h2>Emergency QR Code Generator</h2>
          <p>Quickly create and print your emergency contact QR code.</p>
          <Link to="/generate">
            <button className="cta-button">Go to QR Generator</button>
          </Link>
          {/* <img
            src="https://cdn-icons-png.flaticon.com/512/6063/6063456.png"
            alt="QR Scan"
            className="qr-illustration"
          /> */}
        </div>
      </section>

      {visibleSection === "how" && (
        <section className="info-section">
          <h3>How It Works</h3>
          <ol>
            <li>Enter your emergency contact and medical info.</li>
            <li>Generate your personalized QR code.</li>
            <li>Download or print your QR code.</li>
            <li>Stick or save your QR code for emergencies.</li>
            <li>Scan anytime to access important info fast.</li>
          </ol>
        </section>
      )}

      {visibleSection === "features" && (
        <section className="info-section">
          <h3>Features</h3>
          <ul>
            <li>Quick QR Code Generation</li>
            <li>Stores Emergency Contact & Health Info</li>
            <li>Download/Print Ready</li>
            <li>Mobile Friendly</li>
            <li>No Sign Up Required</li>
          </ul>
        </section>
      )}

      {visibleSection === "about" && (
        <section className="info-section">
          <h3>About</h3>
          <p>
            EmergencyQR is a lightweight tool to help you stay prepared in case of emergencies.
            Just enter your information, generate the QR, and you're good to go.
          </p>
        </section>
      )}

      {visibleSection === "contact" && (
        <section className="info-section">
          <h3>Contact</h3>
          <p>Email: support@emergencyqr.com</p>
          <p>Phone: +91-9876543210</p>
        </section>
      )}
    </div>
  );
};

export default LandingPage;
