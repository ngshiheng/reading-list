const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// Connect to mLab database
// Seems like this is blocked by proxy
const URI = "mongodb+srv://jerry:Jerry12345!@graphql-jerry-wfbgv.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(URI, { useNewUrlParser:true });
mongoose.connection.once('open', () => {
    console.log("Connected to the database.");
});

// Middleware
app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Now listening for requests on port 4000.");
});