import * as React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import { colors } from "../styles/styles";
import '../styles/global.css'
import UnderConstruction from '../assets/underconstruction.png'

export default function projects() {
    return (
        <div style = {{backgroundColor: `${colors.orangeBackground}`}}>
            <Helmet>
                <title>Projects • Andy Brooker</title>
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
            <Navbar color={colors.orange}/>
            <main>
                <img src = {UnderConstruction}/>
            </main>
        </div>
    )
}
