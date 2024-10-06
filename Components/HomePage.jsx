import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import styled from 'styled-components';
import githublinkimg from "/Images/Vector.png"
import LeftBtn from "../public/Images/LeftBtn.png"
import RightBtn from "../public/Images/RightBtn.png"
import Rectangle from "../public/Images/ReactLogo.jpg"


const HomePage = () => {

   const CertificateSection = useRef();
   const ResumeSection = useRef();
   const AboutSection = useRef();
   const ProjectsSection = useRef();
   const ContactSection = useRef();
   
   
   const[displayedText, setDisplayedText] = useState('');
   const [wordIndex, setWordIndex] = useState(0);
   const [isTyping, setIsTyping] = useState(true);
   const [index, setIndex] = useState(0); 

   const words = ["Engineer", "Web Devloper"];

   useEffect(() => {
      const interval = setInterval(() => {
         if (isTyping) {
            if (index < words[wordIndex].length) {
               setDisplayedText((prev) => prev + words[wordIndex][index]);
               setIndex((prev) => prev + 1); 
            } else {
               setIsTyping(false);
               clearInterval(interval);
               setTimeout(() => {
                  setIsTyping(true);
                  setDisplayedText('');
                  setWordIndex((prev) => (prev + 1) % words.length);
                  setIndex(0); 
               }, 1000);
            }
         } else {
            if (displayedText.length > 0) {
               setDisplayedText((prev) => prev.slice(0, -1));
            } else {
               setIsTyping(true); 
               setIndex(0); 
            }
         }
      }, 150);

      return () => clearInterval(interval);
   }, [wordIndex, isTyping, displayedText, index]); 





   

   return (
      <>
         <HomePageDiv>
            <Main>
               <Header refs={{ CertificateSection, ResumeSection, AboutSection, ProjectsSection, ContactSection }} />
               <MainImg></MainImg>
               <Div>
                  <Hey>Hey</Hey>
                  <Name>I’m Nitin Jadav</Name>
                  <Profession>I’m <span>{displayedText}</span></Profession>
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


               <ProjectsSections ref={ProjectsSection}>
                  <ProjectTiltle>Projects</ProjectTiltle>
                  <HoriZontalLine></HoriZontalLine>
                  <ProjectButtonDiv>
                     <button>HTML</button>
                     <button>CSS</button>
                     <button>JavaScript</button>
                  </ProjectButtonDiv>
                  <ProjectMainCard>
                     <ProjectAllImage>
                        <Projectimages1></Projectimages1>
                        <Projectimages2></Projectimages2>
                        <Projectimages3></Projectimages3>
                     </ProjectAllImage>
                     <Projectcard>
                        <CardImg></CardImg>
                        <CardTitle>Content Analyzer</CardTitle>
                        <ProjectText> A robust tool designed for content creators, bloggers, and writers</ProjectText>
                        <img src={githublinkimg} alt="githublinkimg" />
                     </Projectcard>
                  </ProjectMainCard>
               </ProjectsSections>

               <SkillSection ref={ResumeSection}>
                  <SkillTitle>Skills</SkillTitle>
                  <HoriZontalLine></HoriZontalLine>

                  <SkillMainDiv>
                     <LangBtnDiv>
                        <button>Languages</button>
                     </LangBtnDiv>

                     <LanguageImgDiv>
                        <img src={Rectangle} alt="Rectangle" />
                     </LanguageImgDiv>
                     <SideBtn>
                        <LeftSide><img src={LeftBtn} alt="LeftBtn" /></LeftSide>
                        <RightSide><img src={RightBtn} alt="RightBtn" /></RightSide>
                     </SideBtn>
                  </SkillMainDiv>
               </SkillSection>

               <CertificateSections ref={CertificateSection}>
                  <CertificateTiltle>Certifications</CertificateTiltle>
                  <HoriZontalLine></HoriZontalLine>
                  <CertificationAllImage>
                     <CertificationImage1></CertificationImage1>
                     <CertificationImage2></CertificationImage2>
                     <CertificationImage3></CertificationImage3>
                  </CertificationAllImage>
               </CertificateSections>




               <ContactSections ref={ContactSection}>
                  <ContactTiltle>Contact Me</ContactTiltle>
                  <HoriZontalLine></HoriZontalLine>
                  <ContactFormDiv>
                     <ContactImg></ContactImg>
                     <ContactForm>
                        <input type="text" placeholder='Name*' />
                        <input type="email" placeholder='Email Id*' />
                        <input type="text" placeholder='Message*' className='message-me' />
                        <SendBtnDiv>
                           <button>Send</button>
                        </SendBtnDiv>
                     </ContactForm>
                  </ContactFormDiv>
               </ContactSections>


               <ExperinceSection ref={ResumeSection}>
                  <Experiencetitle>Experience</Experiencetitle>
                  <HoriZontalLine></HoriZontalLine>


                  <ExperinceAndEducationButton>
                     <ExperinceBtn>Experience</ExperinceBtn>
                     <EducationBtn>Education</EducationBtn>
                  </ExperinceAndEducationButton>

                  <ExperinceAllCard>
                     <ExperinceCard1>
                        <Card1>
                           <CardH1>Technical Content Writer</CardH1>
                           <CardP>GeeksforGeeks | 11-2023 – 02-2024</CardP>
                           <CardSpan>As a content creator, I've authored and published
                              numerous articles on technical topics like Power BI, Python,
                              Data Science, and Machine Learning. My focus is on simplifying
                              complex concepts, ensuring accessibility for all audiences.
                              Each article is carefully crafted to translate intricate jargon
                              into easily understandable terms, fostering a deep understanding.
                              I stay current with the latest developments in these fields, delivering
                              up-to-date content that
                              empowers readers to navigate and excel in the ever-evolving landscape of technology.</CardSpan>
                        </Card1>
                     </ExperinceCard1>
                     <ExperinceCard2>
                        <Card2>
                           <CardH1>Technical Content Writer</CardH1>
                           <CardP>GeeksforGeeks | 11-2023 – 02-2024</CardP>
                           <CardSpan>As a content creator, I've authored and published numerous
                              articles on technical topics like Power BI, Python, Data Science,
                              and Machine Learning. My focus is on simplifying complex concepts,
                              ensuring accessibility for all audiences. Each article is carefully
                              crafted to translate intricate jargon into easily understandable terms,
                              fostering a deep understanding. I stay current with the latest developments
                              in these fields, delivering up-to-date content that empowers
                              readers to navigate and excel in the ever-evolving landscape of technology.</CardSpan>
                        </Card2>
                     </ExperinceCard2>
                  </ExperinceAllCard>
               </ExperinceSection>


            </Main>
         </HomePageDiv>
      </>
   )
}

export default HomePage




const ExperinceSection = styled.section`
width: 80vmax;
display: flex;
flex-direction: column;
justify-content: center;
color: white;
font-size: 34px;
font-weight: 500;
gap: 20px;
margin-top: 150px;
`;

const ExperinceAndEducationButton = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 50px;
margin-block: 50px;
`;

const ExperinceBtn = styled.button`
    background-color: #7733FF;
    width: 253px;
    height: 60px;
    border-radius: 24px;
    border: none;
    font-size: 20px;
    font-weight:600;

`;
const EducationBtn = styled.button`
    background-color:#24272C;
    width: 253px;
    height: 60px;
    border-radius: 24px;
    border: none;
    font-size: 20px;
    font-weight:600;
    box-shadow:-5px -5px 10px rgba(255, 255, 255, 0.25), 5px 5px 10px rgba(0,0 ,0,25) ;
`;

const ExperinceAllCard = styled.div`
width:80vmax;
height:80vmax;
display: flex;
justify-content: center;


`;

const ExperinceCard1 = styled.div`
width:60vmax;
height:37vmax;
margin-top: 100px;
display: flex;

`;

const ExperinceCard2 = styled.div`
width:60vmax;
height:37vmax;
align-self: flex-end;

`;

const Card1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align:left;
width:30vmax;
height:37vmax;
flex-direction: column;
text-align: left;
gap:0.5vmax;
border-radius: 24px;
box-shadow:-5px -5px 10px rgba(255, 255, 255, 0.25), 5px 5px 10px rgba(0,0 ,0,25) ;
padding:4px 6px;

`;


const CardH1 = styled.h1`
font-size:21px;
font-weight: 600; 
white-space: nowrap;
margin: 0;
padding: 0;

`;
const CardP = styled.p`
font-size:17px;
font-weight:500;
white-space: nowrap;
margin: 0;
padding: 0;



`;
const CardSpan = styled.p`
font-size:13px;
font-weight:500;
margin: 0;
padding: 0;



`;


const Card2 = styled.div`
width:30vmax;
height:37vmax;
display: flex;
flex-direction: column;
align-items: center;
text-align:left;
padding:4px 6px;
gap:0.5vmax;
border-radius: 24px;
box-shadow:-5px -5px 10px rgba(255, 255, 255, 0.25), 5px 5px 10px rgba(0,0 ,0,25) ;

`;






const Experiencetitle = styled.p`
margin: 0;
padding: 0;
align-self: flex-end;
`;

const SideBtn = styled.div`
  width:100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
`;

const SkillMainDiv = styled.div`
  position: relative;
  width: 80vmax;
  height: 74vmax;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
 
`;

const RightSide = styled.button`
  display: flex;
  justify-content: center;
  margin-right: 10px;
  align-items: center;
  padding: 4px 6px;
  width: 59px;
  height: 40px;
  border-radius: 11px;
  background-color: #232732;
  box-shadow: -6px -6px 12px rgba(255, 255, 255, 0.25), 6px 6px 12px rgba(0, 0, 0, 0.25);
`;

const LeftSide = styled.button`
  display: flex;
  margin-left:10px;
  justify-content: center;
  align-items: center;
  padding: 4px 6px;
  width: 59px;
  height: 40px;
  border-radius: 11px;
  background-color: #232732;
  
`;

const LangBtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: -50px;

  button {
    background-color: #7733FF;
    width: 253px;
    height: 60px;
    border-radius: 24px;
    border: none;
    font-size: 20px;
    font-weight:600;
  }
`;

const LanguageImgDiv = styled.div`
  height:64vmax;
  width:64vmax;
  display: flex;
  justify-content: center;
  align-items: center;
 
  
  
  img{
  height:30vmax;
  width:30vmax;
  border-radius:100%;
  box-shadow: -6px -6px 12px rgba(255, 255, 255, 0.25), 6px 6px 12px rgba(0, 0, 0, 0.25);
  }
 
  
`;

const SkillSection = styled.section`
  width: 80vmax;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 34px;
  font-weight: 500;
  gap: 20px;
`;

const SkillTitle = styled.p`
margin: 0;
padding: 0;
align-self: flex-end;
`;


const ContactSections = styled.section`
width: 80vmax;
display: flex;
flex-direction: column;
justify-content: center;
color: white;
font-size: 34px;
font-weight: 500;
gap: 20px;

`;

const ContactTiltle = styled.p`
margin: 0;
padding: 0;
`;

const ContactFormDiv = styled.div`
width: 100%;
height: 50vmax;
display: flex;
justify-content:space-between;
align-items: center;
margin-top:50px;

  @media screen and (max-width:700px) , (max-height:700px){
   margin-top: 120px;
}
`;


const ContactImg = styled.div`

  width: 40%;
  height:70%;
  background-image: url('/Images/ContactBoy.jpg');
  background-size: cover; 
  background-position: center; 
  box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.25), 8px 8px 15px rgba(0, 0, 0, 0.25);
  border-radius: 24px; 
  
  
  @media screen and (max-width:600px) , (max-height:600px){
   display: none;
   
}
`;
const ContactForm = styled.div`
height:50vmax;
width:50%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap:20px;


.message-me{
   padding: 30px 0px 200px 20px;
   margin-bottom: 20px;
   
   }

input{
height:5vmax;
width:100%;
background-color:white;
border-radius:12px;
font-size: 22px;
font-weight: 500;
padding: 20px;
background-color: #232732;
outline: none;
box-shadow: 1px 1px 2px rgba(44, 50, 64, 0.3) ,-1px -1px 2px  rgba(26,27,38, 0.5)  , 
inset -4px 4px 8px  rgba(26,27,38, 0.2)  ,inset 4px -4px 8px  rgba(26,27,38, 0.2),
inset -4px -4px 8px  rgba(44,50,64, 0.9) ,inset 4px 4px 10px  rgba(26,27,38, 0.9)
   ;
   
   ::placeholder{
      color: #83858C;
     text-align: center;
      
      
   }

}



@media screen and  (max-width:600px) ,(max-height:600px){
   width:100%;
}

`;

const SendBtnDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;


button{
   background-color:#24272C;
   width: 148px;
   height: 60px;
   border-radius: 24px;
   border: none;
   box-shadow:-5px -5px 10px rgba(255, 255, 255, 0.25), 5px 5px 10px rgba(0,0 ,0,25) ;
   font-size:22px;
   color: inherit;
}
`;

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

const MainImg = styled.div`
  height: 40vmax;
  width: 40vmax; 
  border-radius: 100%; 
  background-image: url('/Images/MainLogo.jpg');
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

const AboutImageDiv = styled.div`
  height: 40vmax;
  width: 40vmax; 
  border-radius: 20px; 
 background-image: url('/Images/Boy.jpeg');
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
width: 80vmax;
display: flex;
flex-direction: column;
justify-content: center;
color: white;
font-size: 34px;
font-weight: 500;
gap: 20px;

`;

const ProjectMainCard = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 80px;
gap: 20px;


@media screen and (max-width:760px){
   flex-direction: column;
   gap: 50px;
}

`;
const Projectcard = styled.div`
max-width: 465px;
height:543px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.25), 8px 8px 10px rgba(0, 0, 0, 0.25);
border-radius: 10px;
gap: 20px;

img{
   margin-bottom: 1rem;
}

`;
const CardImg = styled.div`
width: 90%;
height:60%;
margin:20px 10px 0px 10px;
background-image: url('/Images/Image_1.jpg');
box-shadow: 4px 4px 7.5px rgba(255, 255, 255, 0.25), -4px -4px 7.5px rgba(0, 0, 0, 0.25);
background-size: cover; 
background-position: center; 
border-radius: 16px;

 
`;

const CardTitle = styled.p`
padding: 0;
margin: 0;
font-size: 26px;
font-weight: 600;

`;
const ProjectText = styled.p`
padding: 0;
margin: 0;
font-size: 17px;
font-weight: lighter;
text-align: center;

`;

const ProjectTiltle = styled.p`
padding: 0;
margin: 0;
`;
const HoriZontalLine = styled.div`
width:100%;
background: linear-gradient(to right, #7733FF 70%, #F7A21E 30%); /* Two colors split */
padding: 5px;
border-radius: 24px;

`;
const ProjectButtonDiv = styled.div`
width: 100%;
margin-top: 40px;
display: flex;
align-items: center;
justify-content: space-between;

button{
   width: 15vmax;
   height: 3vh;
   box-sizing: content-box;
   display: flex;   
   padding: 4vmin 6vmin;
   align-items: center;
   justify-content: center;
   border-radius: 24px;
   border: none;
   box-shadow:-5px -5px 10px rgba(255, 255, 255, 0.25), 5px 5px 10px rgba(0,0 ,0,25) ;
   font-size:22px;
   color: inherit;
   background-color:#24272C;
}

`;

const ProjectAllImage = styled.div`
  width: 238px;
  height: 688px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 760px) {
    flex-direction: row;
    gap: 50px;
    width:100%;
    height: auto;
  }
`;

const Projectimages1 = styled.div`
  width: 80%;
  height: auto;
  aspect-ratio: 1; 
  background-image: url('/Images/Image_1.jpg');
  background-size: cover; 
  background-position: center; 
  box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.25), 8px 8px 15px rgba(0, 0, 0, 0.25);
  border-radius: 100%; 
`;

const Projectimages2 = styled.div`
  width: 80%;
  height: auto;
  aspect-ratio: 1; 
  background-image: url('/Images/Image_2.jpg');
  background-size: cover; 
  background-position: center; 
  box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.25), 8px 8px 15px rgba(0, 0, 0, 0.25);
  border-radius: 100%; 
`;

const Projectimages3 = styled.div`
  width: 80%;
  height: auto;
  aspect-ratio: 1; 
  background-image: url('/Images/Image_3.jpg');
  background-size: cover; 
  background-position: center; 
  box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.25), 8px 8px 15px rgba(0, 0, 0, 0.25);
  border-radius: 100%; 
`;

const CertificateSections = styled.section`
width: 80vmax;
display: flex;
flex-direction: column;
justify-content: center;
color: white;
font-size: 34px;
font-weight: 500;
gap: 20px;


`;
const CertificationAllImage = styled.div`
width:80vmax;
height:35vmax;
margin-top:50px;
padding-top: 20px;
display: flex;
align-items: center;
justify-content:space-between;

`;

const CertificationImage1 = styled.div`
width:15vmax;
height:20vmax;
background-image: url('/Images/FrontEnd_libraries_certificate.png');
background-size:cover; 
background-position: center; 
border-radius:1vmax;



`;
const CertificationImage2 = styled.div`
width:30vmax;
height:35vmax;
background-image: url('/Images/responive_certificate.png');
background-size:cover; 
background-position:center; 
border-radius:1vmax;


`;
const CertificationImage3 = styled.div`
width:15vmax;
height:20vmax;
background-image: url('/Images/FrontEnd_libraries_certificate.png');
background-size:cover; 
background-position:center; 
border-radius:1vmax;

`;
const CertificateTiltle = styled.p`
margin: 0;
padding: 0;
`;