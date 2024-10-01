import React, { useRef } from 'react';
import Header from './Header';
// import mainlogo from "../Images/MainLogo.jpg"
import styled from 'styled-components';
// import boylogo from "../Images/Boy.jpeg"


const HomePage = () => {

   const CertificateSection = useRef();
   const ResumeSection = useRef();
   const AboutSection = useRef();
   const ProjectsSection = useRef();
   const ContactSection = useRef();

   return (
      <>
         <HomePageDiv>
            <Main>
               <Header refs={{ CertificateSection, ResumeSection, AboutSection, ProjectsSection, ContactSection }} />
               <MainImg>
               
                     {/* <img src={mainlogo} alt="mainlogo" /> */}
            
               </MainImg>
               <Div>
                  <Hey>Hey</Hey>
                  <Name>I’m Nitin Jadav</Name>
                  <Profession>Computer<span>Engineer</span></Profession>
                  <Introduction>
                     Creative web developer skilled in HTML, CSS, and JavaScript,
                     dedicated to building engaging and user-friendly web  applications.
                     Eager to apply my problem-solving abilities and collaborative
                     mindset in an entry-level role.
                  </Introduction>

                  <ButtonDiv>
                     <ButtonLearnMore>Learn More</ButtonLearnMore>
                     <ButtonContactMe>Contact Me</ButtonContactMe>
                  </ButtonDiv>
               </Div>


               <AboutSections ref={AboutSection}>
                  <AboutImageDiv>
                     {/* <img src={boylogo} alt="boylogo" /> */}
                  </AboutImageDiv>
                  <AboutMeIntroDuction>
                     <h1>About me </h1>
                     <p>
                        Hello! I’m Nitin Jadav, a passionate computer science graduate
                        from Silver Oak University, Ahmedabad. Throughout my B.Tech journey,
                        I developed a strong foundation in programming, algorithms, and software development.
                        I am particularly interested in areas like web development, and artificial intelligence.

                     </p>
                  </AboutMeIntroDuction>
               </AboutSections>
               <CertificateSections ref={CertificateSection}>certificaate page</CertificateSections>
               <ResumeSections ref={ResumeSection}>Resume Page</ResumeSections>
               <ProjectsSections ref={ProjectsSection}>Projects Page</ProjectsSections>
               <ContactSections ref={ContactSection}>Contact Page</ContactSections>
            </Main>
         </HomePageDiv>
      </>
   )
}

export default HomePage



const HomePageDiv = styled.section`
margin-top: 10vmin;
width: 90vmax;
background-color: #232732;
box-shadow:8px 8px 15px rgba(255, 255, 255, 0.25), -8px -8px 15px rgba(0,0 ,0,25);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 24px;

`;

const Main = styled.div`
width:80vmax;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 40px;
padding: 15vmin 40vmax ;

`;
// const MainImg = styled.div`

// height: 35vh;
// width: 35vmax;

   
//    img{
//    width: 100%;
//    border-radius: 100%;
//   box-shadow:8px 8px 15px rgba(255, 255, 255, 0.25), -8px -8px 15px rgba(0,0 ,0,25);
// }



// `;


const MainImg = styled.div`
  height: 40vmax;
  width: 40vmax; 
  border-radius: 100%; 
  background-image: url('/Images/MainLogo.jpg'); // Adjusted path
  background-size: cover; 
  background-position: center; 
  box-shadow: 8px 8px 15px rgba(255, 255, 255, 0.25), -8px -8px 15px rgba(0, 0, 0, 0.25);
`;






const Hey = styled.p`
margin: 0;
padding: 0;
font-size:38px;
font-weight: 400;
`;

const Name = styled.h1`
width: 80vmax;
display: flex;
justify-content:center;
align-items: center;
margin: 0;
padding: 0;
font-size:8vmin;
font-weight: bold;
white-space: nowrap;
`;

const Profession = styled.div`
width: 80vmax;
display: flex;
justify-content:center;
font-size: 6vmin;
font-weight: 500;
display: flex;
gap:10px;
white-space: nowrap;
span{
   color: #D32D20;
   display:inline-flex;
  
}

span::after{
   content:"";
   width: 1vmin;
   height: 9vmin;
   display: inline-block;
   background-color:#D32D20;
   margin-left:5px;
}
`;

const Introduction = styled.p`
width: 80vmax;
display: flex;
justify-content:center;
align-items: center;
margin: 0;
padding: 0;
font-size: 21px;
font-weight: lighter;
text-align: center;



`;
const ButtonDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 20px;
min-height:10vh;
width:80vmax;
white-space: nowrap;

`;

const ButtonLearnMore = styled.button`
   background-color:#24272C;
   width: 148px;
   height: 60px;
   border-radius: 24px;
   border: none;
   box-shadow:-5px -5px 10px rgba(255, 255, 255, 0.25), 5px 5px 10px rgba(0,0 ,0,25) ;
   font-size:22px;
   color: inherit;
`;

const ButtonContactMe = styled.button`
 background-color:#24272C;
   width: 148px;
   height: 60px;
   border-radius: 24px;
   border: none;
   box-shadow:-5px -5px 10px rgba(255, 255, 255, 0.25), 5px 5px 10px rgba(0,0 ,0,25) ;
   font-size:22px;
   color: inherit;
`;

const Div = styled.div`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;

`;



const CertificateSections = styled.section`
width: 90vmax;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-size: 90px;
color: white;

`;
const ResumeSections = styled.section`
width: 90vmax;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
font-size: 90px;
color: white;

`;
const AboutSections = styled.section`
display: flex;
flex-direction: row;
align-items: center;
gap:5vmax;
justify-content: space-between;
font-size: 90px;
color: white;



@media screen and (max-width:700px){
   flex-direction: column;
   text-align: center;
   
}
`;

// const AboutImageDiv = styled.div`
// height: 35vh;
// width: 35vmax;

// img{
//    border-radius: 20px;
//    width: 100%;
//    box-shadow:8px 8px 15px rgba(255, 255, 255, 0.25), -8px -8px 15px rgba(0,0 ,0,25);
   

// }
// `;

const AboutImageDiv = styled.div`
  height: 40vmax;
  width: 40vmax; 
  border-radius: 20px; 
  background-image: url('/Images/Boy.jpeg'); // Adjusted path
  background-size: cover; 
  background-position: center; 
  box-shadow: 8px 8px 15px rgba(255, 255, 255, 0.25), -8px -8px 15px rgba(0, 0, 0, 0.25);
`;

const AboutMeIntroDuction = styled.div`
width: 40vmax;
display: flex;
flex-direction: column;
justify-content: center;
gap: 30px;
text-align: left;
p{
   margin: 0;
   padding: 0;
   font-size:21px;
   font-weight: lighter;
  
  
}
h1{
    margin: 0;
   padding: 0;
   font-size: 34px;
   font-weight: 500;
   white-space: nowrap;
   
}


@media screen and (max-width:700px){
   h1{
      text-align: center;
   }
   p{
       text-align: center;
   }
 
  
   
}


`;

const ProjectsSections = styled.section`
width: 90vmax;
display: flex;
justify-content: center;
align-items: center;
font-size: 90px;

color: white;
`;
const ContactSections = styled.section`
width: 90vmax;
display: flex;
justify-content: center;
align-items: center;
font-size: 90px;
color: white;

`;























// const HomePageDiv = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// margin: 2vmax;
// background-color: #232732;
// box-shadow:8px 8px 15px rgba(255, 255, 255, 0.25), -8px -8px 15px rgba(0,0 ,0,25);
// border-radius: 24px;
// border: none;
// color: white;
// `;

// const Main = styled.div`
// display: flex;
// justify-content: center;
// align-items: center;
// flex-direction: column;
// padding: 70px 100px;



// `;

// const MainImg = styled.div`
// height: 474px;
// width: 474px;
// background-image: linear-gradient(rgba(255, 255, 255, 0.2),
//  rgba(255, 255, 255, 0.2)),  url("../Images/MainLogo.jpg");
// background-size: cover;
// box-shadow:-5px -5px 10px rgba(255, 255, 255, 0.25), 5px 5px 10px rgba(255, 255, 255, 0.25) ;
// border-radius: 100%;
// background-position: center;
// margin-top: 50px;
// `;