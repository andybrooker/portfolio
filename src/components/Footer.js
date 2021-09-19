import React from 'react'
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterWrapper>
            <span>Made by Andy / 2021 / Experimenting with GatsbyJS</span>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    font-size: 12px;
    font-family: halyard-display;
    padding: 8px 64px;
    font-weight: 300;
`