import Styled, {keyframes} from 'styled-components';

export const Container = Styled.div`
    height: 100vh;
    background-color:#393E46;
    border-top: 3px solid #D65A31;
    border-bottom: 3px solid #D65A31;
`
export const Header = Styled.h1`
    margin-top: 5%;
    margin-left: 36%;
    font-size: 50px;
    color: white;
    text-shadow: 5px 5px 5px black;
    z-index: 0;
`
export const ProfileImg = Styled.img`
    border-radius: 50%;
    width: 20%;
    height: 20%;
    border: 3px solid #D65A31;
`
export const Description = Styled.p`
    width: 50%;
    font-size: 20px;
    margin-left: 10%;
    color: white;
    text-shadow: 2px 2px 2px black;
    margin-top: 30px;
`
export const TextContainer = Styled.div`
    display: flex;
    margin-left: 10%;
    margin-top: 5%;
`