import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Button,
	Heading,
	VStack,
	Flex, Box
} from "@chakra-ui/react";

import { ADDPRODUCT, ADDLOCATION, PRODUCT, LOCATION, LOGIN } from '../constants/routeConstants'
import { Locations } from "../components/Location"
import { CHECK_JWT } from '../graphql/login_gql'
import { AUTH_TOKEN } from '../constants/constants'
import { useQuery } from '@apollo/client';
import { getRole } from '../utils/JwtDecoder'

const Homepage = () => {
	const navigate = useNavigate();
	const [jwt, setJwt] = useState(localStorage.getItem(AUTH_TOKEN))
	const { data, loading, error } = useQuery(CHECK_JWT, { variables: { jwt } })
	let role

	if (jwt) { role = getRole(jwt) };

	if (loading) {
		return 'Loading...checkJwt'
	}

	if (error) {
		navigate(LOGIN)
	}


	return <Flex bg="gray.100" alignItems="top" justifyContent="center" height="100vh">
		<VStack alignItems="center" spacing="4" background="white" minW="70%" margin="2em" >
			<Heading paddingTop="1em"> MENU </Heading>
			<Button type="submit" maxWidth="70%" variant="outline" onClick={() => navigate(
				LOCATION)} colorScheme="purple" width="full">
				Location
			</Button>

			{role !== "ROLE_ADMIN" ? < > </> :
				<>
					<Heading paddingTop="1em"> ADMIN MENU </Heading>
					<Button type="submit" maxWidth="70%" variant="outline" onClick={() => navigate(
						ADDPRODUCT)} colorScheme="purple" width="full">
						add product
					</Button>
					<Button type="submit" maxWidth="70%" variant="outline" onClick={() => navigate(
						ADDLOCATION)} colorScheme="purple" width="full">
						add Location
					</Button>
					<Button type="submit" maxWidth="70%" variant="outline" onClick={() => navigate(
						ADDPRODUCT)} colorScheme="purple" width="full">
						add user
					</Button>
				</>
			}
			<Locations />
		</VStack>
	</Flex>
}

export default Homepage
