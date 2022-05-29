import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Formik, Field } from "formik";
import {
	Box,
	Button,
	Checkbox,
	Flex,
	Stack,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	VStack,
	Select,
	Text
} from "@chakra-ui/react";
import { useMutation, useQuery, gql } from '@apollo/client';
import { LOCATION } from '../constants/routeConstants'
import { getLocation } from 'graphql';


const LIST_LOCATIONS = gql`
  query getLocation($locationId : ID!){
	  getLocation(id : $locationId){
			id,
			name,
			city,
			street,
			number
	  }
  }`;

const LIST_PRODUCTS = gql`
  query listProducts{
	  listProducts {
			id,
			name,
	  }
  }`;

const ADD_PRODUCT_AT_LOCATION = gql`
  mutation addProductAtLocation (
    $productId: ID!
    $locationId: ID!
    $expireDate: String!
    $amount: Int!
  ) {
    addProductAtLocation (input : {productId: $productId, locationId: $locationId, expireDate: $expireDate, amount:  $amount}) {
	  id

    }
  }`;


const ProductsAtLocation = () => {
	return <></>
}

const AddProductsAtLocation = (name) => {
	const { data, loading, error } = useQuery(LIST_PRODUCTS);
	const [addProductToLocation] = useMutation(ADD_PRODUCT_AT_LOCATION)

	if (loading) return 'Loading...'
	if (error) return `Error! ${error.message}`

	const onSubmit = (values) => {
		console.log(values)
		addProductToLocation({
			variables: {
				...values,
			}
		}).then((data) => {
		}).catch((e) => {
			console.log(e)
		})
	};
	return (
		<Box bg="white" p={6} rounded="md" w={64}>
			<Formik
				initialValues={{
					locationId: name.id,
					productId: 1,
					expireDate: "",
					amount: 1
				}}
				onSubmit={(values) => {
					onSubmit(values)
				}}
			>
				{({ handleSubmit, errors, touched }) => (
					<form onSubmit={handleSubmit}>
						<VStack spacing={4} align="flex-start">
							<FormControl>
								<FormLabel htmlFor="location">Location</FormLabel>
								<Field
									as={Input}
									id="locationId"
									name="locationId"
									type="String"
									variant="filled"
									isDisabled={true}
								/>
							</FormControl>
							<FormControl isInvalid={!!errors.password && touched.password}>
								<FormLabel htmlFor="products">Products</FormLabel>
								<Field
									as={Select}
									name="productId"
									id="productId"
									variant="filled"
								>
									{data.listProducts.map(product => (
										<option key={product.id} id="productId" value={product.id}>
											{product.name}
										</option>
									))}
								</Field>
							</FormControl>
							<FormControl isInvalid={!!errors.password && touched.password}>
								<FormLabel htmlFor="expireDate">expire date</FormLabel>
								<Field
									as={Input}
									id="expireDate"
									name="expireDate"
									type="date"
									variant="filled"
								/>
							</FormControl>
							<FormControl isInvalid={!!errors.password && touched.password}>
								<FormLabel htmlFor="amount">Amount</FormLabel>
								<Field
									as={Input}
									id="amount"
									name="amount"
									type="number"
									variant="filled"
								/>
								<FormErrorMessage>{errors.password}</FormErrorMessage>
							</FormControl>
							<Button type="submit" colorScheme="purple" width="full">
								ADD
							</Button>
						</VStack>
					</form>
				)}
			</Formik>
		</Box>
	)
}

const LocationId = () => {
	const params = useParams();
	let locationId = params.id;
	const { data, loading, error } = useQuery(LIST_LOCATIONS, { variables: { locationId } });

	if (loading) return 'Loading...'
	if (error) return `Error! ${error.message}`

	const { getLocation: { name, city, street, id } } = data

	return (
		<Flex direction="column" align="center">
			<Box width="100vw" height="3em">
				<Text>
					{name}
				</Text>
			</Box>
			<ProductsAtLocation />
			<AddProductsAtLocation location={name} id={id} />
		</Flex>
	)
}

export default LocationId;
