import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'
import lightModeLogo from '../../images/bhavani-logo-light.png'
import darkModeLogo from '../../images/bhavani-logo-dark.png'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
// import { Close, CloseRounded } from '@mui/icons-material';
import styled, { useTheme } from 'styled-components';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import sunIcon from '@mui/icons-material/Light'
// import LightModeIcon from '@mui/icons-material/LightMode';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;

`;

const Navbar = ({setDarkMode,darkMode}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
                    <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <img src={!darkMode?darkModeLogo:lightModeLogo} />
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          {/* <NavLink href='#education'>Education</NavLink> */}
          <>
          {darkMode? <SocialMediaIcon target="display"><LightModeIcon onClick={() => setDarkMode(false)} /></SocialMediaIcon> : <DarkModeIcon onClick={() => setDarkMode(true)} />}
        </>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>

        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href={Bio.github} target='_blank' onClick={() => {
              setIsOpen(!isOpen)
            }}>GitHub</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.resule_down} target="_blank">Download CV</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
          </Nav>
      )
}

export default Navbar