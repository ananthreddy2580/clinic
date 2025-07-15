import { useState, useEffect } from "react";
import "./App.css";
import { initScrollAnimations } from "./scrollAnimations";
import heroImage from "./assets/image.png";
import teamImage from "./assets/image1.png";
import logoImage from "./assets/logo.jfif";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaBars, FaTimes } from "react-icons/fa";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showMap, setShowMap] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    initScrollAnimations();
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  const handleMapClick = () => {
    setShowMap(!showMap);
  };

  const mapContainerStyle = {
    height: "400px",
    width: "100%",
  };

  const center = {
    lat: 17.523577, // Updated latitude
    lng: 78.384567, // Updated longitude
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const navigation = document.querySelector('.main-navigation');
      const menuButton = document.querySelector('.mobile-menu-button');
      
      if (isMobileMenuOpen && navigation && !navigation.contains(event.target) && !menuButton.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="App">
      <header className="site-header sticky-header">
        <div className="logo-container">
          <img
            src={logoImage}
            alt="Phonic Logo"
            className="logo"
            width="50"
            height="50"
          />
          <h2 className="site-title small-title">Phonic Child Development Center</h2>
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className={`main-navigation ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <a
                href="#home"
                className={activeSection === "home" ? "active" : ""}
                onClick={() => handleNavClick("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={activeSection === "services" ? "active" : ""}
                onClick={() => handleNavClick("services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
                onClick={() => handleNavClick("about")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className={activeSection === "gallery" ? "active" : ""}
                onClick={() => handleNavClick("gallery")}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
                onClick={() => handleNavClick("contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home" className="hero-section">
          <img src={heroImage} alt="Hero" className="hero-image" />
          <div className="hero-overlay">
            <h2>Welcome to Phonic Rehabilitation</h2>
            <p>Transforming Communication, Improving Lives</p>
          </div>
        </section>

        <section className="about-phonic-container">
          <section className="about-phonic previous-style">
            <h3>About Phonic Rehabilitation</h3>
            <p>
              Phonic Rehabilitation is committed to transforming the lives of
              individuals through specialized speech and hearing services. Our
              mission is to empower our clients by providing personalized care
              that addresses their unique communication challenges.
            </p>
            <p>
              With a team of highly trained professionals, we utilize the latest
              evidence-based practices and technologies to ensure effective
              treatment. Our holistic approach focuses not only on the physical
              aspects of rehabilitation but also on the emotional and social
              well-being of our clients.
            </p>
            <p>
              At Phonic Rehabilitation, we believe that every individual
              deserves the opportunity to communicate effectively and
              confidently. We strive to create a supportive environment where
              clients can achieve their goals and improve their quality of life.
            </p>
          </section>
        </section>

        <section id="services" className="services-section">
          <div className="services-header">
            <div className="logo-container">
              {/* <img src={logoImage} alt="Phonic Logo" /> */}
              <h1 className="serviesHead">Our Services</h1>
            </div>
          </div>
          <p className="header-paragraph">
            Explore the range of services we offer to support your communication
            needs.
          </p>
          <ul className="services-container">
            <li className="service-item">
              <span className="service-icon">🗣️</span>
              <div>
                <h3>Speech & Language Evaluation</h3>
                <p>
                  Comprehensive assessments to evaluate speech and language
                  skills.
                </p>
              </div>
            </li>
            <li className="service-item">
              <span className="service-icon">🧩</span>
              <div>
                <h3>Autism</h3>
                <p>
                  Specialized therapy to support communication in children with
                  autism.
                </p>
              </div>
            </li>
            <li className="service-item">
              <span className="service-icon">🧠</span>
              <div>
                <h3>ADHD</h3>
                <p>
                  Targeted strategies to enhance communication skills in
                  children with ADHD.
                </p>
              </div>
            </li>
            <li className="service-item">
              <span className="service-icon">🔊</span>
              <div>
                <h3>Misarticulations</h3>
                <p>Focused therapy to correct speech sound errors.</p>
              </div>
            </li>
            <li className="service-item">
              <span className="service-icon">💬</span>
              <div>
                <h3>Stuttering & Cluttering</h3>
                <p>Therapeutic approaches to manage fluency disorders.</p>
              </div>
            </li>
            <li className="service-item">
              <span className="service-icon">🧩</span>
              <div>
                <h3>Intellectual Disabilities</h3>
                <p>
                  Customized therapy to support communication in individuals
                  with intellectual disabilities.
                </p>
              </div>
            </li>
          </ul>
        </section>

        <section id="about" className="about-section scroll-reveal">
          <div className="about-content">
            <div className="about-column">
              <div className="about-image-container">
                <img
                  src={teamImage}
                  alt="Phonic Rehabilitation Team"
                  className="about-image"
                />
                <div className="image-overlay">
                  <p>Our Dedicated Professionals</p>
                </div>
              </div>

              <div className="about-text">
                <h2 className="about-title">About Our Clinic</h2>
                <p>
                  Phonic Speech and Hearing Rehabilitation is committed to
                  providing compassionate, expert care to help individuals
                  overcome communication challenges.
                </p>
                <p>
                  Our team of certified professionals uses the latest techniques
                  and technologies to support your communication goals.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">🏆</span>
                    <p>Expert Certified Professionals</p>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">❤️</span>
                    <p>Compassionate Patient Care</p>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">🔬</span>
                    <p>Advanced Treatment Techniques</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery-section">
          <h2 className="gallerycontainer">Gallery</h2>
          <div className="gallery-container">
            <div className="gallery-item">
              <img src={teamImage} alt="Gallery Image 1" />
              <div className="gallery-overlay">
                <p>Image Description 1</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={heroImage} alt="Gallery Image 2" />
              <div className="gallery-overlay">
                <p>Image Description 2</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={teamImage} alt="Gallery Image 3" />
              <div className="gallery-overlay">
                <p>Image Description 3</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={teamImage} alt="Gallery Image 4" />
              <div className="gallery-overlay">
                <p>Image Description 4</p>
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="gallery-container">
            <div className="gallery-item">
              <img src={teamImage} alt="Gallery Image 1" />
              <div className="gallery-overlay">
                <p>Image Description 1</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={heroImage} alt="Gallery Image 2" />
              <div className="gallery-overlay">
                <p>Image Description 2</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={teamImage} alt="Gallery Image 3" />
              <div className="gallery-overlay">
                <p>Image Description 3</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src={teamImage} alt="Gallery Image 4" />
              <div className="gallery-overlay">
                <p>Image Description 4</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-reveal contact-section">
          <h2 className="contact-title">Contact Us</h2>
          <div className="contact-card flex-container">
            <div className="contact-info">
              <p className="contact-description">Schedule a consultation:</p>
              <p>📞 Contact: 9381399402</p>
              <p>📍 Address: Nizampet</p>
              <p>✉ Email: phonicrehab@gmail.com </p>
              <p>🌐 Website: www.phonicrehab.com</p>
            </div>
            <div className="map-container">
              <MapContainer
                style={{ height: "200px", width: "100%" }}
                center={center}
                zoom={10}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                  <Popup>Your Location</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
