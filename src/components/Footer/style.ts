import styled from "styled-components"

export const FooterContainer =  styled.div`
  display:  flex; 
  justify-content:  space-between;
  padding: 2rem 10rem; 
  background-color: ${(props) => props.theme['secundary']};
  color: ${(props) => props.theme['primary']}
`
export const Logo =  styled.div`
  display: flex; 
  gap:  1rem; 
  img {
    width:  10rem; 
  }
`