import styled from "styled-components";

export const  CardContainer =  styled.div `
border: 1px solid  ${(props) =>props.theme['primary']};
width:  10rem;
border-radius:  6px; 
display: flex; 
justify-content: center; 
align-items: center; 
flex-direction:  column;
gap: 1rem; 

p {
  padding-bottom: 0.5rem;
}
img {
  width:  4rem;
  height: 4rem;
}

&:hover  {
  background: ${(props) => props.theme['primary']}; 
  transition: background-color 0.5s; 
}
`