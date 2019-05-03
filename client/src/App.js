import React from 'react'
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import Nav from './components/Nav/Nav.js'
import Sticky from 'react-sticky-el'
import Projects from './components/Projects/Projects.js'
const App = () =>{
    return (
    <div>
        <Home />
        <Sticky>
            <Nav />
        </Sticky>
        <About />
        <Projects />
    </div>
    )
}
export default App