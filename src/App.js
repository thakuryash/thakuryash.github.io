import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Homepage from "./pages/homepage";
import Aboutpage from "./pages/aboutpage";
import Resumepage from "./pages/resumepage";
import Portfoliopage from "./pages/portfoliopage";
import Blogpage from "./pages/blogpage";
import ContactPage from "./pages/contactpage";
import { Route, Switch as Switching, useLocation } from "react-router";
import NoMatch from "./pages/nomatchpage";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Switch from "@mui/material/Switch";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("themeData")));
  const [checked, setChecked] = useState(JSON.parse(localStorage.getItem("themeStatus")));
  const [sidebarStatus, setSideBarStatus] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sidebarRef = useRef(null);
  const mainContentRef = useRef(null);

  //Context menu is now enabled for inspect element

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside sidebar to close on mobile
  useEffect(() => {
    const handleClickOutside = event => {
      if (window.innerWidth <= 1200 && !sidebarStatus) {
        if (
          sidebarRef.current &&
          !sidebarRef.current.contains(event.target) &&
          !event.target.closest(".hamburger-menu-icon-section")
        ) {
          setSideBarStatus(true);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarStatus]);

  // theme changer
  function getLocatThemeData() {
    // setter
    localStorage.setItem("themeStatus", JSON.stringify(checked));
    // getter
    const themeItem = JSON.parse(localStorage.getItem("themeData"));
    document.documentElement.className = themeItem;
  }
  useEffect(() => {
    // setter
    localStorage.setItem("themeData", JSON.stringify(theme));
    getLocatThemeData();
  }, [theme, checked]);

  useEffect(() => {
    const themeItem = JSON.parse(localStorage.getItem("themeData"));
    if (!themeItem) {
      localStorage.setItem("themeData", JSON.stringify("dark-theme"));
      localStorage.setItem("themeStatus", JSON.stringify("false"));
    }
    getLocatThemeData();

    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const sideBarOpenClose = () => (sidebarStatus ? setSideBarStatus(false) : setSideBarStatus(true));

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const themeToggler = () => {
    const themeItem = JSON.parse(localStorage.getItem("themeData"));
    if (themeItem === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  if (isLoading) {
    return (
      <LoadingScreen>
        <motion.div
          className="loader"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="spinner"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Yash Thakur
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
            Full Stack Developer
          </motion.p>
        </motion.div>
      </LoadingScreen>
    );
  }

  return (
    <div className="App">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />

      <div ref={sidebarRef}>
        <Sidebar sidebarStatus={sidebarStatus} />
      </div>

      <motion.div className="hamburger-menu-icon-section" onClick={sideBarOpenClose} whileTap={{ scale: 0.9 }}>
        {sidebarStatus ? <MenuIcon /> : <CloseIcon />}
      </motion.div>

      {/* Mobile Overlay */}
      {!sidebarStatus && (
        <motion.div
          className="sidebar-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSideBarStatus(true)}
        />
      )}

      <div className="theme">
        <div className="light-dark-mode">
          <div className="light-content">
            <Brightness4Icon />
          </div>
          <div className="night-content">
            <Switch
              checked={checked}
              onClick={themeToggler}
              inputProps={{ "aria-label": "controlled" }}
              size="medium"
            />
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <KeyboardArrowUpIcon />
        </motion.button>
      )}

      <MainContentStyled ref={mainContentRef}>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <AnimatePresence mode="wait">
          <Switching location={location} key={location.pathname}>
            <Route path="/" exact>
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Homepage />
              </motion.div>
            </Route>
            <Route path="/about" exact>
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Aboutpage />
              </motion.div>
            </Route>
            <Route path="/resume" exact>
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Resumepage />
              </motion.div>
            </Route>
            <Route path="/portfolios" exact>
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Portfoliopage />
              </motion.div>
            </Route>
            <Route path="/blogs" exact>
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <Blogpage />
              </motion.div>
            </Route>
            <Route path="/contact" exact>
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <ContactPage />
              </motion.div>
            </Route>
            <Route path="*">
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                <NoMatch />
              </motion.div>
            </Route>
          </Switching>
        </AnimatePresence>
      </MainContentStyled>
    </div>
  );
}
const LoadingScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--background-dark-color);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  .loader {
    text-align: center;

    .spinner {
      width: 60px;
      height: 60px;
      border: 4px solid var(--border-color);
      border-top-color: var(--primary-color);
      border-radius: 50%;
      margin: 0 auto 2rem;
    }

    h2 {
      font-size: 2rem;
      color: var(--white-color);
      margin-bottom: 0.5rem;
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    p {
      color: var(--font-light-color);
      font-size: 1.1rem;
    }
  }
`;

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  transition: margin-left 0.3s ease;

  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    z-index: -10000;
    justify-content: space-evenly;

    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
      opacity: 0.3;
    }
  }

  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;
export default App;
