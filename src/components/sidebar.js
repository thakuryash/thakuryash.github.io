import React from "react";
import styled from "styled-components";
import Navigation from "./navigation";

const Sidebar = function (props) {
  return (
    <SidebarStyled className={props.sidebarStatus ? "sidebarhide" : ""}>
      <Navigation onLinkClick={props.onLinkClick} />
    </SidebarStyled>
  );
};

const SidebarStyled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 100%;
  z-index: 20;
  background-color: var(--sidebar-dark-color);
  transition: all 0.4s ease-in-out;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;

  @media screen and (max-width: 1200px) {
    box-shadow: 5px 0 20px rgba(0, 0, 0, 0.3);
  }
`;
export default Sidebar;
