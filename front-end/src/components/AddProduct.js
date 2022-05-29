import React from 'react';
import { Formik, Field } from "formik";
import {
	Box,
	Button,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	VStack,
	Select,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useToast
} from "@chakra-ui/react";

import { useMutation, useQuery, gql } from '@apollo/client';
import { LIST_PRODUCTS_ON_LOCATION } from "../graphql/location_gql"


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


const LIST_PRODUCTS = gql`
  query listProducts{
	  listProducts {
			id,
			name,
	  }
  }`;


export const AddProductsAtLocation = (name) => {
	const { data, loading, error } = useQuery(LIST_PRODUCTS)
	const toast = useToast()
	const [addProductToLocation] = useMutation(ADD_PRODUCT_AT_LOCATION, {
		refetchQueries: [
			LIST_PRODUCTS_ON_LOCATION, // DocumentNode object parsed with gql
			'listProductsonLocation' // Query name
		],
	})

	const onSubmit = (values) => {
		addProductToLocation({
			variables: {
				...values,
			}
		}).then((data) => {
			toast({
				title: 'Product added to location.',
				status: 'success',
				duration: 4000,
				isClosable: true,
				colorScheme: "purple"
			})
		}).catch((e) => {
			toast({
				title: 'Product at location Already exists.',
				status: 'error',
				duration: 4000,
				isClosable: true,
				colorScheme: "purple"
			})
		})
	};

	if (loading) return 'Loading...'
	if (error) return `Error! ${error.message}`
	return (
		<Modal
			isOpen={name.modalIsOpen}
			onClose={name.onClose}
			colorScheme="purple"
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Create your account</ModalHeader>
				<ModalCloseButton />
				<ModalBody pb={6}>
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
				</ModalBody>

				<ModalFooter>
					<Button onClick={name.onClose}>Cancel</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
