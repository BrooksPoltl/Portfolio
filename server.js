const express = require('express')
require('dotenv').config()
const expressGraphQL = require('express-graphql')
const schema = require('./Backend/schema/schema')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const project = require('./Backend/schema/models/project')
const cors = require('cors')
const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use('/graphql',expressGraphQL({
    schema,
    graphiql: true,
}))
const port = process.env.PORT || 4000;

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-t6a6m.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`;
mongoose.connect(uri).then(()=>{
    app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
}).catch(err=>{
    console.log(err);
})
