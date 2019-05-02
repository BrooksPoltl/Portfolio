import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {ApolloProvider} from 'react-apollo'
import {BrowserRouter as Router} from 'react-router-dom'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: "https://bpp-portfolio.herokuapp.com/graphql"
})

ReactDOM.render(
    <ApolloProvider client = {client}>
        <Router>
            <App />
        </Router>
    </ApolloProvider>,
document.querySelector('#root'))