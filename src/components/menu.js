import React from "react";
import styled from "styled-components";
import Github from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { motion } from "framer-motion";

const Menu = props => {
  const isValidExternalLink = link => Boolean(link) && link !== "#";

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <MenuItemStyled as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
      {props.menuItem.map(item => {
        return (
          <motion.div
            className="grid-item"
            key={item.id}
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="portfolio-content">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} loading="lazy" />
                <ul>
                  <motion.li whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.95 }}>
                    <a href={item.link1} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.title} source`}>
                      <Github />
                    </a>
                  </motion.li>
                  {isValidExternalLink(item.link2) && (
                    <motion.li whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.95 }}>
                      <a href={item.link2} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.title} live`}>
                        <LanguageIcon />
                      </a>
                    </motion.li>
                  )}
                </ul>
                <div className="badges">
                  {item.isFeatured && <span className="badge featured">Featured</span>}
                  {item.status && <span className="badge status">{item.status}</span>}
                </div>
              </div>
              <h6>{item.title}</h6>
              <p>{item.text}</p>
              {item.techStack?.length > 0 && (
                <div className="tech-stack">
                  {item.techStack.map(tech => (
                    <span key={`${item.id}-${tech}`}>{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        );
      })}
    </MenuItemStyled>
  );
};

const MenuItemStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  .grid-item {
    .portfolio-content {
      display: block;
      position: relative;
      background: var(--card-bg);
      border-radius: 15px;
      overflow: hidden;
      box-shadow: var(--shadow-md);
      transition: var(--transition-smooth);
      backdrop-filter: blur(10px);
      border: 1px solid var(--border-color);

      &:hover {
        box-shadow: var(--card-hover-shadow);
        transform: translateY(-5px);
      }

      h6 {
        font-size: 1.4rem;
        text-transform: capitalize;
        margin: 1rem 1.5rem 0.5rem;
        color: var(--white-color);
        font-weight: 700;
        transition: var(--transition-smooth);

        &:hover {
          background: var(--primary-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      }

      p {
        padding: 0 1.5rem 1.5rem;
        color: var(--font-light-color);
        line-height: 1.6;
        font-size: 0.95rem;
      }

      .tech-stack {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        padding: 0 1.5rem 1.4rem;

        span {
          font-size: 0.78rem;
          text-transform: uppercase;
          letter-spacing: 0.02rem;
          border: 1px solid var(--border-color);
          border-radius: 999px;
          padding: 0.28rem 0.65rem;
          background: var(--background-light-color-2);
          color: var(--white-color);
        }
      }

      img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        object-position: center;
        transition: var(--transition-smooth);
      }
      ul {
        visibility: hidden;
        position: absolute;
        transform: translateY(-100px);
        transition: all 0.4s ease-in-out;
        left: 50%;
        top: 40%;
        opacity: 0;
      }
      .portfolio-image {
        position: relative;
        overflow: hidden;

        .badges {
          position: absolute;
          top: 0.8rem;
          left: 0.8rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          z-index: 11;
        }

        .badge {
          font-size: 0.72rem;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.03rem;
          border-radius: 999px;
          padding: 0.3rem 0.6rem;
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(8px);
        }

        .featured {
          background: linear-gradient(135deg, #ff7a18 0%, #af002d 70%);
        }

        .status {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%);
        }

        img {
          transition: transform 0.5s ease;
        }

        &:hover {
          img {
            transform: scale(1.1);
          }
        }

        ul {
          visibility: hidden;
          position: absolute;
          transform: translate(-50%, -50%);
          transition: all 0.4s ease-in-out;
          left: 50%;
          top: 50%;
          opacity: 0;
          z-index: 10;
        }
      }

      .portfolio-image:hover {
        ul {
          visibility: visible;
          opacity: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;

          li {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            border: 2px solid var(--glass-border);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            border-radius: 50%;
            height: 3.5rem;
            width: 3.5rem;
            transition: var(--transition-smooth);
            cursor: pointer;

            &:hover {
              background: var(--primary-gradient);
              border-color: var(--primary-color);
              transform: scale(1.1);
            }

            a {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }

          li:hover {
            svg {
              color: var(--white-color);
            }
          }

          svg {
            font-size: 1.5rem;
            color: var(--white-color);
          }
        }

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 100%;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%);
          opacity: 0.9;
          transition: all 0.4s ease-in-out;
        }
      }
    }
  }
  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export default Menu;
