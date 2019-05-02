import React from 'react';
import {Element, scroller} from 'react-scroll';
import {Content, Container, NameHeader, TitleHeader} from '../.././Styles/Home'
const Home = () =>{
    return (
        <Element name = 'Home'>
            <Container>
                <Content>
                    <NameHeader>Brooks P. Poltl</NameHeader>
                    <TitleHeader>Full Stack Web Developer</TitleHeader>
                    <button>Continue</button>
                </Content>
            </Container>
        </Element>
    )
}

export default Home