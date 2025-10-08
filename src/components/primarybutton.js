import React from "react";
import Styled from "styled-components";
function Primarybutton({ title, link }) {
  return (
    <div>
      <PrimarybuttonStyled href={link} download="Yash_Thakur_Resume.pdf" target="_blank" rel="noopener noreferrer">
        {title}
      </PrimarybuttonStyled>
    </div>
  );
}
const PrimarybuttonStyled = Styled.a`
    background: var(--primary-gradient);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    border-radius: 50px;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    text-decoration: none;
    
    &::after{
        content: '';
        width: 0%;
        position: absolute;
        height: .2rem;
        background: var(--white-color);
        transition: var(--cubic-bezier-transition);
        left: 0;
        right: 0;
        bottom: 0.3rem;
        margin: auto;
    }
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
    }
    
    &:hover::after{
         width: 80%;
    }
    
    &:active {
        transform: translateY(-1px);
    }
`;
export default Primarybutton;
