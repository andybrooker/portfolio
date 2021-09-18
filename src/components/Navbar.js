import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import NavLink from './NavLink'

export default function Navbar({color}) {
    return (
        <NavBarContainer>
            <Logo color={color}/>
            <NavLink />
        </NavBarContainer>
    )
}

const NavBarContainer = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 64px;
`