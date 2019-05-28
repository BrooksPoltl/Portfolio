import Styled from 'styled-components'

export const ProjectImage = Styled.img`
    width:80%;
    @media (max-width: 768px) {
        margin: 0px 5%;
        width:90%;
      }
    margin: 20px 10%;
    border: 3px solid #D65A31;
`
export const HeaderContainer = Styled.div`
    margin: 0px 10%;
    width: 80%;
    @media (max-width: 768px) {
        margin: 0px 5%;
        width:90%;
    }
`
export const Description = Styled.p`
    width: 80%;
    @media (max-width: 768px) {
        margin: 0px 5%;
        width:90%;
      }
    margin: 0px 10%;
    color: white;
    text-shadow: 5px 5px 5px black;
`
export const UrlContainer = Styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 7%;
`
export const TechContainer = Styled.div`
    display: flex;
    margin: 20px 10%;
    width:80%;
    justify-content: center;

`
export const ListContainer = Styled.div`
    margin-right: 50px;
`
export const List = Styled.ul`
    margin-left: 25px;
    color:#D65A31;
    text-shadow: 5px 5px 5px black;
`
export const Icon = Styled.a`
    font-size: 40px;
    margin-right: 30px;
    color: white;
    text-shadow: 2px 2px 2px black;
    &:hover{
        color: #D65A31;
    }
`
export const ListHeader = Styled.h3`
    color: white;
    text-shadow: 5px 5px 5px black;
`
export const ProjectHeader = Styled.a`
    font-size: 27px;
    font-weight: bold;
    color: white;
    text-shadow: 5px 5px 5px black;
    width: 100%;
    margin: 20px 10%;
    text-decoration: none;
`
export const ProjectContainer = Styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`
export const Item = Styled.li`
@media (max-width: 768px) {
    font-size: 10px;
  }
`