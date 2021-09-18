import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import useWindowDimensions from '../utils/useWindowDimensions'

export default function Logo({ color }) {

    const { width } = useWindowDimensions();

    return (
        <LogoDiv color={`${color}`}>
            <Link to="/">
                <LogoContainer>
                    <LogoIcon />
                    {(width > 640) && 'Andy Brooker'}
                </LogoContainer>
            </Link>
        </LogoDiv>
    )
}

const LogoIcon = () => {
    return (
        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12.3501 0.563381C11.9165 -0.187794 10.832 -0.187794 10.3984 0.563381L0.152808 18.3099C-0.281274 19.061 0.261206 20 1.12839 20H8.70701C8.31638 20 7.99998 19.6834 7.99998 19.2929V15V10.7071C7.99998 10.3166 8.31638 10 8.70701 10H13.2778C14.6587 10 15.7778 11.1193 15.7778 12.5C15.7778 13.8807 14.6587 15 13.2778 15C14.6587 15 15.7778 16.1193 15.7778 17.5C15.7778 18.8807 14.6587 20 13.2778 20H21.6201C22.4878 20 23.0298 19.061 22.5962 18.3099L12.3501 0.563381Z"
                fill="currentColor" />
        </svg>
    )
}

const LogoDiv = styled.div`
    color: ${props => props.color};
    font-family: p22-mackinac-pro;
    font-weight: 500;
    user-select: none;
    a, div {
        text-decoration: none;
        color: ${props => props.color};
        &:hover {
            opacity: 0.5;
        }
    }
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
`
