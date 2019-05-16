import React,{useState} from 'react'
import {Container, Form} from '../.././Styles/Contact'
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'
import {Element} from 'react-scroll';
const Contact = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [company, setCompany] = useState("");

    return(
        
            <Mutation mutation = {SEND_EMAIL}>
            {(sendEmail, { data })=>(
                <Element name = "Contact">
                    <Container>
                    <h2>Contact Me</h2>
                        <Form onSubmit = {async(event)=>{
                            event.preventDefault();
                            const response = await sendEmail({ variables: {name: name, email: email, message: message, company: company}})
                            setName("");
                            setEmail("");
                            setMessage("");
                            setCompany("");
                            console.log(response)
                        }}>
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
                            <input type = 'text' value = {company} placeholder = 'Company' onChange = {
                                (event)=>{
                                    event.preventDefault();
                                    setCompany(event.target.value);
                                }
                            }/>
                            <button type = 'submit'>Send Message</button>
                        </Form>
                    </Container>
                </Element>
                )
            }
            </Mutation>
    )
}    
const SEND_EMAIL = gql`
    mutation sendEmail($name: String!, $email: String!, $company: String!, $message: String!){
        sendEmail(Name: $name, message: $message, email: $email, company: $company){
            email
        }
    }
`
export default Contact