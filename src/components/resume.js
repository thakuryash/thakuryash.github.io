import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/layouts'
import Smalltitle from './smalltitle'
import Title from './title'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Resumeitem from './resumeitem'
import SchoolIcon from '@mui/icons-material/School';
import education from '../data/education';
import experience from '../data/experience'


function Resume() {
    const briefcase = <BusinessCenterIcon/> ;
    const school = <SchoolIcon/>
        return ( <ResumeStyled >
            <Title title = { "Resume" }
            span = { "Resume" }
            />
                <InnerLayout >                
            <div className = "small-title" >
            <Smalltitle icon = { school }
            title = { 'Working Experience' }
            />
            </div> 
            <div className="resume-content">
            {experience.map((item, index) => (
                <Resumeitem
                key={index}
                year={item.year}
                title={item.subject}
                subTitle={item.institute}
                text={item.description}
                />
            ))}
            </div>
            <div className = "small-title small-title-margin" >
                <Smalltitle icon = { briefcase }
                title = { 'Education' }
                />

                </div>                 
            <div className="resume-content">
                {education.map((item, index) => (
                    <Resumeitem
                    key={index}
                    year={item.year}
                    title={item.subject}
                    subTitle={item.institute}
                    text={item.description}
                    />
            ))}
            </div> 
             </InnerLayout> 
             </ResumeStyled >
        )
}
const ResumeStyled = styled.section `
.small-title{
    padding-bottom: 3rem;
}
.small-title-margin{
    margin-top: 4rem;
}
.resume-content{
    border-left: 2px solid var(--border-color);
}
`
export default Resume