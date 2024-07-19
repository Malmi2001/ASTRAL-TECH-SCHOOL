import React, { useState } from 'react';

//import { Link } from 'react-router-dom'; 
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent } from 'react-icons/bs';
import { SidebarContainer,SidebarHeader,SidebarNav,SidebarNavItem,StyledLink,SidebarIcon,Logo,ToggleButton,ToggleIcon, } from '../../styles/SidebarStyles';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
   
  return (
    <SidebarContainer style={{ width: isOpen ? '250px' : '80px' }}>
    <SidebarHeader>
      <Logo src="../assets/bg2.jpg" alt="Logo" />
    </SidebarHeader>
    <SidebarNav>
      <SidebarNavItem>
        <SidebarIcon><BsGraphUp /></SidebarIcon>
        <StyledLink to="/student/dashboard">Dashboard</StyledLink>
      </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsPeople /></SidebarIcon>
          <StyledLink to="/student/classes">Classes</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsPeople /></SidebarIcon>
          <StyledLink to="/student/students">Students</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsPerson /></SidebarIcon>
          <StyledLink to="/student/teachers">Teachers</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsFileText /></SidebarIcon>
          <StyledLink to="/student/assignments">Assignments</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsBook /></SidebarIcon>
          <StyledLink to="/student/exams">Exams</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsGraphDown /></SidebarIcon>
          <StyledLink to="/student/performance">Performance</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsCalendar /></SidebarIcon>
          <StyledLink to="/student/attendance">Attendance</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsBook /></SidebarIcon>
          <StyledLink to="/student/library">Library</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsChatDots /></SidebarIcon>
          <StyledLink to="/student/announcement">Announcement</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsCalendarEvent /></SidebarIcon>
          <StyledLink to="/student/events">Events & Calendar</StyledLink>
        </SidebarNavItem>
        <SidebarNavItem>
          <SidebarIcon><BsGear /></SidebarIcon>
          <StyledLink to="/student/settingsprofile">Settings & Profile</StyledLink>
        </SidebarNavItem>
        </SidebarNav>
      <ToggleButton onClick={toggleSidebar}>
        <ToggleIcon isOpen={isOpen}>▲</ToggleIcon>
      </ToggleButton>
    </SidebarContainer>
  );
};

export default Sidebar;