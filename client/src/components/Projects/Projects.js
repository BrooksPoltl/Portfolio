import React from 'react'
import ProjectCard from './ProjectCard.js'
import {Element} from 'react-scroll';
import {Container, Header} from '../.././Styles/Projects.js';
import LoadingView from './LoadingView'
import {Query} from 'react-apollo'
import gql from 'graphql-tag';
const Projects = () =>{
    return (
        <Query query = {GET_PROJECTS}>
        {({data, loading, error})=>
    {
        if(loading)return <LoadingView/>
        if(error) return <div>error</div>
        return (
            <Element name = "Projects">
                <Container>
                    <Header>Projects</Header>
                    {data.projects.map((project,index)=>{
                        if(index %2 === 0){
                            return <ProjectCard active = {false} index = {index} key = {project.id} project = {project}/>
                        }else{
                            return <ProjectCard active = {true} index = {index} key = {project.id} project = {project}/>
                        }
                        
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