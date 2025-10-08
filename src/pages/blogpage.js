import React from "react";
import styled from "styled-components";
import blogs from "../data/blogs";
import Title from "../components/title";
import { MainLayout, InnerLayout } from "../styles/layouts";
import { motion } from "framer-motion";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

function Blogpage() {
  const youtubeShorts = [
    {
      id: 1,
      title: "Golf Short #1",
      url: "https://youtube.com/shorts/4C7vfOK5lQo?si=RZQ2rLJ0NpGV0FCF",
      thumbnail: "https://i.ytimg.com/vi/4C7vfOK5lQo/hqdefault.jpg",
    },
    {
      id: 2,
      title: "Golf Short #2",
      url: "https://youtube.com/shorts/h3iQIxpKTX8?si=gH7wEVVgjFWSJXCU",
      thumbnail: "https://i.ytimg.com/vi/h3iQIxpKTX8/hqdefault.jpg",
    },
  ];

  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Content & Videos"} span={"Content"} />

        {/* YouTube Channel Section */}
        <motion.div
          className="youtube-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="channel-banner">
            <YouTubeIcon className="youtube-icon" />
            <div className="channel-info">
              <h2>Check out my YouTube Channel</h2>
              <p>Golf content, tips, and more!</p>
            </div>
            <motion.a
              href="https://www.youtube.com/@thakurgolf"
              target="_blank"
              rel="noopener noreferrer"
              className="subscribe-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.a>
          </div>
        </motion.div>

        {/* YouTube Shorts */}
        <InnerLayout>
          <h3 className="section-title">Latest Shorts</h3>
          <div className="shorts-grid">
            {youtubeShorts.map((short, index) => (
              <motion.a
                key={short.id}
                href={short.url}
                target="_blank"
                rel="noopener noreferrer"
                className="short-item"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="short-thumbnail">
                  <img src={short.thumbnail} alt={short.title} />
                  <div className="play-overlay">
                    <PlayCircleOutlineIcon className="play-icon" />
                  </div>
                </div>
                <p className="short-title">{short.title}</p>
              </motion.a>
            ))}
          </div>
        </InnerLayout>

        {/* Blog Posts */}
        <InnerLayout className="blog">
          <h3 className="section-title">Blog Posts</h3>
          {blogs.map(blog => {
            return (
              <div key={blog.id} className="blog-item">
                <div className="image">
                  <img src={blog.image} alt="" />
                </div>
                <div className="title">
                  <a href={blog.link}>{blog.title}</a>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
}
const BlogsStyled = styled.div`
  .section-title {
    font-size: 2rem;
    color: var(--white-color);
    margin-bottom: 2rem;
    font-weight: 600;
  }

  .youtube-section {
    margin-bottom: 4rem;

    .channel-banner {
      background: var(--primary-gradient);
      padding: 3rem;
      border-radius: 20px;
      display: flex;
      align-items: center;
      gap: 2rem;
      box-shadow: var(--shadow-xl);

      .youtube-icon {
        font-size: 4rem;
        color: white;
      }

      .channel-info {
        flex: 1;

        h2 {
          color: white;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        p {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.2rem;
        }
      }

      .subscribe-btn {
        background: white;
        color: var(--primary-color);
        padding: 1rem 3rem;
        border-radius: 50px;
        font-size: 1.2rem;
        font-weight: 700;
        text-decoration: none;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        transition: var(--transition-smooth);

        &:hover {
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }

  .shorts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;

    .short-item {
      text-decoration: none;
      cursor: pointer;

      .short-thumbnail {
        position: relative;
        border-radius: 15px;
        overflow: hidden;
        aspect-ratio: 9/16;
        background: var(--background-dark-gray);

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .play-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: var(--transition-smooth);

          .play-icon {
            font-size: 4rem;
            color: white;
          }
        }

        &:hover {
          img {
            transform: scale(1.1);
          }

          .play-overlay {
            opacity: 1;
          }
        }
      }

      .short-title {
        margin-top: 1rem;
        color: var(--white-color);
        font-size: 1.1rem;
        font-weight: 600;
        text-align: center;
      }
    }
  }

  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;

    .blog-item {
      background-color: var(--background-dark-gray);
      padding: 2rem 1rem;
      border-radius: 15px;
      transition: var(--transition-smooth);

      &:hover {
        transform: translateY(-5px);
        box-shadow: var(--card-hover-shadow);
      }
    }

    .image {
      width: 100%;
      height: 90%;
      overflow: hidden;
      border-radius: 10px;

      img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;

        &:hover {
          cursor: pointer;
          transform: rotate(3deg) scale(1.1);
        }
      }
    }

    .title {
      a {
        font-size: 1rem;
        padding: 0.5rem 0;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        z-index: 1;

        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .youtube-section .channel-banner {
      flex-direction: column;
      text-align: center;
      padding: 2rem;

      .channel-info h2 {
        font-size: 1.5rem;
      }
    }

    .shorts-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .blog {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media screen and (max-width: 480px) {
    .shorts-grid {
      grid-template-columns: 1fr;
    }
  }
`;
export default Blogpage;
