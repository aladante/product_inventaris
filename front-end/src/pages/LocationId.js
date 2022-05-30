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

	let array_with_data = data.listProductsonLocation.slice()

	array_with_data.sort((left, right) => {
		var product_name_order = left.product.name.localeCompare(right.product.name);
		var expire_date = new Date(left.expireDate) - new Date(right.expireDate);
		return product_name_order || -expire_date;
	})

	return < VStack alignItems="center" >
		{
			array_with_data.map((product) => {
				return <Flex key={product.id} rounded="md"
					padding="1em" bg="gray.200" boxShadow="md" wrap="wrap" minWidth="40%" >
					<Flex direction="column" justifyContent="center" >
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
				</Flex>
			})
		}
	</VStack >
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
		<Flex bg="gray.100" alignItems="top" justifyContent="center" height="100vh">
			<VStack alignItems="center" spacing="4" background="white" width="70%" margin="2em" overflowY="scroll" >
				<Heading> Producten op locatie {name}</Heading>
				<Box padding="1em">
					<Button onClick={onOpen} colorScheme="purple" size="lg" >
						Add new product
					</Button>
				</Box>
				<ProductsAtLocation id={id} />
				<AddProductsAtLocation location={name} id={id} modalIsOpen={isOpen} onClose={onClose} />
			</VStack>
		</Flex>
	)
}

export default LocationId;
