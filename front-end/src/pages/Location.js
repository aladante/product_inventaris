import React from 'react';
import {
	Button,
	Flex,
	Heading,  VStack
} from "@chakra-ui/react";
import { Locations } from "../components/Location"
import { useNavigate } from 'react-router-dom';
import { HOME } from '../constants/routeConstants';


const Location = () => {
	const navigate = useNavigate();

	return (
		<Flex bg="gray.100" alignItems="top" justifyContent="center" height="100vh">
			<VStack alignItems="center" spacing="4" background="white" width="70%" margin="2em" height="80%">
				<Flex width="50%" justify="space-around">
					<Heading> Choose location</Heading>
					<Button type="submit" maxWidth="70%" variant="outline" onClick={() => navigate(
						HOME)} colorScheme="purple" width="min-content">
						HOME
					</Button>
				</Flex>
				<Locations />
			</VStack>
		</Flex>
	)
}

export default Location;
