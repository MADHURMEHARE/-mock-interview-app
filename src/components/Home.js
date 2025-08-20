import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Master Your Interview Skills
                <span className="hero-highlight"> with AI-Powered Practice</span>
              </h1>
              <p className="hero-description">
                Practice real interview questions, get instant feedback, and improve your confidence 
                with our comprehensive mock interview platform. Perfect for technical, behavioral, 
                and general interview preparation.
              </p>
              <div className="hero-actions">
                <Link to="/interview-types" className="btn btn-primary btn-lg">
                  Start Practicing
                </Link>
                <Link to="/results" className="btn btn-outline btn-lg">
                  View Results
                </Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-card">
                <div className="hero-card-header">
                  <div className="hero-card-avatar">👨‍💼</div>
                  <div className="hero-card-info">
                    <h3>Mock Interview</h3>
                    <p>In Progress...</p>
                  </div>
                </div>
                <div className="hero-card-body">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '65%' }}></div>
                  </div>
                  <p className="progress-text">Question 3 of 5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Platform?</h2>
            <p className="section-description">
              Everything you need to ace your next interview
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Targeted Practice</h3>
              <p>Practice with industry-specific questions tailored to your role and experience level.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Feedback</h3>
              <p>Get immediate insights on your responses and suggestions for improvement.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Progress Tracking</h3>
              <p>Monitor your improvement over time with detailed analytics and performance metrics.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Unlimited Practice</h3>
              <p>Practice as much as you want with our extensive question database.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎭</div>
              <h3>Realistic Simulation</h3>
              <p>Experience interview-like conditions with timing and structured question formats.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Friendly</h3>
              <p>Practice anywhere, anytime with our responsive design that works on all devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Ace Your Interview?</h2>
            <p>Join thousands of professionals who have improved their interview skills with our platform.</p>
            <Link to="/interview-types" className="btn btn-primary btn-lg">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
