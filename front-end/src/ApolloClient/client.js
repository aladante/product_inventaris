import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { AUTH_TOKEN } from '../constants/constants.js'


const httpLink = new HttpLink({
	uri: 'http://vacinfi.com/graphql',
	headers: {
		Authorization: "Bearer " + localStorage.getItem(AUTH_TOKEN) || null,
	},
});


export const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: httpLink,
});
