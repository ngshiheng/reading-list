const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv  = require('dotenv');
dotenv.config();

const app = express();

// Allow cross-origin requests
app.use(cors());

// Connect to mLab database
const URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@graphql-jerry-wfbgv.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
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