import * as React from "react"
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import { colors } from "../styles/styles";
import AboutMeImage from '../assets/about-me.jpg';

import '../styles/global.css'
import styled from "styled-components";
import JobPosts from "../components/JobPosts";
import Footer from "../components/Footer";
// data
const jobs = [
  {
    company: "Newton Europe",
    url: "https://newtoneurope.com",
    date: "October 2021 –",
    role: "Digital Consultant",
    description:
      "Starting a new role in Newton Europe's Digital team, as a Digital Consultant.",
  },
  {
    company: "Fat Llama",
    url: "https://fatllama.com",
    date: "July 2020 – September 2020",
    role: "Operations Intern",
    description:
      `Designed automated operational processes for a startup’s new D2C marketplace, then implemented them, reducing order processing time by 50% while cutting shipping costs by up to 25%.
      \nUsed SQL to analyse customer fraud rate and helped implement product features to reduce fraud by 2%.`
  },
  {
    company: "Hawk-Eye Innovations",
    url: "https://hawkeyeinnovations.com",
    date: "July 2018 – September 2019",
    role: "Systems Engineer",
    description:
      `Selected as 2 out of 50 operators to control the line-calling technology at two high-pressure Grand Slam tennis finals that were broadcast live on TV to a worldwide audience of over 20 million viewers.
      \nProject lead small teams in tennis tournaments around the world, ensuring the system ran at 99% uptime.
      \nProduced the 3D digital models of tennis stadia and objecs using 3DSMax.`
  }
]

// markup
const IndexPage = () => {
  return (
    <>
    <Helmet>
    <title>Andy Brooker</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name = "description" content = "I'm an incoming Digital Consultant at Newton Europe
    and a Mechanical Engineering with Manufacturing and Management graduate from the University of Bath."/>
    <meta name = "author" content = "Andrew Brooker"/>
    <meta property="og:title" content = "Andrew Brooker"/>
    <meta property="og:type" content = "website"/>
    <meta property="og:url" content="https://andrewniallbrooker.com"/>
    <meta property="og:description" content="Hey, I'm Andy."/>
    <meta name="google-site-verification" content="JMbeXTUP5bRvwTI-CMlSsN7FBJGx_3FMPilNQEC7E-I" />
    <link rel="icon" type="image/png" href="./favicon-32x32.png" sizes="32x32"/>
    <link rel="stylesheet" href="https://use.typekit.net/nfa2cmi.css"/>
    </Helmet>
    <header>
    <Navbar color={colors.blue}/>
    </header>
    <Main>
      <AboutMe linkColor={colors.blue}>
        <Intro>
        <h1>Hey, I'm Andy.</h1>
        <div class='image-container'><img src={AboutMeImage}/></div>
        </Intro>
        <p>I'm an incoming Digital Consultant at Newton Europe
            and an Industrial Engineering graduate from the University of Bath.
            <br /><br />
            Interested in the intersect between all things design,
            data and engineering.
            <br /><br />
            Previously an Operations Intern at <a target='_blank' rel='noreferrer' href='https://fatllama.com'>Fat
              Llama (YC S17)</a> and Systems Engineer at <a rel='noreferrer' href='https://www.hawkeyeinnovations.com/'>Hawk-Eye
              Innovations</a>.
          </p>
          <JobPosts jobs={jobs}/>
      </AboutMe>
    </Main>
    <Footer />
    </>  
  )
}

export default IndexPage

const Main = styled.main`
  margin: 30px 64px 30px;
  box-sizing: border-box;
`

const AboutMe = styled.div`
  h1, p {
    font-family: p22-mackinac-pro;
  }
  h1 {
    font-weight: 500;
    font-size: calc((3 - 1) * 1.2vw + 1rem);
  }
  p {
    font-weight: 400;
    font-size: calc((0.5) * 1.2vw + 1rem);
    a {
      color: ${props => props.linkColor};
      text-decoration: none;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`

const Intro = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    max-width: 60px;
    img {
      border-radius: 50%;
      max-width: inherit;
    }
  }
`



