import React from 'react'
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import Nav from './components/Nav/Nav.js'
import Sticky from 'react-sticky-el'
import Projects from './components/Projects/Projects.js'
import Contact from './components/Contact/Contact.js'
const App = () =>{
    return (
    <div>
        <Home />
        <Sticky style = {{zIndex: '20'}}>
            <Nav />
        </Sticky>
        <About />
        <Projects />
        <Contact />
    </div>
    )
}
export default App