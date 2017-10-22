import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress} from 'apollo-server-express';
import schema from './api/schema'
import cors from 'cors';
import createLoaders from './api/loaders';

const app = express();
const GQL_PORT = 5000;


app.use('*', cors());

app.use('/graphql', bodyParser.json(), graphqlExpress({ 
    schema,
    context: { loaders: createLoaders() }
 })); // Where we will send all of our GraphQL requests

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // A route for accessing the GraphiQL tool

app.listen(GQL_PORT, () => console.log(`GraphQL server is running on http://localhost:${GQL_PORT}/graphiql`))