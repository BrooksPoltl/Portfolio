import React from 'react'
import {Element} from 'react-scroll';
import {Container, Header, ProfileImg, Description, TextContainer, Button,InnerContainer, ContentContainer} from '../.././Styles/About.js'
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
                    <Description>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. 
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Description>
                    <Button href = {pdf} target = '_blank'>View Resume</Button>
                </TextContainer>
            </ContentContainer>
            </InnerContainer>
        </Container>
    </Element>
    )
}

export default About