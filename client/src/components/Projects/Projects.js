import React, {useState, useEffect } from 'react'
import ProjectCard from './ProjectCard.js'
import {Element, scroller} from 'react-scroll';
import {Container, Header} from '../.././Styles/Projects.js';
import {Query} from 'react-apollo'
import gql from 'graphql-tag';
const Projects = () =>{
    return (
        <Query query = {GET_PROJECTS}>
        {({data, loading, error})=>
    {
        if(loading)return <div>hi</div>
        if(error) return <div>error</div>
        return (
            <Element name = "Projects">
                <Container>
                    <Header>Projects</Header>
                    {data.projects.map(project=>{
                        return <ProjectCard key = {project.id} project = {project}/>
                    })}
                </Container>
            </Element>
            )
    }}
    </Query>
    )
}
const GET_PROJECTS = gql`
    query{
        projects{
            id
            title
            description
            projectUrl
            imageUrl
            languages
            libraries
            githubUrl
        }
    }
`
export default Projects