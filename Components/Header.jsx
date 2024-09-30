import React from 'react'
import styled from 'styled-components';

const Header = () => {
   
 
   
   return (
      <HeaderDiv>
         <button >Resume</button>
         <button >About</button>
         <button >Certificate</button>
         <button >Projects</button>
         <button >Contact</button>
         

      </HeaderDiv>
   )
}

export default Header


// const HeaderDiv = styled.header`

// display: flex;
// flex-wrap: wrap;
// align-items: center;
// row-gap: 20px;




// button{
//    background-color:#24272C;
//    width: 148px;
//    height: 60px;
//    border-radius: 24px;
//    border: none;
//    box-shadow:-5px -5px 10px rgba(255, 255, 255, 0.25), 5px 5px 10px rgba(0,0 ,0,25) ;
//    font-size:22px;
//    margin-left:50px;
//    text-decoration: none;
//    color: white;
   
      
      
   
// }

// `;


// const HeaderDiv = styled.div`
// width:80vmax;
// min-height:10vh;
// display: flex;
// align-items: center;
// flex-wrap: wrap;
// justify-content: space-between;
// row-gap: 10px;
// button{
   
//    text-align: center;
//    height: 60px;
//    width: 148px;
//    border: none;
//    border-radius: 24px;
//    box-shadow:-5px -5px 10px rgba(255, 255, 255, 0.25), 5px 5px 10px rgba(0,0 ,0,25) ;
//    color:white;
//    background-color:#24272C;
//    font-size:22px;
// }

// `;


const HeaderDiv = styled.div`
width:80vmax;
min-height:10vh;
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-between;
row-gap: 10vmin;
button{
   
   text-align: center;
   height: 60px;
   width: 148px;
   border: none;
   border-radius: 24px;
   box-shadow:-5px -5px 10px rgba(255, 255, 255, 0.25), 5px 5px 10px rgba(0,0 ,0,25) ;
   color:white;
   background-color:red;
   font-size:22px;
}

`;