import Title from '../components/title'
import Progressbar from '../components/progressbar'
import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/layouts'
function Skills() {
    return (
        <SkilssStyled>
            <Title title="Skills" span={'Skills'} />
            <InnerLayout>
                <div className="skills">
                    <Progressbar title={'HTML5, CSS3, Bootstrap, Material-UI'}
                        width={'80%'}
                        text={'80%'}
                    />
                    <Progressbar title={'ReactJS'}
                        width={'70%'}
                        text={'70%'}
                    />
                    <Progressbar title={'Problem Solving'}
                        width={'60%'}
                        text={'60%'}
                    />
                    <Progressbar title={'NodeJS, Java'}
                        width={'30%'}
                        text={'30%'}
                    />
                    <Progressbar title={'Rest API, GraphQL'}
                        width={'30%'}
                        text={'30%'}
                    />
                    
                </div>
            </InnerLayout>
        </SkilssStyled>
    )

}
const SkilssStyled = styled.div`
    .skills{
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 2rem;

    }
    @media screen and (max-width: 950px){
        .skills{
        grid-template-columns: none;

    } 

}
`
export default Skills
