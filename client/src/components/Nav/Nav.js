import React from 'react'
import {Element, scroller, Link} from 'react-scroll';
import {Container, NavItems, NavItem} from '../.././Styles/Nav'
import "../.././Styles/Nav.css"
const Nav =()=>{
    return(
        <Element name = "NavBar">
            <Container>
                <NavItems>
                    <NavItem>
                        <Link  spy = {true} activeClass = "active" to = "Home" smooth = {true}>HOME</Link>
                    </NavItem>
                    <NavItem>
                        <Link  spy = {true} activeClass = "active" to = "About" smooth = {true}>ABOUT</Link>
                    </NavItem>
                    <NavItem>
                        <Link spy = {true} activeClass = "active" to = "Projects" smooth = {true}>PROJECTS</Link>
                    </NavItem>
                    <NavItem> 
                        <Link spy = {true} activeClass = "active" to = "Contact" smooth = {true}>CONTACT</Link> 
                    </NavItem>
                </NavItems>
            </Container>
        </Element>
    )
}
export default Nav