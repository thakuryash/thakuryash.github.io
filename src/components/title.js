import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Title({ title, span }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <TitleStyled ref={ref}>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {title}
        <motion.b
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span>{span}</span>
        </motion.b>
      </motion.h2>
    </TitleStyled>
  );
}
const TitleStyled = styled.div`
  position: relative;
  margin-bottom: 3rem;

  h2 {
    color: var(--white-color);
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 1rem;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 7rem;
      height: 0.4rem;
      background: var(--background-light-color-2);
      border-radius: 15px;
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 3.5rem;
      height: 0.4rem;
      background: var(--primary-gradient);
      border-radius: 15px;
      animation: pulse 2s ease-in-out infinite;
    }

    span {
      font-weight: 900;
      color: var(--title-shadow-text-color);
      font-size: 5rem;
      position: absolute;
      left: 0;
      top: -10%;
      z-index: -1;
      letter-spacing: 2px;
    }
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
  @media screen and (max-width: 800px) {
    span {
      font-size: 4rem;
    }
  }
  @media screen and (max-width: 700px) {
    span {
      font-size: 3.5rem !important;
    }
  }
  @media screen and (max-width: 500px) {
    span {
      font-size: 3rem !important;
    }
  }
`;
export default Title;
