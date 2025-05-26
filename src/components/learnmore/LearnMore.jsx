import React from 'react';
import Footer from '../footer/Footer';

const LearnMore = () => {
    return (
        <body>
            <div className="learn-more-container">
                <section className="hero-section">
                    <h1>About Our Company</h1>
                    <p className="subtitle">Revolutionizing Online Commerce Through Innovation</p>
                </section>

                <section className="mission-section">
                    <h2>Our Mission</h2>
                    <p>At EasyBuy, we're dedicated to creating seamless connections between buyers and sellers, 
                        transforming the way commerce happens in the digital age. Our platform empowers businesses and consumers alike, 
                        making online transactions more accessible, secure, and efficient than ever before.</p>
                </section>

                <section className="services-section">
                    <h2>What We Offer</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <h3>For Buyers</h3>
                            <ul>
                                <li>Access to a vast marketplace of verified sellers</li>
                                <li>Secure payment processing</li>
                                <li>Real-time order tracking</li>
                                <li>24/7 customer support</li>
                            </ul>
                        </div>
                        <div className="service-card">
                            <h3>For Sellers</h3>
                            <ul>
                                <li>Powerful e-commerce tools</li>
                                <li>Inventory management system</li>
                                <li>Analytics and insights</li>
                                <li>Marketing support</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="values-section">
                    <h2>Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-item">
                            <h3>Trust</h3>
                            <p>Building secure and reliable trading relationships</p>
                        </div>
                        <div className="value-item">
                            <h3>Innovation</h3>
                            <p>Continuously improving our platform with cutting-edge technology</p>
                        </div>
                        <div className="value-item">
                            <h3>Excellence</h3>
                            <p>Delivering outstanding service quality and user experience</p>
                        </div>
                    </div>
                </section>

                <section className="stats-section">
                    <h2>Our Impact</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <h3>Global Reach</h3>
                            <p>Connecting buyers and sellers across multiple countries</p>
                        </div>
                        <div className="stat-item">
                            <h3>Secure Transactions</h3>
                            <p>Protected by advanced security protocols</p>
                        </div>
                        <div className="stat-item">
                            <h3>Customer Satisfaction</h3>
                            <p>Dedicated support team ensuring smooth operations</p>
                        </div>
                    </div>
                </section>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </body>
    );
};

export default LearnMore;
