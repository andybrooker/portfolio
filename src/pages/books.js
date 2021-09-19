import * as React from "react"
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function books() {
    return (
        <div>
            <Helmet>
                <title>Books • Andy Brooker</title>
                <meta charset="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name = "description" content = "This is an unorganised, ever-growing list of the books that are passing my bedside table. It is meant to be a digital representation of all the books I've read. I'm always looking for good book recommendations on any topic and I hope you can find a book you haven't read before."/>
                <meta name = "author" content = "Andrew Brooker"/>
                <meta property="og:title" content = "Books I've Read"/>
                <meta property="og:type" content = "website"/>
                <meta property="og:url" content="https://andrewniallbrooker.com/books"/>
                <meta property="og:description" content="A list of the books I have ve read and am reading."/>
                <meta name="google-site-verification" content="JMbeXTUP5bRvwTI-CMlSsN7FBJGx_3FMPilNQEC7E-I" />
                <link rel="icon" type="image/png" href="./favicon-32x32.png" sizes="32x32"/>
                <link rel="stylesheet" href="https://use.typekit.net/nfa2cmi.css"/>
            </Helmet>
            <DisplayGrid>
            <header>
            <Navbar color='green'/>
            </header>
            <main>
                <div><p></p></div>
            </main>
            <Footer />
            </DisplayGrid>
        </div>
    )
}

const DisplayGrid = styled.div`
    min-height: calc(100vh - 16px);
    display: grid;
    grid-template-rows: auto 1fr auto;
`
