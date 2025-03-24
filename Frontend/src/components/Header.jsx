import React, { useState } from 'react';
import tseepLogo from '../assets/tseep PNG 1.png';
import { Container, Logo, ProfileContainer,LogoutContainer, LogMainContainer } from '../styles/HeaderStyles';
import { Link, useNavigate } from 'react-router';
import ProfileIcon from '../assets/Profile.png';
import { useDispatch } from 'react-redux';
import { clearUser } from '../Redux/AuthSlice';
import LogoutIcon from '../assets/logout_icon.png'

function Header({profile}) {

  // Toggle Logout button
  const [showLogout, setShowLogout] = useState(false); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Logout function
  const handleLogout = () => {
    dispatch(clearUser()); // Remove authentication token
    navigate("/login"); // Redirect to Login page
  };

  return (
    <Container>
      {/* Company Logo (Always Visible) */}
      <Logo>
        <Link to={'/'}><img src={tseepLogo} alt="TSEEP Academy" /></Link>
      </Logo>

      {/* Profile Section (Hidden on Login, Signup, and Home) */}
      {profile ? "" :
        <ProfileContainer>
          <img 
            src={ProfileIcon} 
            alt="User Profile" 
            onClick={() => setShowLogout(!showLogout)} 
            style={{ cursor: "pointer" }} 
          />

          {/* Logout Button (Only Shows When Profile Icon is Clicked) */}
          <LogMainContainer>
          {showLogout && 
          <LogoutContainer>
            <img src={LogoutIcon} alt="Logout" />
            <button onClick={handleLogout}>Logout</button>
          </LogoutContainer>
          }
          </LogMainContainer>
        </ProfileContainer>
      }
    </Container>
  );
}

export default Header;
