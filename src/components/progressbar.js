import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Progressbar({ title, width, text }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <ProgressbarStyled ref={ref}>
      <motion.h6
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h6>
      <div className="progress-bar">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {text}
        </motion.p>
        <div className="progress">
          <motion.span
            style={{ width: inView ? width : "0%" }}
            initial={{ width: "0%" }}
            animate={inView ? { width: width } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          />
        </div>
      </div>
    </ProgressbarStyled>
  );
}
const ProgressbarStyled = styled.div`
  margin-bottom: 2rem;

  h6 {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--white-color);
    margin-bottom: 0.8rem;
  }

  .progress-bar {
    display: flex;
    align-items: center;

    p {
      padding-right: 1rem;
      font-weight: 600;
      min-width: 50px;
      color: var(--primary-color);
    }

    .progress {
      position: relative;
      width: 100%;
      height: 0.8rem;
      background-color: var(--background-light-color-2);
      border-radius: 50px;
      overflow: hidden;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

      span {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        background: var(--primary-gradient);
        border-radius: 50px;
        box-shadow: 0 2px 8px rgba(102, 126, 234, 0.4);
        position: relative;

        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%);
          animation: shimmer 2s infinite;
        }
      }
    }
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;
export default Progressbar;
