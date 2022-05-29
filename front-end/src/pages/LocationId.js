import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Flex,
	Box,
	Input,
	Stack,
	Button,
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


const LocationId = () => {
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
		<Flex direction="column" align="center">
			<Box width="100vw" height="3em">
				<Input onChange={handleChange}
				>
				</Input>
			</Box>
			<Locations locations={locations} locationInput={locationInput} navigate={navigate} />
		</Flex>
	)

}

export default LocationId;
