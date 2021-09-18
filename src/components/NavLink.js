import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import useWindowDimensions from '../utils/useWindowDimensions';

export default function NavLink() {

    const [isOpen, setIsOpen] = useState(false);
    const { width } = useWindowDimensions();

    const openMenu = () => {
        setIsOpen(true)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    if (width > 640) {
        return (
            <LinkContainer>
                <li><Link to = '/projects'>Projects</Link></li>
                <li><Link to = '/books'>Bookshelf</Link></li>
            </LinkContainer>
        )
    }

    return (
        <LinkContainer>
            <MenuList onClick={openMenu}>Menu</MenuList>
            {isOpen && <Menu handleClick={closeMenu}/>}
        </LinkContainer>
    )
}

const Menu = ({handleClick}) => {
    return (
        <MenuContainer>
            <CloseIcon handleClick={handleClick}/>
            <ul>
            <li><Link to = '/'>Home</Link></li>
                <li><Link to = '/projects'>Projects</Link></li>
                <li><Link to = '/books'>Bookshelf</Link></li>
            </ul>
        </MenuContainer>
    )
}

const LinkContainer = styled.ul`
    font-family: halyard-display;
    list-style: none;
    display: inline-flex;
    li {
        padding-left: 40px;
        a {
            text-decoration: none;
            color: #00000060;
            &:hover {
                color: #000000;
            }
        }
    }
    
`

const MenuList = styled.li`
    color: #00000060;
    cursor: pointer;
    &:hover {
        color: #000000
    }
`

const MenuContainer = styled.div`
    position: fixed;
    box-sizing: border-box;
    inset: 0;
    background-color: #EEEEEE;
    z-index: 9999;
    opacity: 0.95;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    ul {
        list-style: none;
        text-align: center;
        padding: 0;
        li {
            padding: 5vh 40px;
            font-size: 5vh;
            a {
                color: black;
                &:hover {
                    opacity: 0.7;
                }
            }
        }
    }
`

const CloseIcon = ({handleClick}) => {
    return (
        <CloseIconContainer onClick={handleClick}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L6.75 17.25"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75L17.25 17.25"></path>
            </svg>
        </CloseIconContainer>
    )
}

const CloseIconContainer = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`
