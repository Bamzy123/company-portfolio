import React from 'react';
import { Link } from 'react-router-dom';
import imgs from '/e-commerce logo.webp';
import easy from '/easy buy.webp';
import active from '/active.jpg'
import security from '/securitys.webp';
import Footer from '../footer/Footer';

const LandingPage = () => {
    return (
        <div className="landing-container">
            <nav className="landing-nav">
                <img src= { imgs } alt="Logo" className="logo" />
                <div className="nav-links">
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/signup" className="nav-button">Get Started</Link>
                </div>
            </nav>

            <main className="hero-section">
                <div className="hero-color hero-content">
                    <h1>Welcome to Our Platform</h1>
                    <p className="hero-description">
                        Discover amazing features and boost your productivity with our innovative solutions.
                    </p>
                    <div className="cta-buttons">
                        <Link to="/signup" className="primary-button">Start Free Trial</Link>
                        <Link to="/learnmore" className="secondary-button">Learn More</Link>
                    </div>
                </div>

                <div className="features-section">
                    <div className="feature-card">
                        <img src= { easy } alt="Feature 1" className='feature-image'/>
                        <h3>Easy to Use</h3>
                        <p>Intuitive interface designed for the best user experience</p>
                    </div>
                    <div className="feature-card">
                    <img src= { security } alt="Feature 1" className='feature-image'/>
                        <h3>Secure</h3>
                        <p>Your data is protected with enterprise-grade security</p>
                    </div>
                    <div className="feature-card">
                    <img src= { active } alt="Feature 1" className='feature-image'/>
                        <h3>24/7 Support</h3>
                        <p>Our team is always here to help you succeed</p>
                    </div>
                </div>
            </main>
            <div className="footer">
                    <Footer />
                </div>
        </div>
    );
};

export default LandingPage;