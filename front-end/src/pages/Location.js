import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Flex,
	Box,
	Input,
	Stack,
} from "@chakra-ui/react";
import { useQuery, gql } from '@apollo/client';


const LIST_LOCATIONS = gql`
  query listLocations {
	  listLocations {
			name,
			city,
			street,
			number
	  }
  }`;
const Locations = (getLocations) => {
	if (getLocations.data) {
		return (

			<Stack name='dog' onChange={() => console.log("test")}>
				{getLocations.data.locations.map((loca) => (
					<Box w='40px' h='40px' bg='pink.100'>
						{loca.name}
					</Box>

				))}
			</Stack>
		);
	}
}

const Location = () => {
	const locations = useQuery(LIST_LOCATIONS);
	useEffect(() => {
		console.log(locations)
	})

	return (
		<Flex>
			<Box width="100vw" height="2em">

				<Input>
				</Input>
			</Box>
			<Locations getLocations={locations} />
		</Flex>
	)

}

export default Location;
