import React,{useState} from 'react'
import {Container, Form, Header,I,Socials, Field, SubmitButton,MissingField, Icon, SubmitText, ArgsInput, ArgsDiv, MessageInput} from '../.././Styles/Contact'
import gql from 'graphql-tag'
import {Mutation} from 'react-apollo'
import {Element} from 'react-scroll';
const Contact = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [company, setCompany] = useState("");
    const [missing, setMissing] = useState("");
    return(
            <Mutation mutation = {SEND_EMAIL}>
            {(sendEmail, {data, loading, error})=>(
                    <Element name = "Contact">
                        <Container submitted ={data ? true:false}>
                        <Header>Contact Me</Header>
                        <Socials>
                            <I href = "https://www.linkedin.com/in/brookspoltl/" target="_blank">
                                <i className = "fab fa-linkedin"/>
                            </I>
                            <I href = "https://www.github.com/brookspoltl" target="_blank">
                                <i className = "fab fa-github"/>
                            </I>
                            <I href = "mailto:brookspoltl@gmail.com">
                                <i className = "far fa-envelope"/>
                            </I>
                        </Socials>
                        { !data && !loading && 
                        <Form onSubmit = {async(event)=>{
                            event.preventDefault();
                            console.log(event.target)
                            if(!email.length || !message.length || !name.length ||!company.length){
                                if(!name.length){
                                    return setMissing("name")
                                }
                                else if(!email.length){
                                    return setMissing("email")
                                }
                                else if(!company.length){
                                    return setMissing("company")
                                }else{
                                    return setMissing("message")
                                }
                            }
                            let response = null;
                            response = await sendEmail({ variables: {name: name, email: email, message: message, company: company}})
                            setName("");
                            setEmail("");
                            setMessage("");
                            setCompany("");
                            console.log(response);
                        }}>
                            <ArgsDiv>
                                <Field>Name:</Field>
                                <ArgsInput type = 'text' missing = {missing ==='name'? true:false} value = {name} placeholder = 'Name' onChange = {
                                    (event)=>{
                                        event.preventDefault();
                                        setName(event.target.value);
                                    }} 
                                    />
                            </ArgsDiv>
                            <ArgsDiv>
                                <Field>Email:</Field>
                                <ArgsInput type = 'text' missing = {missing === 'email'? true:false} value = {email} placeholder = 'Email' onChange = {
                                    (event)=>{
                                        event.preventDefault();
                                        setEmail(event.target.value);
                                    }
                                }
                            />
                            </ArgsDiv>
                            <ArgsDiv>
                            <Field>Company Name:</Field>
                            <ArgsInput type = 'text' missing = {missing === 'company'?true:false} value = {company} placeholder = 'Company' onChange = {
                                (event)=>{
                                    event.preventDefault();
                                    setCompany(event.target.value);
                                }
                            }/>
                            </ArgsDiv>
                            <ArgsDiv>
                                <Field>Message:</Field>
                                <MessageInput rows = "10" cols = "10" type = 'text' missing = {missing === 'message'?true:false} value = {message} placeholder = 'Message' onChange = {
                                    (event)=>{
                                        event.preventDefault();
                                        setMessage(event.target.value);
                                    }
                                }/>
                            </ArgsDiv>
                            <SubmitButton type = 'submit'>Send Message</SubmitButton>
                            {missing && <MissingField>missing: {missing}</MissingField>}
                        </Form>}
                    <div>
                    {loading && <div>
                        <Icon>
                            <i class="fas fa-spinner fa-spin"/>
                        </Icon>
                        <SubmitText>Loading...</SubmitText>
                        </div>}
                    {error && <SubmitText>error: could not submit form. Try refreshing and submitting again</SubmitText>}
                    {data && <SubmitText>Your email has been submitted</SubmitText>}
                    </div>
                    </Container>
                </Element> 
                )
            }
            </Mutation>
    )
}    
const SEND_EMAIL = gql`
    mutation sendEmail($name: String!, $email: String!, $company: String!, $message: String!){
        sendEmail(name: $name, message: $message, email: $email, company: $company){
            email
        }
    }
`
export default Contact