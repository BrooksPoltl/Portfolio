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
    Icon,
    ListHeader,
    ProjectHeader,
    ProjectContainer,
    Container
} from '../.././Styles/ProjectCard'
const ProjectCard = (props) =>{
    console.log(props)
    return (
    <Container>
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
                    return <li key = {index}>{language}</li>
                })}
                </List>
            </ListContainer>
            <ListContainer>
                <ListHeader>Libraries:</ListHeader>
                <List>
                    {props.project.libraries.map((library,index)=>{
                        return <li key = {index}>{library}</li>
                    })}
                </List>
            </ListContainer>
        </TechContainer>
    </Container>
    )
}

export default ProjectCard