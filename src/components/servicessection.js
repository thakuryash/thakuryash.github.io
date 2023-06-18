import React from 'react'
import { InnerLayout } from '../styles/layouts'
import Styled from 'styled-components'
import Title from '../components/title'
import Servicecard from '../components/servicecard'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolfBall, faWrench  } from '@fortawesome/free-solid-svg-icons';



function Servicessection() {
    return (
            <ServicessectionStyled>
                <Title title={'Services'} span={'services'} />
                <InnerLayout>
                <div className="services">
                <div className="first-card">
                    <Servicecard
                            Image={<CodeIcon/>}
                            title={'Web Development'}
                            paragraph={'I specialize in web development and have the expertise to create impressive and dynamic websites and web applications tailored to your unique requirements. Whether you need a sleek and modern website or a robust and scalable web application'}
                        />
                </div>
                <div className="pair-div">

                <div className="mid-cart">
                    <Servicecard
                            Image={<FontAwesomeIcon icon={faWrench} />}
                            title={'Automotive Expert'}
                            paragraph={'I can offer expert advice on whether to purchase a new car and provide solutions for any mechanical issues you may encounter. Trust me to guide you in making informed decisions and deliver top-notch assistance in all your automotive needs.'}
                        />

                </div>

                    <Servicecard
                        Image={<FontAwesomeIcon icon={faGolfBall}/>}
                        title={'Golfing'}
                        paragraph={"Whether you're a beginner or an experienced golfer, I invite you to join me for an exhilarating 18-hole round of golf. Let's tee off together and enjoy the thrill of the game while building lasting memories on the greens."}
                    />
                </div>
                

                </div>
                 </InnerLayout>

            </ServicessectionStyled>

    )
}
const ServicessectionStyled = Styled.section`
    margin-top:5rem;
    .services{
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-direction:row;
        width: 100%;
        .first-card{
            width: 33.33%;
        }
        .mid-cart{
            margin: 0 1.2rem;
        }
        .pair-div{
            display: flex;
            justify-content:space-between;
            width: 66.66%;
            &>div{
                width: 50%;

            }
        }
    }
    @media screen and (max-width: 1350px){
       .services{
        flex-direction:column;
         
        .first-card{
            width: 100%;
        }
        .pair-div{
            width: 100%;
            margin-top:3rem;
            flex-wrap:nowrap;
            .mid-cart{
                margin-right: 1rem;
                margin-left:0rem;
            }
            &>div{
                width: 50%;
            }
        }
       }
}
@media screen and (max-width: 700px){
       
        .pair-div{
            flex-direction:column;
            &>div{
                width: 100% !important;
            }
            .mid-cart{
                margin-bottom:3rem !important;
                margin-right: 0 !important;
            }
        }

}
`
export default Servicessection
