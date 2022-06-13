import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Button,
	Heading,
	VStack,
	Flex,
} from "@chakra-ui/react";

import { ADDPRODUCT, ADDLOCATION, LOCATION, LOGIN, ALLPRODUCT, REGISTRATION } from '../constants/routeConstants'
import { AUTH_TOKEN } from "../constants/constants";
import { Locations } from "../components/Location"
import { getRole } from '../utils/JwtDecoder'

const Homepage = ({ check_jwt }) => {
	const navigate = useNavigate();


	if (check_jwt.loading) return 'Loading...'
	if (check_jwt.error) {
		if (check_jwt.error.message === "Unauthorized") {
			navigate(LOGIN)
		}
	}

	let role = getRole(localStorage.getItem(AUTH_TOKEN))

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
