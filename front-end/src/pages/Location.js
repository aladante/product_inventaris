import React from 'react';
import {
	Box,
	Button,
	Flex,
	Heading, VStack
} from "@chakra-ui/react";
import { Locations } from "../components/Location"
import { useNavigate } from 'react-router-dom';
import { HOME } from '../constants/routeConstants';


const Location = () => {
	const navigate = useNavigate();

	return (
		<Flex bg="gray.100" align="center" justify="center" h="100vh">
			<Box bg="white" p={6} rounded="md" minW="70%" minH="70%">
				<VStack alignItems="center" spacing="4" background="white" >
					<Flex width="50%" justify="space-around">
						<Heading> Choose location</Heading>
						<Button type="submit" maxWidth="70%" variant="outline" onClick={() => navigate(
							HOME)} colorScheme="purple" width="min-content">
							HOME
						</Button>
					</Flex>
					<Locations />
				</VStack>
			</Box>
		</Flex>
	)
}

export default Location;
