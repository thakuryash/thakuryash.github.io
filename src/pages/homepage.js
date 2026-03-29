import React from "react";
import styled from "styled-components";
import ParticlesContainer from "../components/particles";
import FacebookIcon from "@mui/icons-material/Facebook";
import GithubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Homepage() {
  // Create Ref element.
  const element = useRef(null);

  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: ["Yash Thakur", "Full Stack Developer", "Founder @ CarWorthAI", "React Specialist", "Cloud Engineer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <HomepageStyled>
      <div className="p-particles-js">
        <ParticlesContainer />
      </div>
      <motion.div className="typography" variants={containerVariants} initial="hidden" animate="visible">
        <motion.h1 className="waviy" variants={itemVariants}>
          Hello I'm <span ref={element}></span>
        </motion.h1>
        <motion.p className="subtitle" variants={itemVariants}>
          Full Stack Developer | 9+ Years Experience | React & Cloud Specialist
        </motion.p>
        <motion.div className="project-spotlight" variants={itemVariants}>
          <RocketLaunchIcon />
          <p>
            New launch: <a href="https://carworthai.ca/" target="_blank" rel="noopener noreferrer">carworthai.ca</a> -
            AI powered vehicle valuation platform.
          </p>
        </motion.div>
        <motion.div className="cta-group" variants={itemVariants}>
          <Link to="/portfolios">Explore Projects</Link>
          <a href="https://carworthai.ca/" target="_blank" rel="noopener noreferrer" className="secondary">
            Visit CarWorthAI
          </a>
        </motion.div>
        <motion.div className="icons" variants={itemVariants}>
          <motion.a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon i-facebook"
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <FacebookIcon />
          </motion.a>
          <motion.a
            href="https://github.com/thakuryash"
            target="_blank"
            rel="noopener noreferrer"
            className="icon i-github"
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/yashthakur/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon i-linkedin"
            variants={iconVariants}
            whileHover="hover"
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
        </motion.div>
      </motion.div>
    </HomepageStyled>
  );
}
const HomepageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 90%;
    max-width: 1000px;

    .waviy {
      position: relative;
      -webkit-box-reflect: below -10px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
      margin-bottom: 2rem;
      font-size: clamp(2rem, 5vw, 3rem);
    }

    .subtitle {
      font-size: clamp(1rem, 2.5vw, 1.5rem);
      color: var(--font-light-color);
      margin-bottom: 2rem;
      font-weight: 300;
      opacity: 0.9;
    }

    .project-spotlight {
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
      border: 1px solid var(--border-color);
      border-radius: 999px;
      padding: 0.55rem 1rem;
      margin-bottom: 1.1rem;
      background: rgba(102, 126, 234, 0.12);
      max-width: 100%;

      svg {
        font-size: 1.2rem;
        color: var(--primary-color-light);
      }

      p {
        margin: 0;
        font-size: 0.95rem;
        color: var(--white-color);
      }

      a {
        color: var(--primary-color-light);
        font-weight: 700;
      }
    }

    .cta-group {
      display: flex;
      justify-content: center;
      gap: 0.8rem;
      margin-bottom: 1rem;

      a {
        border-radius: 10px;
        padding: 0.65rem 1.1rem;
        font-weight: 700;
        border: 1px solid transparent;
        background: var(--primary-gradient);
        color: #fff;
        transition: var(--transition-smooth);

        &:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
        }
      }

      .secondary {
        background: transparent;
        border-color: var(--primary-color);
        color: var(--white-color);
      }
    }

    .icons {
      display: flex;
      justify-content: center;
      margin: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: inline-block;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        margin: 0.5rem;
        color: var(--dark-color);

        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &::not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem 0.6rem 0.2rem 0.6rem;
        }
      }
      .i-linkedin {
        &:hover {
          border: 2px solid #0072b1;
          color: #0072b1;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .typography {
      width: 95%;

      .waviy {
        font-size: clamp(1.5rem, 4vw, 2.5rem);
        margin-bottom: 1.5rem;
      }

      .subtitle {
        font-size: clamp(0.9rem, 2vw, 1.2rem);
        margin-bottom: 1rem;
      }

      .project-spotlight {
        border-radius: 14px;
        padding: 0.65rem 0.8rem;

        p {
          font-size: 0.85rem;
        }
      }

      .cta-group {
        flex-wrap: wrap;
        margin-bottom: 0.8rem;

        a {
          width: 100%;
          max-width: 240px;
        }
      }

      .icons {
        .icon {
          margin: 0.3rem;

          svg {
            margin: 0.3rem 0.4rem 0.1rem 0.4rem;
            font-size: 1.3rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .typography {
      .icons {
        flex-wrap: wrap;
        gap: 0.5rem;
      }
    }
  }
`;
export default Homepage;
