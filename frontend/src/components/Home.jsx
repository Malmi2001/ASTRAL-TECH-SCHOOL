// Import React and necessary components
import React from "react";
import {
  Navbar,
  Logo,
  NavigationLinks,
  NavLink,
  ButtonsContainer,
  LoginButton,
  GuestButton,
  HomeContainer,
  SchoolInfo,
  SchoolImage,
  Title,
  AdminRegisterLink,
} from "../styles/styles";

import bg1 from "../assets/bg1.jpg"; // Background image
import bg2 from "../assets/bg2.jpg"; // logo image
import { useNavigate } from "react-router-dom"; // React Router for navigation



const Home = () => {
  const navigate = useNavigate(); // Get navigation function
   // Generate a paragraph of random text

  // Handle login button click
  const handleLoginClick = () => {
    navigate("/choose-user"); // Navigate to '/choose-user' route
  };

  return (
    <>
      // Navigation Bar
      <Navbar>
        <Logo src={bg2} alt="Logo" />
        <NavigationLinks>
          <NavLink href="#">About Us</NavLink>
          <NavLink href="#">Products</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </NavigationLinks>
        <ButtonsContainer>
          <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
          <GuestButton onClick={handleLoginClick}>Guest Mode</GuestButton>
        </ButtonsContainer>
      </Navbar>
      // Main Content
      <HomeContainer>
        <SchoolInfo>
          <Title>ASTRAL TECH SCHOOL MANAGEMENT SYSTEM </Title>
        
          <AdminRegisterLink to="/Admin/Register">
            Admin Register
          </AdminRegisterLink>
        </SchoolInfo>
        <SchoolImage src={bg1} alt="students" />
      </HomeContainer>
    </>
  );
};

export default Home;
