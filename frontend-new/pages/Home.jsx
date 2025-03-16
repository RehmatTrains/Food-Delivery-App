// src/pages/Home.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import AppNavbar from '../components/Navbar';
import AppFooter from '../components/Footer';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

const Home = () => {
  return (
    <div>
      <Container className="p-4">
        <h2>Login / Signup</h2>
        <LoginForm />
        <SignupForm />
      </Container>
      <AppFooter />
    </div>
  );
};

export default Home;
