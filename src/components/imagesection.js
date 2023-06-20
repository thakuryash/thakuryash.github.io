import React from 'react'
import styled from 'styled-components'
import resume from '../img/portfolios/golfing.JPG'
import { InnerLayout } from '../styles/layouts'
import Primarybutton from './primarybutton'
function Imagesection () {
  return (
    <InnerLayout>
      <ImagesectionStyled>
        <div className='left-content'>
          <img src={resume} alt='resume img' />
        </div>
        <div className='right-content'>
          <div className='sub-title'>
            <h4>
              I am <span>Yash Thakur</span>
            </h4>
          </div>
          <p className='paragraph'>
          Hi,
          <br />First and foremost, thank you for taking the time to read my timeline. My journey began in Toronto during high school, where I was introduced to the fascinating worlds of cars and computers. At a young age, my love for cars grew exponentially, unknowingly paving the way for my passion to become my profession. I embarked on various roles, from being a parts salesperson to a skilled technician, gaining invaluable experience along the way. During this time, I pursued my apprenticeship studies at Centennial College's Progress Campus. Working at several Nissan dealerships, I indulged in my admiration for GTRs and 240SXs, which brought immense joy to my automotive journey. However, fate had a different plan for me when I fell under the captivating spell of programming, leading me to further my education at Humber College for computer studies. After completing a two-year program, I entered the world of IT, where my passion for programming blossomed. But that's not all—I've developed two additional passions that I'm deeply in love with: golf and boxing. Despite starting golf only two years ago, my handicap isn't too shabby. These newfound interests bring a refreshing balance to my life, adding excitement and drive to my journey. Thank you once again for joining me on this adventure!
          </p>
          <div className='about-info'>
            <div className='info-title'>
              <p>Full Name</p>
              <p>Nationality</p>
              <p>Language</p>
              <p>Location</p>
            </div>
            <div className='info'>
              <p>Yash T.</p>
              <p>Canada</p>
              <p>English, Hindi</p>
              <p>Canada, Toronto</p>
            </div>
          </div>

          <Primarybutton title='Download CV' />
        </div>
      </ImagesectionStyled>
    </InnerLayout>
  )
}
const ImagesectionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  .left-content {
    width: 50%;
    img {
      width: 90%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 50%;
    h4 {
      font-size: 1.4rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 0.7rem 0;
      font-size: 1rem;
      text-transform: capitalize;
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
    .left-content {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .right-content {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      margin-top: 3rem;
      padding: 1rem;
    }
  }
`
export default Imagesection
