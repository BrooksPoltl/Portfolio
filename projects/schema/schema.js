const graphql = require('graphql')
const axios = require('axios')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull,
} = graphql;
const Project = require('./models/project')

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields:{
        id: {type: GraphQLString},
        title: {type:GraphQLString},
        projectUrl:{type: GraphQLString},
        githubUrl:{type: GraphQLString},
        imageUrl:{type: GraphQLString},
        description: {type: GraphQLString},
        languages: {type: GraphQLList(GraphQLString)},
        libraries: {type: GraphQLList(GraphQLString)}
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:()=>({
        projects: {
            type: GraphQLList(ProjectType),
            args: {},
            resolve(parentValue, args){
                return Project.find()
                .then(projects =>{
                    return projects.map(project =>{
                        return {...project._doc, id: project.id}
                    })
                }).catch(err=>{
                    throw err;
                })
            }
        },
        project:{
            type: GraphQLList(ProjectType),
            args:{id: {type: new GraphQLNonNull(GraphQLString)}},
            async resolve(parentValue, args){
                return Project.find({_id: args.id })
            }
        }
    })
})

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addProject:{
            type: ProjectType,
            args:{
                title: {type: new GraphQLNonNull(GraphQLString)},
                projectUrl:{type:new GraphQLNonNull(GraphQLString)},
                imageUrl:{type: new GraphQLNonNull(GraphQLString)},
                description: {type: new GraphQLNonNull(GraphQLString)},
                languages: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
                libraries: {type: new GraphQLNonNull(GraphQLList(GraphQLString))},
                githubUrl:{type: new GraphQLNonNull(GraphQLString)},
            },
            resolve(parentValue, args){
                const project = new Project({
                    title: args.title,
                    description: args.description,
                    projectUrl: args.projectUrl,
                    languages: args.languages,
                    libraries: args.libraries,
                    imageUrl: args.imageUrl,
                    githubUrl:args.githubUrl,
                })
                return project
                .save()
                .then(result =>{
                    return { ...result._doc, id: result.id }
                }
                ).catch(err=>{
                    throw err;
                })
            }
        },
        editProject:{
            type: ProjectType,
            args:{
                title: {type: GraphQLString},
                projectUrl:{type:GraphQLString},
                imageUrl:{type: GraphQLString},
                description: {type: GraphQLString},
                languages: {type: GraphQLList(GraphQLString)},
                libraries: {type: GraphQLList(GraphQLString)},
                githubUrl:{type: GraphQLString},
                id: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve(parentValue, args){
                return Project.update({_id: args.id},{$set:{...args}})
                .then(result=>{
                    return {...args}
                }).catch(err=>{
                    throw err
                })
            }
        },
        deleteProject:{
            type: ProjectType,
            args:{id: {type: new GraphQLNonNull(GraphQLString)}},
            resolve(parentValue, args){
                return Project.remove({_id:args.id}).then(result=>{
                    return {...args}
                }).catch(err=>{
                    throw err
                })
            }
        }
    }
})
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})