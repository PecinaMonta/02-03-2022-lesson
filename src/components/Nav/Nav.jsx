import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaPlusCircle } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";

const NavBar = styled.header`
    //usually 1rem = 16px
    position: absolute;
    height: 4rem;
    padding: 2rem;
    top: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    text-align: center;
    width: 100%;
`
const Logo = styled.a`
    width: 2rem;
    height: 2rem;
    display: block;
    background: #DBE2EF url('https://www.themealdb.com/images/category/beef.png') center/contain no-repeat;
    justify-content: start;
`

const NavLink = styled(Link)`
    min-width: 4rem;
    padding: 0 0 0 1rem;
    text-decoration: none;
    &:visited {
        color: #112D4E;
    }
    direction: start;
`

const ButtonLink = styled(NavLink)`
    width: 1rem;
    height: 2rem;
    text-align: center;
    display: flex;
    
    align-items: center;
`

const ButtonLinkEndDropdown = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: end;
    margin-right: 1rem;
    align-items: center;
   
    @media (min-width: 375px) {
        display: none;
    }
`

const Icon = styled.div`
    width: 4rem;
    height: 2rem;
    display: flex;
    justify-content: end;
    margin-right: 1rem;
    align-items: center;
    margin-right: 2rem;
`

const ButtonLinkEnd = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: end;
    margin-right: 1rem;
    align-items: center;
   
    @media (max-width: 375px) {
        display: none;
    }
`

const DropDown = styled.div`
    position: absolute;
    top: 5rem;
    min-width: 10rem;
    height: 5rem;
    margin-right: 1.5rem;
    background: #f1f1f0;
    max-width:100%;
`

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false)

    const clickHandler = () => {
        setIsOpen(!isOpen)
    }
    return (
        <NavBar>
            <Logo href="/"/>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/all-posts">All posts</NavLink>

            <ButtonLinkEndDropdown><Icon><FaBars onClick={clickHandler}/></Icon>
            { isOpen && (<DropDown>
                <ButtonLink to="/create"><FaPlusCircle style={{display: "block"}}/><p style={{width: "80%"}}>New Post</p></ButtonLink>
                <ButtonLink to="/login"><FaUserAlt style={{display: "block"}}/><p style={{width: "80%"}}>Register</p></ButtonLink>
                </DropDown>)}
            </ButtonLinkEndDropdown>

            <ButtonLinkEnd>
                <ButtonLink to="/create"><FaPlusCircle/></ButtonLink>
                <ButtonLink to="/login"><FaUserAlt/></ButtonLink>
            </ButtonLinkEnd>
        </NavBar>
    )
}

export default Nav