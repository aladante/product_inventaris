import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';

import { AUTH_TOKEN } from '../constants/constants.js'


const httpLink = new HttpLink({
	uri: 'http://localhost:8080/graphql',
	headers: {
		Authorization: "Bearer " + localStorage.getItem(AUTH_TOKEN) || null,
	},
});

const authMiddleware = new ApolloLink((operation, forward) => {
	// add the authorization to the headers
	operation.setContext({
		headers: {
			authorization: "Bearer " + localStorage.getItem(AUTH_TOKEN) || null,
		}
	});

	return forward(operation);
})

export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: httpLink
});
