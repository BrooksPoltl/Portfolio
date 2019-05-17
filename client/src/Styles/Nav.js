import Styled from 'styled-components';

export const Container = Styled.div`
    color: white;
    height: 50px;
    background-color: #222831;
    padding-left: 10%;
    z-index: 20;
    display: flex;
    border-top: 3px solid #D65A31;
    border-bottom: 3px solid #D65A31;
`
export const NavItems = Styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const NavItem = Styled.div`
    font-weight: bold;
    &:hover{
        color: #D65A31;
        cursor: pointer;
    }
`