import Styled, {keyframes} from 'styled-components';

export const Container = Styled.div`
    height: 100vh;
    background-color:#393E46;
    border-top: 3px solid #D65A31;
    border-bottom: 3px solid #D65A31;
`
export const Header = Styled.h1`
    margin-top: 5%;
    margin-left: 35%;
    font-size: 50px;
    color: white;
    text-shadow: 5px 5px 5px black;
    z-index: 0;
`
export const ProfileImg = Styled.img`
    margin-top: 45px;
    border-radius: 50%;
    width: 20%;
    height: 20%;
    border: 3px solid #D65A31;
`
export const Description = Styled.p`
    width: 75%;
    font-size: 20px;
    color: white;
    text-shadow: 2px 2px 2px black;
`
export const TextContainer = Styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    margin-top: 5%;
`
export const Button = Styled.a`
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
export const ContentContainer = Styled.div`
    display: flex;
    margin-left: 10%;
    margin-top: 1%;
`
export const InnerContainer = Styled.div`
    margin-top: 10%;
`