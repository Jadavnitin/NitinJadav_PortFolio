import React, { useState } from 'react';
import styled from 'styled-components';
import Menu from "../public/Images/Menu.png";
import Cross from "../public/Images/cross.svg";

const Header = ({ refs}) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const scrollHandler = (section) => {
      window.scrollTo({ top: section.current.offsetTop, behavior: "smooth" });
      setIsMenuOpen(false);
   };

   return (
      <HeaderDiv>

         <HeaderMenu onClick={() => setIsMenuOpen(true)}>

            <Span><img src={Menu} alt="Menu" /></Span>
         </HeaderMenu>


         <CrossMenu isOpen={isMenuOpen}>
            <CrossLabel onClick={() => setIsMenuOpen(false)}>
               <img src={Cross} alt="Close" />
            </CrossLabel>
            <NavButtons>
               <Button onClick={() => scrollHandler(refs.ResumeSection)}>Resume</Button>
               <Button onClick={() => scrollHandler(refs.AboutSection)}>About</Button>
               <Button onClick={() => scrollHandler(refs.CertificateSection)}>Certificate</Button>
               <Button onClick={() => scrollHandler(refs.ProjectsSection)}>Projects</Button>
               <Button onClick={() => scrollHandler(refs.ContactSection)}>Contact</Button>
            </NavButtons>
         </CrossMenu>


         <DesktopButtons>
            <Button onClick={() => scrollHandler(refs.ResumeSection)}>Resume</Button>
            <Button onClick={() => scrollHandler(refs.AboutSection)}>About</Button>
            <Button onClick={() => scrollHandler(refs.CertificateSection)}>Certificate</Button>
            <Button onClick={() => scrollHandler(refs.ProjectsSection)}>Projects</Button>
            <Button onClick={() => scrollHandler(refs.ContactSection)}>Contact</Button>
         </DesktopButtons>
      </HeaderDiv>
   );
};

export default Header;

const HeaderDiv = styled.div`
   background-color: #232732;
   width:80vmax; 
   min-height: 10vh;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 2rem;
   position: relative;
   

`;
const Span = styled.div`
   height:36px;
   width:36px;
   background-color: #7733FF;
   border-radius: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const HeaderMenu = styled.div`

   cursor: pointer;
   width:80vmax;
   height:10vh;
   display: flex;
   justify-content: flex-end;
   align-items: center;


   @media screen and (min-width: 971px) {
      display: none;
   }
`;

const CrossMenu = styled(({ isOpen, ...props }) => <div {...props} />)`
   display: ${(props) => (props.isOpen ? 'flex' : 'none')};
   flex-direction: column;
   align-items: flex-start;
   position: fixed;
   top:40px;
   right:40px;
   width: 80vw;
   height: 100vh;
   background-color: #232732;
   padding: 2rem;
   z-index: 10;
   box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.25), 5px 5px 10px rgba(0, 0, 0, 0.25);
   transition: right 5s ease-out;
  

   @media screen and (min-width: 971px) {
      display: none; 
     
     
   }
`;

const CrossLabel = styled.div`
   cursor: pointer;
   margin-bottom: 2rem;
`;

const NavButtons = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
`;

const DesktopButtons = styled.div`
   display: none;

   @media screen and (min-width: 971px) {
      display: flex; 
      justify-content:space-between; 
      align-items: center;
      width: 100%;
   }
`;

const Button = styled.button`
   width: 148px; 
   height: 60px; 
   border: none;
   border-radius: 24px;
   box-shadow: -5px -5px 10px rgba(255, 255, 255, 0.25), 5px 5px 10px rgba(0, 0, 0, 0.25);
   color: white;
   background-color: #24272C;
   font-size: 22px;
   cursor: pointer;
   margin: 0.5rem; 

   @media screen and (max-width: 970px) {
      width: 100%; 
      margin-bottom: 1rem; 
   }
`;
