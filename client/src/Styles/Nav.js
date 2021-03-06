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
    @media (max-width: 768px) {
        z-index: 20;
        padding-left: 0px;
        flex-direction: column;
      }
`
export const Dropdown = Styled.a`
    display: none;
    cursor: pointer;
    @media (max-width: 768px) {
        display: block;
        padding-left: 20px;
        padding-top: 5px;
        height: 50px;
      }
    font-size: 30px;
`
export const NavItems = Styled.div`
    width: 50%;
    display: -webkit-box;  
    display: -ms-flexbox;  
    display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
    display: flex; 
    align-items: center;
    justify-content: space-between;
    z-index: 20;
     @media (max-width: 768px) {
         width:40%;
         align-items: start;
         margin-top: 6px;
         flex-direction: column;
         z-index: 20;
         background-color: #222831;
         border:${props=>props.active? '3px solid #D65A31': 'none'};
         padding-left: 5px;
         min-height: ${props=> props.active?'200px':'0px'};
   }
`
export const NavItem = Styled.div`
    font-weight: bold;
    z-index: 20;
    &:hover{
        color: #D65A31;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        z-index: 20;
        display: ${props=> props.active? 'flex':'none'};
        padding: 5px 0px;
      }
`