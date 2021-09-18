import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/styles'

export default function JobPosts({jobs}) {
    return (
        <div>
            {jobs.map((job, index) => <div key={index}><JobPost job={job}/></div>)}
        </div>
    )
}

const JobPost = ({job}) => {
    return (
        <JobContainer>
            <LeftDiv>
            <a target='_blank' rel='noreferrer' href={job.url} class='company'>{job.company}</a>
              <span class='date'>{job.date}</span>
              <br />
              <span class='job-title'>{job.role}</span>
        </LeftDiv>
        <RightDiv>
            {job.description}
        </RightDiv>
        </JobContainer>
    )
}

const JobContainer = styled.div`
margin-top: 75px;
display: grid;
grid-template-columns: 25% 65%;
column-gap: 50px;
row-gap: 50px;
p, span, a {
    font-family: halyard-display;
    text-decoration: none;
    white-space: pre-wrap;
}
a, .date {
    color: ${colors.blue}
}

.date {
    font-size: 12px;
    font-weight: 300;
}

.company {
    font-size: 20px;
    font-weight: 400;
}
`

const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const RightDiv = styled.span`
    font-weight: 300;
`