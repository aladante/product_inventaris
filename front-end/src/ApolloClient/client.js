import { ApolloClient, HttpLink, ApolloLink, InMemoryCache, concat } from '@apollo/client';

import { AUTH_TOKEN } from '../constants/constants.js'


const httpLink = new HttpLink({
	uri: 'http://34.111.112.34/graphql',
	headers: {
		Authorization: "Bearer " + localStorage.getItem(AUTH_TOKEN) || null,
	},
});


export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: httpLink,
});
