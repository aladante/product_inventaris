import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Flex,
	Box,
	Input,
	Stack,
	Button,
	Heading, VStack
} from "@chakra-ui/react";
import { useQuery, gql } from '@apollo/client';
import { LOCATION } from '../constants/routeConstants'


const LIST_LOCATIONS = gql`
  query listLocations {
	  listLocations {
			id,
			name,
			city,
			street,
			number
	  }
  }`;

const Locations = ({ locations, locationInput, navigate }) => {
	return (
		< Stack name='ching' spacing={4}>
			{
				locations.filter(loca => loca.name.includes(locationInput) || locationInput === "").map((loca) => (
					<Box key={loca.id}  >
						<Button colorScheme="purple" onClick={() => navigate(LOCATION + "/" + loca.id)}>
							{loca.name} : {loca.city}
						</Button>
					</Box>
				))
			}
		</Stack >
	);
}


const Location = () => {
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
		<Flex bg="gray.100" alignItems="top" justifyContent="center" height="100vh">
			<VStack alignItems="center" spacing="4" background="white" width="70%" margin="2em" height="80%">
				<Heading> Choose location</Heading>
				<Box width="80%" height="3em">
					<Input placeholder="search for location" onChange={handleChange}
					>
					</Input>
				</Box>
				<Locations locations={locations} locationInput={locationInput} navigate={navigate} />
			</VStack>
		</Flex>
	)
}

export default Location;
