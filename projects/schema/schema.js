const graphql = require('graphql')
const _ = require('lodash')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
} = graphql;
const projects = [
    {id: '1', title: 'portfolio', projectUrl: 'project.jpg', imageUrl:'image.jpg', description:'portfolio project',
languages: ['node', 'javascript'], libraries: ['react hooks', 'styled components', 'graphql' ]},
    {id: '2', title: 'portfolio', projectUrl: 'project.jpg', imageUrl:'image.jpg', description:'portfolio project',
languages: ['node', 'javascript'], libraries: ['react hooks', 'styled components', 'graphql' ]}
]
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields:{
        id: {type: GraphQLString},
        title: {type:GraphQLString},
        projectUrl:{type: GraphQLString},
        imageUrl:{type: GraphQLString},
        description: {type: GraphQLString},
        languages: {type: GraphQLList(GraphQLString)},
        libraries: {type: GraphQLList(GraphQLString)}
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        project: {
            type: ProjectType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args){
                return _.find(projects,{id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})