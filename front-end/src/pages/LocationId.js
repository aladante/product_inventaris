import React from 'react';
import { useParams } from "react-router-dom";
import {
	Box,
	Button,
	Flex,
	VStack,
	Text,
	Heading,
	useDisclosure,
	useToast,
	HStack,

} from "@chakra-ui/react";
import { useQuery, gql, useMutation } from '@apollo/client';
import { AddProductsAtLocation } from "../components/AddProduct"
import { LIST_PRODUCTS_ON_LOCATION, DELETE_PRODUCT_AT_LOCATION } from "../graphql/location_gql"

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

const EDIT_PRODUCT_AT_LOCATION = gql`
  mutation editProductAtLocation (
    $id: ID!
    $amount: Int!
  ) {
    editProductAtLocation (input : { id: $id , amount:  $amount}) {
	  id
    }
  }`;

const ProductsAtLocation = ({ id }) => {
	const toast = useToast()
	const { data, loading, error } = useQuery(LIST_PRODUCTS_ON_LOCATION, { variables: { id } });
	const [deleteProductAtLocation] = useMutation(DELETE_PRODUCT_AT_LOCATION, {
		refetchQueries: [
			LIST_PRODUCTS_ON_LOCATION, // DocumentNode object parsed with gql
			'listProductsonLocation' // Query name
		],
	})
	const [editProductToLocation] = useMutation(EDIT_PRODUCT_AT_LOCATION, {
		refetchQueries: [
			LIST_PRODUCTS_ON_LOCATION, // DocumentNode object parsed with gql
			'listProductsonLocation' // Query name
		],
	}
	)

	const onSubmitDelete = (id) => {
		deleteProductAtLocation({
			variables: {
				id,
			}
		}).then((data) => {
			toast({
				title: "Deleted",
				status: 'success',
				duration: 4000,
				isClosable: true,
				colorScheme: "purple"
			})
		}).catch((e) => {
			console.log(e)
			toast({
				title: "error",
				status: 'error',
				duration: 4000,
				isClosable: true,
				colorScheme: "purple"
			})
		})
	}

	const onSubmitMinus = (id) => {
		const values = { id, amount: -1 }
		editProductToLocation({
			variables: {
				...values,
			}
		}).then((data) => {

		}).catch((e) => {
			console.log(e)
			toast({
				title: "error",
				status: 'error',
				duration: 4000,
				isClosable: true,
				colorScheme: "purple"
			})
		})
	}

	const onSubmitAdd = (id) => {
		const values = { id, amount: 1 }
		editProductToLocation({
			variables: {
				...values,
			}
		}).then((data) => {

		}).catch((e) => {
			console.log(e)
			toast({
				title: "error",
				status: 'error',
				duration: 4000,
				isClosable: true,
				colorScheme: "purple"
			})
		})
	}

	if (loading) return 'Loading...'

	if (error) return `Error! ${error.message}`

	return <Box bg="gray.100" >
		< VStack w="100vw" alignItems="center" >
			{
				data.listProductsonLocation.map((product) => {
					return <Flex key={product.id} w="80%" rounded="md"
						padding="1em" justifyItems="center" alignItems="center" bg="gray.200" boxShadow="md">
						<Flex alignItems="center" wrap="wrap" justifyContent="center">
							<Flex direction="column" justifyContent="center">
								<Box >
									< Text >name :{product.product.name}</Text>
								</Box>
								<Box >
									< Text >Expires :{product.expireDate} </Text>
								</Box>
								<Box >
									< Text >Amount :{product.amount}</Text>
								</Box>
							</ Flex>
							<Box padding="1em" >
								<Button colorScheme="purple" variant="outline"
									onClick={() => onSubmitAdd(product.id)}>
									+
								</ Button>
								<Button colorScheme="purple" variant="outline"
									onClick={() => onSubmitMinus(product.id)}>
									-
								</ Button>
								<Button colorScheme="red" variant="solid"
									onClick={() => onSubmitDelete(product.id)}>
									Thrashcan
								</ Button>
							</Box>
						</ Flex>
					</Flex>
				})
			}
		</VStack >
	</Box >
}


const LocationId = () => {
	const params = useParams();
	const { isOpen, onOpen, onClose } = useDisclosure()
	let locationId = params.id;
	const { data, loading, error } = useQuery(LIST_LOCATIONS, { variables: { locationId } });

	if (loading) return 'Loading...'
	if (error) return `Error! ${error.message}`

	const { getLocation: { name, city, street, id } } = data

	return (
		<Flex direction="column" align="center" bg="gray.100" paddingY="2" minH="90vh" >
			<Heading> Producten op locatie {name}</Heading>
			<Box padding="1em">
				<Button onClick={onOpen} colorScheme="purple" size="lg" >
					Add new product
				</Button>
			</Box>
			<ProductsAtLocation id={id} />
			<AddProductsAtLocation location={name} id={id} modalIsOpen={isOpen} onClose={onClose} />
		</Flex>
	)
}

export default LocationId;
