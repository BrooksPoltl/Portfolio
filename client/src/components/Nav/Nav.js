import React,{useState} from 'react'
import {Element, scroller, Link} from 'react-scroll';
import {Container, NavItems, NavItem, Dropdown} from '../.././Styles/Nav'
import "../.././Styles/Nav.css"
const Nav =()=>{
    const [active, setActive] = useState(false);
    return(
        <Element name = "NavBar">
            <Container>
                <Dropdown onClick = {()=>setActive(!active)}>
                    <i class="fas fa-bars"/>
                </Dropdown>
                <NavItems active = {active}>

                    <NavItem active = {active}>
                        <Link  spy = {true} activeClass = "active" to = "Home" smooth = {true}>HOME</Link>
                    </NavItem>
                    <NavItem active = {active}>
                        <Link  spy = {true} activeClass = "active" to = "About" smooth = {true}>ABOUT</Link>
                    </NavItem>
                    <NavItem active = {active}>
                        <Link spy = {true} activeClass = "active" to = "Projects" smooth = {true}>PROJECTS</Link>
                    </NavItem >
                    <NavItem active = {active}> 
                        <Link spy = {true} activeClass = "active" to = "Contact" smooth = {true}>CONTACT</Link> 
                    </NavItem>
                </NavItems>
            </Container>
        </Element>
    )
}
export default Nav