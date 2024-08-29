import styled from "styled-components";

export const MarcaoAgenda =  styled.div`
margin:  0 auto;
margin-top:  2rem; 
max-width: 55rem;
width: 100%;
text-align: center; 
display:  flex;
flex-direction:  column; 
justify-content:  center; 
align-items:  center; 

button  {
  width: 12rem;
  padding:  1rem;
  border: none; 
  background-color:  ${(props) =>props.theme['primary']};
  color:  ${(props) =>props.theme['white']};
  border-radius: 6px; 
  margin-top:  2rem; 
  display:  flex; 
  justify-content: center; 

  gap: 0.5rem;
}
`