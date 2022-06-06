import React, { useState } from 'react';
import {
	Box,
	Button,
	Flex,
	Heading,
	HStack,
	Input,
	Text,
	VStack
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { ALL_PRODUCTS_ON_LOCATION_QUERY } from '../graphql/product_gql'
import { useNavigate } from 'react-router-dom';
import { HOME } from '../constants/routeConstants';

const AllProduct = () => {
	const { data, error, loading } = useQuery(ALL_PRODUCTS_ON_LOCATION_QUERY)
	// const { data, loading, error } = useQuery(LIST_LOCATIONS);
	const navigate = useNavigate();
	const [locationInput, setLocationInput] = useState("")
	const [product, setProduct] = useState("")


	if (loading) return 'Loading...'
	if (error) return `Error! ${error.message}`

	let productsOnLocations = data.listProductsonLocations.slice()

	productsOnLocations.sort((left, right) => {
		var product_name_order = left.location.name.localeCompare(right.location.name);
		var expire_date = new Date(left.expireDate) - new Date(right.expireDate);
		return product_name_order || expire_date;
	})

	const handleChangeLocation = (e) => {
		setLocationInput(e.target.value)
	}
	const handleChangeProduct = (e) => {
		setProduct(e.target.value)
	}

	productsOnLocations.sort((left, right) => {
		var product_name_order = left.location.name.localeCompare(right.location.name);
		var expire_date = new Date(left.expireDate) - new Date(right.expireDate);
		return product_name_order || expire_date;
	})
	return <Flex bg="gray.100" align="center" justify="center" h="100vh">

		<Box bg="white" p={6} rounded="md" w="70%" minH="70%">
			< VStack alignItems="center" overflowY="scroll" width="full">
				<Flex width="50%" justify="space-around">
					<Heading> Products on location</Heading>
					<Button type="submit" maxWidth="70%" variant="outline" onClick={() => navigate(
						HOME)} colorScheme="purple" width="min-content">
						HOME
					</Button>
				</Flex>

				<Box height="auto" paddingBottom="1">
					<Input placeholder="search for location" onChange={handleChangeLocation} />
					<Input placeholder="search for Product" onChange={handleChangeProduct} />
				</Box>
				{
					productsOnLocations.filter((loca) =>
						loca.location.name.includes(locationInput) || locationInput === ""
					).filter((prod) =>
						prod.product.name.includes(product) || product === ""
					).map((product) => {
						return (
							<VStack key={product.id} padding={4} rounded="md" bg="gray.200" boxShadow="md" minWidth="40%" >

								<VStack direction="column" justify="center" align="center" width="full">
									<HStack>
										< Text >Name : {product.product.name}</Text>
										< Text >Location: {product.location.name}</Text>
									</HStack>
									<Box >
										< Text >Expires : {product.expireDate} </Text>
									</Box>
									<Box >
										< Text>Amount : {product.amount}</Text>
									</Box>
								</ VStack>
							</VStack>
						)
					})
				}
			</VStack >
		</Box>
	</Flex>
}

export default AllProduct;
