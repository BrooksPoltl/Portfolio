import React from 'react'
import {Element, scroller, Link} from 'react-scroll';
import {Container, NavItems} from '../.././Styles/Nav'
const Nav =()=>{
    return(
        <Element name = "NavBar">
            <Container>
                <NavItems>
                    <Link to = "Home" smooth = {true}>HOME</Link>
                    <Link to = "About" smooth = {true}>ABOUT</Link>
                    <Link to = "Projects" smooth = {true}>PROJECTS</Link>
                    <Link t0 = "Contact" smooth = {true}>CONTACT</Link> 
                </NavItems>
            </Container>
        </Element>
    )
}
export default Nav