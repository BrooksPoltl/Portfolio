import React from 'react';
import {Element, scroller} from 'react-scroll';
import {Content, Container, NameHeader, TitleHeader, Socials, Icon, Button, I} from '../.././Styles/Home'
const Home = () =>{
    const scroll = (dest) => {
        scroller.scrollTo(dest, {
          duration: 500,
          delay: 1,
          smooth: true,
        });
      }
    
    return (
        <Element name = 'Home'>
            <Container>
                <Content>
                    <NameHeader>Brooks P. Poltl</NameHeader>
                    <TitleHeader>Full Stack Web Developer</TitleHeader>
                    <Button onClick = {()=>{scroll('About')}}>Continue</Button>
                </Content>
                <Socials>
                    <Icon href = "https://www.linkedin.com/in/brookspoltl/">
                        <i className = "fab fa-linkedin"/>
                    </Icon>
                    <Icon href = "https://www.github.com/brookspoltl">
                        <i className = "fab fa-github"/>
                    </Icon>
                    <I href = "mailto:brookscodes@gmail.com">
                        <i className = "far fa-envelope"/>
                    </I>
                </Socials>
            </Container>
        </Element>
    )
}

export default Home