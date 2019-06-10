import Styled from 'styled-components';

export const Container = Styled.div`
    height: 100%;
    background: #393E46;
    border-top: 3px solid #D65A31;
    border-bottom: 3px solid #D65A31;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`
export const Header = Styled.h1`
    margin-top: 50px;
    width: 200px;
    @media (max-width: 768px) {
        font-size: 30px;
        width: 100px;
      }
    font-size: 50px;
    color: white;
    text-shadow: 5px 5px 5px black;
    z-index: auto;
`