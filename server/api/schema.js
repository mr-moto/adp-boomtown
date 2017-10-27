import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = `
    type User {
        id: ID!
        email: String!
        fullname: String!
        bio: String
        owneditems: [Item]
        borroweditems: [Item]
    }
    
    type Item {
        id: ID!
        title: String!
        description: String
        imageurl: String
        tags:[Tag] 
        itemowner: User!
        created: String!
        borrower: User
    }

    type Tag { 
        tagid: ID!
        title: String!
    }

    type Query {
        users: [User]
        user(id: ID!): User
        items: [Item]
        item(id: ID!): Item
        tags: [Tag]
        tag(id: ID!):Tag
    }

    type Mutation {
        addItem (
            title: String!
            imageurl: String
            itemowner: ID!
            description: String
            tags: [String]
        ): Item
    }
`;

export default makeExecutableSchema({
    typeDefs,
    resolvers
});
