
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
  gap: 1rem; 
  list-style: none;
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
span {
  color: ${(props) =>props.theme['tertiary']};
  font-weight: bold; 
}
`

export const SocialMidea =  styled.div`
display: flex;
gap:  1rem;
margin-right: 2rem;

svg {
  font-weight:  bold;
}
`