import { createBrowserRouter } from "react-router-dom";
import Signup from "../components/signup/Signup";
import LoginPage from "../components/login/LoginPage";
import Dashboard from "../components/dashboard/Dashboard";
import LandingPage from "../components/landingpage/LandingPage";
import LearnMore from "../components/learnmore/learnMore";

const apiEndpoints = {
    login: '/api/auth/login',
};
const handleLoginSuccess = (userData) => {
    console.log('Logged in user:', userData);
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },

    {
        path: "/signup",
        element: <Signup />
    },

    {
        path: "/login",
        element: <LoginPage apiEndpoints={apiEndpoints} onLoginSuccess={handleLoginSuccess} />
    },

    {
        path: "/dashboard",
        element: <Dashboard />
    },

    {
        path: "/learnmore",
        element: <LearnMore />
    }
]);

export default router;