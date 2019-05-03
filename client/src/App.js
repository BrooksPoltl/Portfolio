import React from 'react'
import Home from './components/Home/Home.js'
import About from './components/About/About.js'
import Nav from './components/Nav/Nav'
import Sticky from 'react-sticky-el'
const App = () =>{
    return (
    <div>
        <Home />
        <Sticky>
            <Nav />
        </Sticky>
        <About />
    </div>
    )
}
export default App