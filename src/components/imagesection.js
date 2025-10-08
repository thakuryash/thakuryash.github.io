import React from "react";
import styled from "styled-components";
import resume from "../img/yash_thakur.jpeg";
import resumePDF from "../resume/Yash Thakur.pdf";
import { InnerLayout } from "../styles/layouts";
import Primarybutton from "./primarybutton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Imagesection() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <InnerLayout>
      <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
        <ImagesectionStyled>
          <motion.div className="left-content" variants={imageVariants}>
            <img src={resume} alt="Yash Thakur" />
          </motion.div>
          <motion.div className="right-content" variants={textVariants}>
            <div className="sub-title">
              <h4>
                I am <span>Yash Thakur</span>
              </h4>
            </div>
            <p className="paragraph">
              With over seven years of experience in software development, I have honed my skills in both front-end and
              back-end work. My primary focus has been on developing web applications that are user-friendly, visually
              attractive, and perform optimally on all devices. I make it a priority to keep updated with the latest
              industry trends and technologies to continually enhance my skillset. I am deeply passionate about
              acquiring and applying new concepts into my work while continuing to excel as a full-stack developer.
              <br />
              <br />
              My journey began in Toronto, where I was introduced to the fascinating worlds of cars and technology.
              After transitioning from automotive technician to software developer, I completed my Computer Programming
              diploma at Humber College and have since worked with industry leaders like Cox Automotive, Trader
              Corporation, and currently Greentronic Ltd., where I engineer cloud applications and develop innovative
              solutions using React, C#/.NET, and Azure.
              <br />
              <br />
              Beyond coding, I'm passionate about golf and boxing, which bring balance and drive to my life. Thank you
              for taking the time to learn about my journey!
            </p>
            <div className="about-info">
              <div className="info-title">
                <p>Full Name</p>
                <p>Nationality</p>
                <p>Language</p>
                <p>Location</p>
              </div>
              <div className="info">
                <p>Yash Thakur</p>
                <p>Canada</p>
                <p>English, Hindi</p>
                <p>Guelph, ON</p>
              </div>
            </div>

            <Primarybutton title="Download CV" link={resumePDF} />
          </motion.div>
        </ImagesectionStyled>
      </motion.div>
    </InnerLayout>
  );
}
const ImagesectionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 3rem;

  .left-content {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      max-width: 400px;
      object-fit: cover;
      border-radius: 20px;
      box-shadow: var(--shadow-xl);
      transition: var(--transition-smooth);
      border: 4px solid var(--primary-color);

      &:hover {
        transform: scale(1.05) rotate(2deg);
        box-shadow: 0 25px 50px rgba(102, 126, 234, 0.3);
      }
    }
  }
  .right-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
      font-size: 1.6rem;
      color: var(--white-color);
      margin-bottom: 1.5rem;

      span {
        font-size: 2.5rem;
        background: var(--primary-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 700;
      }
    }

    .paragraph {
      padding: 0.7rem 0;
      font-size: 1.05rem;
      line-height: 1.8;
      color: var(--font-light-color);
      text-transform: none;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 400;
          font-size: 1rem;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
          font-size: 1rem;
        }
      }
    }
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    gap: 2rem;

    .left-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        max-width: 350px;
      }
    }

    .right-content {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      padding: 0 1rem;

      h4 {
        font-size: 1.4rem;

        span {
          font-size: 2rem;
        }
      }

      .paragraph {
        font-size: 1rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .left-content {
      img {
        max-width: 280px;
      }
    }

    .right-content {
      h4 {
        font-size: 1.2rem;

        span {
          font-size: 1.8rem;
        }
      }

      .about-info {
        flex-direction: column;
        gap: 1rem;

        .info-title {
          padding-right: 0;
        }
      }
    }
  }
`;
export default Imagesection;
