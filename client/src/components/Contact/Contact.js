import React from 'react'
import {Container, Form} from '../.././Styles/Contact'
import {Element} from 'react-scroll';
const Contact = () =>{
    return(
        <Element name = "Contact">
            <Container>
                <h2>COntact Me</h2>
                <Form>
                    <input type = 'text' placeholder = 'Name'/>
                    <input type = 'text' placeholder = 'Email'/>
                    <input type = 'text' placeholder = 'Message'/>
                </Form>
            </Container>
        </Element>
    )
}

export default Contact