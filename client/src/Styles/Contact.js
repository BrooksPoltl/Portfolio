
import Styled from 'styled-components'

export const Container = Styled.div`
    height: ${props=>props.submitted? '100vh':'100%'};
    min-height: 100vh;
    background: #222831;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: -5;
`

export const Form = Styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    align-content: space-around;
    width: 40%;
    @media (max-width: 768px) {
        width: 80%;
      }
    margin-bottom: 20px;
`
export const Header = Styled.h1`
    display:flex;
    font-size: 50px;
    color: white;
    text-shadow: 5px 5px 5px black;
    z-index: auto;
    margin-top: 20px;
`
export const Field = Styled.p`
    color: white;
    margin-bottom: 5px;
    text-shadow: 5px 5px 5px black;
`
export const ArgsInput = Styled.input`
    height: 25px;
    border-radius: 8px;
    padding-left: 5px;
    margin-bottom: 10px;
    width: 100%;
    &:focus{
        outline: none;
    }
    border:${props => props.missing ? "2px solid red": "none"};
`
export const ArgsDiv = Styled.div`
    width: 100%;
`
export const MessageInput =Styled.textarea`
    border:${props => props.missing ? "2px solid red": "none"};
    width: 100%;
    border-radius: 8px;
    padding-left: 5px;
    padding-top: 5px;
    resize:none;
    font-family: sans-serif;
    &:focus{
        outline: none;
    }
`
export const SubmitButton = Styled.button`
    box-shadow: 5px 5px 5px black;
    width: 150px;
    height: 35px;
    color: white;
    background-color: #222831;
    border: 2px solid white;
    border-radius: 2px;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    text-decoration: none;
    display:flex;
    align-items:center;
    justify-content:center;
    &:hover{
        cursor: pointer;
    }
    &:active{
        transform: translateY(4px); 
        box-shadow: 2px 2px 2px black;
    }
    &:focus{
        outline: none;
    }
`
export const Icon = Styled.a`   
    margin-top: 50px;
    color: white;
    font-size: 50px;
    width: 20%;
    margin-left: 46%;
`
export const SubmitText = Styled.p`
    margin-top: 50px;
    color: white;
    width: 20%;
    margin-left: 46%;
`
export const MissingField = Styled.p`
    font-size: 20px;
    color: red;
`
export const I = Styled.a`
    font-size: 40px;
    margin-right: 30px;
    margin-top: 20px;
    z-index: auto;
    color: white;
    top: 5px;
    &:hover{
    color: #D65A31;
    }
`
export const Socials = Styled.div`
    display: flex;
    margin-left: 20px;
    margin-bottom: 10px;
    z-index: auto;
`