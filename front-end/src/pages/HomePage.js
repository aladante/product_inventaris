import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Button,
	Heading,
	VStack,
	Flex,
} from "@chakra-ui/react";

import { ADDPRODUCT, ADDLOCATION, LOCATION, LOGIN, ALLPRODUCT, REGISTRATION } from '../constants/routeConstants'
import { Locations } from "../components/Location"
import { LIST_LOCATIONS } from '../graphql/location_gql'
import { useQuery } from '@apollo/client';
import { getRole } from '../utils/JwtDecoder'

const Homepage = ({ jwt }) => {
	const navigate = useNavigate();
	const { data, loading, error, refetch } = useQuery(LIST_LOCATIONS);
	let role


	if (jwt) { role = getRole(jwt) };

	if (loading) return 'Loading...'
	if (error) {
		if (error.message === "Unauthorized") {
			navigate(LOGIN)
		}
	}

	return <Flex bg="gray.100" alignItems="top" justifyContent="center" height="100vh">
		<VStack alignItems="center" spacing="4" background="white" minW="70%" margin="2em" >
			<Heading paddingTop="1em"> MENU </Heading>
			<Button type="submit" maxWidth="70%" variant="outline" onClick={() => navigate(
				LOCATION)} colorScheme="purple" width="full">
				Location
			</Button>
			<Button type="submit" maxWidth="70%" variant="outline" onClick={() => navigate(
				ALLPRODUCT)} colorScheme="purple" width="full">
				Total overiew
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
						REGISTRATION)} colorScheme="purple" width="full">
						add user
					</Button>
				</>
			}
			<Locations />
		</VStack>
	</Flex>
}

export default Homepage
