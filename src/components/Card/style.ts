import styled from "styled-components";

export const CardSliderContent =  styled.div`

width: 17rem; 
border-radius:  6px; 
color: black;
box-shadow:  6px 6px 15px #555;
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden; 
margin-bottom:  2rem; 

img {
  height: 10rem;
  width: 100%; 
  transition:  .4s all ease-in-out;
}

&:hover img {
  transform: scale(1.4)
}

div{
  padding: 2rem; 
}
`;