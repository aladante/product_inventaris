import {
	ApolloClient,
	InMemoryCache,
} from "@apollo/client";

import { AUTH_TOKEN } from '../constants/constants.js'

export const client = new ApolloClient({
	uri: 'http://localhost:8080/graphql',
	cache: new InMemoryCache(),
	request: async (operation) => {
		const token = localStorage.getItem(AUTH_TOKEN);

		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : '',
			}
		});
	}
});
