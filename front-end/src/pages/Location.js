import React from 'react';
import {
	Flex,
	Heading, VStack
} from "@chakra-ui/react";
import { Locations } from "../components/Location"


const Location = () => {

	return (
		<Flex bg="gray.100" alignItems="top" justifyContent="center" height="100vh">
			<VStack alignItems="center" spacing="4" background="white" width="70%" margin="2em" height="80%">
				<Heading> Choose location</Heading>
				<Locations />
			</VStack>
		</Flex>
	)
}

export default Location;
