const graphql = require('graphql')

const {
    GraphQLObjectType,
    GraphQLString
} = graphql;

const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields:{
        id: {type: GraphQLString},
        title: {type:GraphQLString},
        projectUrl:{type: GraphQLString},
        imageUrl:{type: GraphQLString},
        description: {type: GraphQLString},
        languages: {type: [GraphQLString]},
        libraries: {type: [GraphQLString]}
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields:{
        projects: {
            type: ProjectType,
            args: {id: {type: GraphQLString}}
        }
    }
})