
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
    type User {
        id: ID!
        email: String!
        fullName: String!
        bio: String
        owneditems: [Item]
        borroweditems: [Item]
    }
    
    type Item {
        id: ID!
        title: String!
        description: String
        imageurl: String
        tags:[String]
        itemowner: User!
        created: String!
        available: Boolean!
        borrower: User
    }

    type Query {
        users: [User]
        user(id: ID!): User
        items: [Item]
        item(id: ID!): Item
    }
`;

export default makeExecutableSchema({
    typeDefs,
    resolvers
});