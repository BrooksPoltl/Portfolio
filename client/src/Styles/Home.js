import Styled, {keyframes} from 'styled-components';

export const Content = Styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    align-content: space-around;
`
const BackgroundGradient = keyframes`
    0%{
        background-position: 0% 50%;
    }
    50%{
        background-position:100% 50%;
    }
    100%{
        background-position:0% 50%;
    }
`
    

export const Container = Styled.div`
    background: linear-gradient(132deg,#393E46,#222831, #D65A31);
    background-size: 400% 400%;
    animation: ${BackgroundGradient} 15s ease infinite;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const NameHeader = Styled.h1`
    font-size: 50px;
    color:white;
    text-shadow: 10px 10px 10px black;
`
export const TitleHeader = Styled.h1`
    color: white;
    font-size: 35px;
    text-shadow: 5px 5px 5px black;
`
export const Button = Styled.button`
    box-shadow: 5px 5px 5px black;
    width: 150px;
    height: 35px;
    color: white;
    background-color: #222831;
    border: 2px solid white;
    border-radius: 2px;
    font-weight: bold;
    font-size: 20px;
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
export const Socials = Styled.div`
    position:fixed;
    right: 3%;
    bottom: 5%;
    text-shadow: 5px 5px 5px black;
    z-index: 100;
`

export const Icon = Styled.a`
    font-size: 50px;
    margin-right: 30px;
    color: white;
    &:hover{
        color: #393E46;
    }
`
export const I = Styled.a`
    font-size: 63px;
    margin-right: 30px;
    margin-top: 20px;
    color: white;
    position: relative;
    top: 5px;
    &:hover{
        color: #393E46;
    }
`