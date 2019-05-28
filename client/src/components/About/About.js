import React from 'react'
import {Element} from 'react-scroll';
import {
    Container, 
    Header, 
    ProfileImg, 
    Description, 
    TextContainer, 
    Button,
    InnerContainer, 
    ContentContainer
} from '../.././Styles/About.js'
import Headshot from '../.././assets/Linkedin_photo.jpg'
import pdf from '../.././assets/resume.pdf'

const About = () =>{
    return (
    <Element name = "About">
        <Container>
            <InnerContainer>
            <Header>
                About
            </Header>  
            <ContentContainer>
                <ProfileImg src = {Headshot} alt = "Linked-in headshot"/>
                <TextContainer>
                    <Description>I am a software developer from McKinney, Texas currently residing in Collinsville, Illinois. I graduated with a Finance degree from Texas Tech University in 2018, and have a passion for investing, learning new things, and building web applications.</Description>
                    <Button href = {pdf} target = '_blank'>View Resume</Button>
                </TextContainer>
            </ContentContainer>
            </InnerContainer>
        </Container>
    </Element>
    )
}

export default About