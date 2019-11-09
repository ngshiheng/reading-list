// Define types
// Define relationships between types
// Defining root queries

const graphql = require('graphql');
const _ = require('lodash');
const Book = require('../models/book.js');
const Author = require('../models/author.js');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
} = graphql;

// Object types
// fields is wrapped inside an arrow function because if you do not do so, the script will run top to bottom and it will complain that Book/Author type is not defined yet.
// If you wrap it inside a function, the fields will only be executed after the entire script is read

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                return Author.findById(parent.authorId);
            },
        },
    }),
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            // Each author might have a list of books, not just a single book, hence we need to use GraphQLList
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({ authorId: parent.id });
            },
        },
    }),
});

// Query - How do we initially jump into the Graph
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },

            // When receive the query:
            resolve(parent, args) {
                return Book.findById(args.id);
            },
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Author.findById(args.id);
            },
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args) {
                return Book.find({});
            },
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parents, args) {
                return Author.find({});
            },
        },
    },
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                age: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age,
                });
                return author.save();
            },
        },
        addBook: {
            type: BookType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                genre: { type: new GraphQLNonNull(GraphQLString) },
                authorId: { type: new GraphQLNonNull(GraphQLID) },
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.genre,
                    authorId: args.authorId,
                });
                // Use 'return' to get data back
                return book.save();
            },
        },
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
