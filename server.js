const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./projects/schema/schema')
const app = express()

app.use(express.json())
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))
const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
