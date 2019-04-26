const graphql = require('graphql')
const axios = require('axios')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
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
                return axios.get(`/projects/${args.id}`)
                .then(res=> res.data)
            }
        }
    }
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
                libraries: {type: new GraphQLNonNull(GraphQLList(GraphQLString))}
            },
            resolve(parentValue, args){
                return axios.post('https://bpp-portfolio.herokuapp.com/projects/',args)
                .then(res => res.data)
                .catch(err=> err)
            }
        }
    }
})
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})