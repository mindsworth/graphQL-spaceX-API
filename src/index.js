import { ApolloServer } from 'apollo-server'

import typeDefs from './schema/schema'
import { createStore } from './utils'
import LaunchAPI from './datasources/launch'
import UserAPI from './datasources/user'
import resolvers from './resolvers/resolvers'

const store = createStore()

const server = new ApolloServer({
	typeDefs,
	resolvers,
	dataSources: () => ({
		launchAPI: new LaunchAPI(),
		userAPI: new UserAPI({ store })
	})
})


server.listen().then(({ url }) => {
	console.log(`🚀 Server ready at ${url}`)
})
