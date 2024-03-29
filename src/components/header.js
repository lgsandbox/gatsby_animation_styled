import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Container, HeaderImageContainer } from '../components/styles/Container.styled'
import { StyledHeader, Nav, Logo } from '../components/styles/Header.styled'
import { StaticImage } from "gatsby-plugin-image"
import { Button, SecondButton } from './styles/Button.styled'
import { Flex } from '../components/styles/Flex.styled'
import Modal from './modal.js'
import anime from 'animejs/lib/anime.es.js';
import { Fade } from '../components/styles/Fade.styled'
import Inspire from "../images/inspire.svg"




const Header = ({ siteTitle }) => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  };

// can move to animation component and make into container

  useEffect(() => {
    let first = setTimeout(() => {
      anime({
        targets: '#fadeRight',
        translateX: {
          value: 50,
          direction: 'normal',
        
        },

        easing: 'easeInOutSine',
        opacity: 1,
        duration: 1900

      });
    }, 400);

    let second = setTimeout(() => {
      anime({
        targets: '#navButton',
        translateX: {
          value: -50,
          direction: 'normal',
        
        },
        easing: 'easeInOutSine',
        opacity: 1,
        duration: 1900

      });
    }, 400);

    let third = setTimeout(() => {
      anime({
        targets: '#headerImage',
        translateX: {
          value: -25,
          direction: 'normal',
        
        },
        easing: 'easeInOutSine',
        opacity: 1,
        duration: 1900

      });
    }, 400);

    let fourth = setTimeout(() => {
      anime({
        targets: '#logo',
        translateX: {
          value: 50,
          direction: 'normal',
        
        },
        easing: 'easeInOutSine',
        opacity: 1,
        duration: 1500

      });
    }, 200);

    setTimeout(() => {
      anime({
        targets: '#theme',
        backgroundColor: 'black',
      });
    }, 2000);


    return () => clearTimeout(first, second, third, fourth)
  },[]);
  
  return(
    <StyledHeader id="theme">
      <header>
        
        <Container>
          <Nav >
          <Logo id="logo">
          <StaticImage 
            src="../images/bigsvgtest.svg"
            alt="logo image" 
    

            />
            </Logo>
          <Link to="/quote">
          <Button id="navButton">
            Get Quote  → </Button> </Link>

      

          </Nav>
          <Flex>
            <Fade id="fadeRight">

              <h1>Web Solutions To Help Your Business Grow</h1>
              <p>
              {siteTitle} of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              Lorem ipsum.
              </p>
              <SecondButton onClick={
              openModal}> Contact For Free Consultation</SecondButton>
            
            </Fade>
            <HeaderImageContainer id="headerImage">
            <img 
            src={Inspire}
            alt="inspire design" 
            id="headerImage"  /> 
            </HeaderImageContainer>
          </Flex>
        </Container>
      </header>
          <Modal showModal={showModal} setShowModal={setShowModal}> </Modal>
    </StyledHeader>

    
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
