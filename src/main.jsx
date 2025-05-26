import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './components/login/LoginPage.css';
import './components/signup/Signup.css';
import './components/dashboard/Dashboard.css';
import './components/landingpage/LandingPage.css';
import './components/learnmore/LearnMore.css';
import './components/footer/Footer.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
