import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import avatar from "../img/yash_thakur.jpeg";
import Tilty from "react-tilty";
import { motion } from "framer-motion";

function Navigation() {
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <NavigationStyled>
      <motion.div
        className="avatar"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Tilty style={{ transformStyle: "preserve-3d" }}>
          <img src={avatar} style={{ transform: "translateZ(50px)" }} alt="Yash Thakur"></img>
        </Tilty>
      </motion.div>

      <ul className="nav-items">
        {["Home", "About", "Resume", "Portfolio", "Blogs", "Contacts"].map((item, index) => (
          <motion.li
            key={item}
            className="nav-item"
            custom={index}
            variants={navVariants}
            initial="hidden"
            animate="visible"
          >
            <NavLink
              to={
                item === "Home"
                  ? "/"
                  : `/${
                      item.toLowerCase() === "contacts"
                        ? "contact"
                        : item.toLowerCase() === "portfolio"
                        ? "portfolios"
                        : item.toLowerCase()
                    }`
              }
              activeClassName="active-class"
              exact
            >
              {item}
            </NavLink>
          </motion.li>
        ))}
      </ul>
      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p>© {new Date().getFullYear()} Yash Thakur</p>
      </motion.footer>
    </NavigationStyled>
  );
}
const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  border-right: 1px solid var(--border-color);
  position: relative;

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;
    img {
      width: 70%;
      object-fit: cover;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }
  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color);
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        text-transform: uppercase;
        transition: all 0.4s ease-in-out;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--primary-color);
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0%;
          height: 50%;
          background-color: var(--primary-color);
          transition: var(--cubic-bezier-transition);
          z-index: 3;
          opacity: 0.21;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 2rem 0;
      font-size: 1rem;
      display: block;
      text-align: center;
    }
  }
`;
export default Navigation;
