import React,{useState} from 'react'
import {Container, Form} from '../.././Styles/Contact'
import {Element} from 'react-scroll';
const Contact = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [company, setCompany] = useState("");
    return(
        <Element name = "Contact">
            <Container>
                <h2>Contact Me</h2>
                <Form>
                    <input type = 'text' value = {name} placeholder = 'Name' onChange = {
                        (event)=>{
                            event.preventDefault();
                            setName(event.target.value);
                        }} 
                        />
                    <input type = 'text' value = {email} placeholder = 'Email' onChange = {
                        (event)=>{
                            event.preventDefault();
                            setEmail(event.target.value);
                        }
                    }
                    />
                    <input type = 'text' value = {message} placeholder = 'Message' onChange = {
                        (event)=>{
                            event.preventDefault();
                            setMessage(event.target.value);
                        }
                    }/>
                    <input type = 'text' value = {company} placeholder = 'Message' onChange = {
                        (event)=>{
                            event.preventDefault();
                            setCompany(event.target.value);
                        }
                    }/>

                </Form>
            </Container>
        </Element>
    )
}

export default Contact