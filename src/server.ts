import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http'
import express from 'express'
import cors from 'cors'
import compression from 'compression'
import depthLimit from 'graphql-depth-limit'

import { environment } from './environment'
import schema from './schema'

const app = express()
const server = new ApolloServer({
  schema,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.introspection,
  validationRules: [depthLimit(7)]
})

app.use('*', cors())
app.use(compression())
server.applyMiddleware({
  app
})

const httpServer = createServer(app)

httpServer.listen({ port: environment.port},
  ():void => console.log(`🚀  Server ready at ${server.graphqlPath}. `))
