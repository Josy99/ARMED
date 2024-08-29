
import styled from "styled-components";

export const  HeaderContainer =  styled.div`
display: flex; 
justify-content: space-between;
align-items: center; 
background-color: ${(props) =>props.theme['primary']};
color: ${(props) =>props.theme['white']};
`
export const Logo =  styled.img`
height: 4rem;
width: 10rem;
background-color: ${(props) =>props.theme['white']};
`

export const  NavLink =  styled.div`
ul{
  display: flex;
  gap: 2rem; 
  list-style: none;
  margin-right:  2rem; 
}
a {
color: ${(props) =>props.theme['white']};
text-decoration:  none;
}
button{
  border: none; 
  background:  transparent;
  color: ${(props) =>props.theme['white']};
}
`