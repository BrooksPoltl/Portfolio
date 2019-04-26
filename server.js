const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./projects/schema/schema')
const app = express()
app.use(cors())
app.use('/graphql', cors(),expressGraphQL({
    schema,
    graphiql: true
}))
app.use('/', (req,res)=> res.send('welcome to my project database'))
const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
