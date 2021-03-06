/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {
    ProjectImage,
    HeaderContainer,
    Description,
    UrlContainer,
    TechContainer,
    ListContainer,
    List,
    Item,
    Icon,
    ListHeader,
    ProjectHeader,
    ProjectContainer,
} from '../.././Styles/ProjectCard'
import Styled from 'styled-components';
const ProjectCard = (props) =>{
    const Container = Styled.div`
    border-bottom: 3px solid #D65A31;
    background: ${props =>props.active?'#393E46':'#222831'};
    width: 100vw;
    `
    return (
    <Container active ={props.active}>
        <HeaderContainer>
            <ProjectContainer>
                <ProjectHeader href = {props.project.projectUrl}>{props.project.title}</ProjectHeader>
                <UrlContainer>
                        <Icon href = {props.project.githubUrl} target = '_blank'>
                            <i class="fab fa-github"/>
                        </Icon>
                        <Icon href = {props.project.projectUrl} target = '_blank'>
                            <i class="fab fa-chrome"/>
                        </Icon>
                </UrlContainer>
            </ProjectContainer>
            <ProjectImage src = {props.project.imageUrl} alt = "landing page for guest"/>
            <Description>{props.project.description}</Description>
        </HeaderContainer>
        <TechContainer>
            <ListContainer>
                <ListHeader>Technologies:</ListHeader>
                <List>
                {props.project.languages.map((language, index)=>{
                    return <Item key = {index}>{language}</Item>
                })}
                </List>
            </ListContainer>
            <ListContainer>
                <ListHeader>Libraries:</ListHeader>
                <List>
                    {props.project.libraries.map((library,index)=>{
                        return <Item key = {index}>{library}</Item>
                    })}
                </List>
            </ListContainer>
        </TechContainer>
    </Container>
    )
}

export default ProjectCard
