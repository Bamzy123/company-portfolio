import { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

// API endpoints (to be provided by backend developer)
// const API_ENDPOINTS = {
//   signup: process.env.REACT_APP_API_SIGNUP_ENDPOINT || '/api/auth/signup',
// };

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');


  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(API_ENDPOINTS.signup, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Signup failed');

      setMessage('Signup successful! Please check your email to verify.');
      setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
    } catch (err) {
      setMessage(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create an Account</h2>
        {message && <p className="signup-message">{message}</p>}
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="signup-field">
            <label htmlFor="fullName" className="signup-label">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="signup-input"
            />
            {errors.fullName && <p className="signup-error">{errors.fullName}</p>}
          </div>

          <div className="signup-field">
            <label htmlFor="email" className="signup-label">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="signup-input"
            />
            {errors.email && <p className="signup-error">{errors.email}</p>}
          </div>

          <div className="signup-field">
            <label htmlFor="password" className="signup-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="signup-input"
              required ="required"
            />
            {errors.password && <p className="signup-error">{errors.password}</p>}
          </div>

          <div className="signup-field">
            <label htmlFor="confirmPassword" className="signup-label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="signup-input"
            />
            {errors.confirmPassword && <p className="signup-error">{errors.confirmPassword}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="signup-button"
          >
            {isSubmitting ? 'Submitting...' : 'Sign Up'}
          </button>
          <p className="signup-footer">
            <span>Already have an account?</span> <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}