import React, { useState } from 'react';
import {
	Box,
	Flex,
	Button,
	Input,
	VStack,
	Text
} from "@chakra-ui/react";
import { LOCATION } from '../constants/routeConstants'
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { LIST_LOCATIONS } from "../graphql/location_gql"


export const Locations = () => {
	const navigate = useNavigate();
	const { data, loading, error } = useQuery(LIST_LOCATIONS);
	const [locationInput, setLocationInput] = useState("")


	if (loading) return 'Loading...'
	if (error) return `Error! ${error.message}`

	let locations = data.listLocations;

	const handleChange = (e) => {
		setLocationInput(e.target.value)
	}

	return (

		<Box width="80%">
			<Box height="auto" paddingBottom="1">
				<Input placeholder="search for location" onChange={handleChange}
				>
				</Input>
			</Box>
			<Flex direction="column" overflowY="scroll" maxH="80" align="center" >
				{
					locations.filter(loca => loca.name.includes(locationInput) || locationInput === "").map((loca) => (
						<Box key={loca.id} width="full" padding="1">
							<Button width="full" colorScheme="purple" maxW="container.sm"
								onClick={() => navigate(LOCATION + "/" + loca.id)}>
								<Flex wrap="wrap" direction="column">
									<Text fontSize="lg">
										{loca.name}
									</Text>
									<Text fontSize="sm">
										{loca.city} {loca.street} {loca.number}
									</Text>
								</Flex>
							</Button>
						</Box>
					))
				}
			</Flex>
		</Box>
	);
}
