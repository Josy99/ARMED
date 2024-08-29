import styled from "styled-components";

export const LoginContainer = styled.div`
width:  100%;
height: 100vh; 
display:  flex; 
justify-content:  center; 
align-items: center; 
`

export const Form = styled.form`
width:  100%;
max-width:  30rem; 
padding: 2rem;
margin:  0 auto; 
display:  flex;
gap: 2rem; 
flex-direction:  column; 
background-color:  ${(props) =>props.theme['primary']};
border-radius:  6px;

input {
  border:  none; 
  padding:1rem; 
  border-radius: 6px;
}
button {
  border:  none; 
  border-radius: 6px;
  padding:1rem; 
}
`