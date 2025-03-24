import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  IndicatorText, QuestionButtonContainer, QuestionImgContainer, SidebarContainer, ToggleButton } from "../styles/SidebarStyles";
import { toggleSidebar } from "../Redux/SidebarSlice"; // Import the correct action
import SidebarButton from "../assets/ToggleButton.png";
import AttendedIcon from "../assets/Attended.png";
import NotAttendedIcon from "../assets/Not Attended.png";
import YetToAttendIcon from "../assets/Yet to Attend.png";

import TseepLogo from '../assets/tseep PNG 1.png'

const Sidebar = ({ questionData, currentIndex, setCurrentIndex }) => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    
    <SidebarContainer $isOpen={isOpen}>
      <ToggleButton onClick={() => dispatch(toggleSidebar())}>
        <img src={SidebarButton} alt="sidebar" />
      </ToggleButton>
      
      <QuestionImgContainer>
      <div>
        <img src={TseepLogo} alt="Tseep Academy" />
      </div>
      <QuestionButtonContainer>
        {questionData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              background: index === currentIndex ? "#F7FFEB" : "#FFFF",
            }}
          >
            {index + 1}
          </button>
        ))}
      </QuestionButtonContainer>
      </QuestionImgContainer>

         <div style={{width: "200px", display:"flex", flexDirection:"column", gap: "5px", marginLeft: "50px"}}>
         <div style={{display: "flex", alignItems: "center", width: "200px", gap: "10px"}}>
         <img style={{width: "9px", height: "9px"}} src={AttendedIcon} alt="Attended" />
         <IndicatorText>Attended</IndicatorText>
         </div>
        
          <div  style={{display: "flex", alignItems: "center", width: "200px", gap: "10px"}}>
            <img style={{width: "9px", height: "9px"}} src={NotAttendedIcon} alt="Not Attended" />
          <IndicatorText>Not Attended</IndicatorText>
          </div>
        
          <div style={{display: "flex", alignItems: "center", width: "200px", gap: "10px"}}>
          <img style={{width: "9px", height: "9px"}} src={YetToAttendIcon} alt="Yet to Attend" />
          <IndicatorText>Yet to Attend</IndicatorText>
          </div>
         </div>
    </SidebarContainer>
  
 
  );
};

export default Sidebar;
