import styled from "styled-components"

export const AdmContainer = styled.div`
height: 100vh; 

div {
  margin: 0 auto;
  text-align:  center; 
  width:  40rem; 
  display:  flex; 
  justify-content:  center; 
  align-items:  center; 
  gap: 2rem; 
  flex-direction:  column; 
  padding-top: 4rem;

  button {
    padding: 1rem; 
    width:  8rem;  
    border: none;     
    border-radius:  6px; 
    background:  ${(props) =>props.theme['primary']};
    color:  ${(props) =>props.theme['white']}

  }
}
`