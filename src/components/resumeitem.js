import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Resumeitem({ year, title, subTitle, text, location }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div ref={ref} variants={itemVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
      <ResumeitemStyled>
        <div className="left-content">
          <p>{year}</p>
        </div>
        <div className="right-content">
          <h5>{title}</h5>
          <h6>{subTitle}</h6>
          {location && <p className="location">{location}</p>}
          <p>{text}</p>
        </div>
      </ResumeitemStyled>
    </motion.div>
  );
}
const ResumeitemStyled = styled.div`
  display: flex;
  &:not(:last-child) {
    padding-bottom: 3rem;
  }

  .left-content {
    width: 25%;
    padding-left: 20px;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: 5px;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      border: 2px solid var(--primary-color);
      background-color: var(--background-dark-color);
      transition: var(--transition-smooth);
      box-shadow: 0 0 0 4px var(--background-light-color-2);
    }

    p {
      display: inline-block;
      font-weight: 600;
      color: var(--font-light-color);
      font-size: 0.95rem;
    }
  }

  .right-content {
    padding-left: 5rem;
    position: relative;
    width: 75%;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 15px;
      height: 2px;
      width: 3rem;
      background: var(--primary-gradient);
    }

    h5 {
      color: var(--white-color);
      font-size: 1.6rem;
      padding-bottom: 0.4rem;
      font-weight: 700;
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    h6 {
      padding-bottom: 0.4rem;
      font-size: 1.2rem;
      color: var(--font-light-color);
      font-weight: 600;
    }

    .location {
      font-size: 0.9rem;
      color: var(--secondary-color);
      font-style: italic;
      margin-bottom: 0.6rem;
    }

    p {
      line-height: 1.8;
      color: var(--font-light-color);
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    .left-content {
      width: 100%;
      padding-bottom: 1rem;
    }

    .right-content {
      width: 100%;
      padding-left: 2rem;
    }
  }
`;
export default Resumeitem;
