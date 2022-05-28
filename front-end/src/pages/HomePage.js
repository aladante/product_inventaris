import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	Button,
	Flex,
	Box,
} from "@chakra-ui/react";

import { ADDPRODUCT, ADDLOCATION, PRODUCT, LOCATION } from '../constants/routeConstants'

// 2. Then use it like this
const Homepage = ({ role }) => {
	const navigate = useNavigate();
	return <>
		<Box width="100vw" alignItems="center">
			<Flex direction="column" width="60%" >
				<Button type="submit" onClick={() => navigate(
					PRODUCT)} colorScheme="purple" width="full">
					product
				</Button>
				<Button type="submit" onClick={() => navigate(
					LOCATION)} colorScheme="purple" width="full">
					Location
				</Button>

				{role !== "ROLE_ADMIN" ? < > </> :
					<>
						<Button type="submit" onClick={() => navigate(
							ADDPRODUCT)} colorScheme="purple" width="full">
							add product
						</Button>
						<Button type="submit" onClick={() => navigate(
							ADDLOCATION)} colorScheme="purple" width="full">
							add Location
						</Button>
					</>
				}
			</Flex >
		</Box>
	</>
}

export default Homepage
