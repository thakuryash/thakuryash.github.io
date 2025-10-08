import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root{
    --background-color:#000;
    --cubic-bezier-transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); 
    --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-bounce: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    --shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0,0,0,0.1);
    --shadow-xl: 0 20px 25px -5px rgba(0,0,0,0.2);
    --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --gradient-accent: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
.light-theme{
    --primary-color:#667eea;
    --primary-color-light: #8b9bff;
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --accent-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --secondary-color:#6c757d;
    --background-dark-color:#f8f9fa;
    --background-dark-gray:#e9ecef;
    --border-color:#dee2e6;
    --dark-color:#121212;
    --background-light-color:#ffffff;
    --background-light-color-2:rgba(102, 126, 234, 0.1);
    --background-light-color-3:#f1f3f5;
    --white-color:#151515;
    --font-light-color:#495057;
    --font-dark-color:#212529;
    --font-dark-color-2:#151515;
    --sidebar-dark-color:#ffffff;
    --scrollbar-bg-color:#f1f3f5;
    --scrollbar-thumb-color:#adb5bd;
    --scrollbar-track-color:#f1f3f5;
    --background-color:#ffffff;
    --title-shadow-text-color:rgba(0,0,0,0.03);
    --card-bg: rgba(255, 255, 255, 0.95);
    --card-hover-shadow: 0 15px 35px rgba(0,0,0,0.1);
    --glass-bg: rgba(255, 255, 255, 0.75);
    --glass-border: rgba(255, 255, 255, 0.3);
}
.dark-theme{
    --primary-color:#667eea;
    --primary-color-light: #8b9bff;
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --accent-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --secondary-color:#6c757d;
    --background-dark-color:#0d1117;
    --background-dark-gray:#161b22;
    --border-color:#30363d;
    --background-light-color:#f1f1f1;
    --background-light-color-2:rgba(102, 126, 234, 0.1);
    --background-light-color-3:#161b22;
    --white-color:#f0f6fc;
    --font-light-color:#c9d1d9;
    --font-dark-color:#313131;
    --font-dark-color-2:#151515;
    --sidebar-dark-color:#161b22;
    --scrollbar-bg-color:#161b22;
    --scrollbar-thumb-color:#484f58;
    --scrollbar-track-color:#161b22;
    --background-color:#000;
    --title-shadow-text-color:rgba(25,29,43,0.2);
    --card-bg: rgba(22, 27, 34, 0.95);
    --card-hover-shadow: 0 15px 35px rgba(0,0,0,0.5);
    --glass-bg: rgba(22, 27, 34, 0.75);
    --glass-border: rgba(48, 54, 61, 0.5);
}
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 1.1rem;
    list-style: none;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
    // user unselectable
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; 
    // user undragable
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

html {
    scroll-behavior: smooth;
}

body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    font-size: inherit;
    overflow-x: hidden !important;
    transition: background-color 0.3s ease;
    line-height: 1.6;
}
body::-webkit-scrollbar{
    width: 9px;
    background-color: #383838;
}
body::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #6b6b6b;
}
body::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #383838;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: 1rem;

}
h1{
    font-size:2rem;
    color: var(--white-color);
    text-transform: capitalize;

    span{
        font-size:3rem
    }
}
span{
    color: var(--primary-color);
}

// hamburger menu section
.hamburger-menu-icon-section{
                position: fixed;
                right: 3%;
                top: 4%;
                z-index: 25;
                padding: 10px 20px;
                display: none;
                background-color: var(--background-light-color-2);
                cursor: pointer;
                border-radius: 8px;
                transition: var(--transition-smooth);

                &:hover {
                    background-color: var(--primary-color);
                    transform: scale(1.05);
                    
                    svg {
                        color: white;
                    }
                }

                svg{
                    font-size: 2rem;
                    transition: var(--transition-smooth);
                }
        }


// hide sidebar (only on mobile)
.sidebarhide{
        @media screen and (max-width: 1200px) {
            transform: translateX(-100%);
        }
}

// Scroll Progress Bar
.scroll-progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: var(--primary-gradient);
  z-index: 9999;
  transition: width 0.1s ease;
  box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
}

// Sidebar Overlay for Mobile
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 15;
  cursor: pointer;
  display: none;
  
  @media screen and (max-width: 1200px) {
    display: block;
  }
}

// Back to Top Button
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--primary-gradient);
  border: none;
  color: white;
  cursor: pointer;
  box-shadow: var(--shadow-xl);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition-smooth);
  
  svg {
    font-size: 2rem;
  }
  
  &:hover {
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
  }
  
  @media screen and (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
}

// floating toggler 
.theme{
}
.light-dark-mode{
      position: fixed;
      right: 0%;
      top: 20%;
      background-color: var(--background-light-color-2);
      width: 6.5rem;
      height: 2.5rem;
      z-index: 15;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50px 0 0 50px;
      box-shadow: var(--shadow-md);
      transition: var(--transition-smooth);
      
      &:hover {
        width: 7rem;
        box-shadow: var(--shadow-lg);
      }
      
      svg{
        display: flex;
        align-items: center;
        font-size: 1.7rem;
        color: var(--white-color);
      }
  }
  @media screen and (max-width: 1200px){
    .hamburger-menu-icon-section{
        display: inline-block;
    }
  }
  
  @media screen and (max-width: 768px){
    h1{
        font-size: 1.8rem;
        
        span{
            font-size: 2.5rem;
        }
    }
  }
  
  @media screen and (max-width: 480px){
    *{
        font-size: 1rem;
    }
    
    h1{
        font-size: 1.5rem;
        
        span{
            font-size: 2rem;
        }
    }
  }
}
`;
export default GlobalStyled;
