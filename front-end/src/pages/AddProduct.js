import React from 'react';
import { Formik, Field } from "formik";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	VStack,
	useToast,
	Heading
} from "@chakra-ui/react";

import { gql, useMutation } from "@apollo/client";
import { useNavigate } from 'react-router-dom';
import { HOME } from '../constants/routeConstants';

const ADD_PRODUCT_MUTATION = gql`
  mutation createProduct(
    $name: String!
    $expireDate: String
  ) {
    createProduct(input : {name: $name, expireDate: $expireDate}) {
     name 
    }
  }`;

const AddProduct = () => {
	const [addProduct] = useMutation(ADD_PRODUCT_MUTATION)
	const navigate = useNavigate();
	const toast = useToast()

	const onSubmit = (values) => {

		addProduct({
			variables: {
				...values,
			}
		}).then((data) => {
			toast({
				title: 'Product created.',
				description: "Product added and availble.",
				status: 'success',
				duration: 4000,
				isClosable: true,
				colorScheme: "purple"
			})

		}).catch((e) => {
			toast({
				title: 'Product Already exists.',
				status: 'error',
				duration: 4000,
				isClosable: true,
				colorScheme: "purple"
			})
		})
	};

	return (
		<Flex bg="gray.100" align="center" justify="center" h="100vh">
			<Box bg="white" p={6} rounded="md" minW="70%" minH="70%">
				<Flex width="full" justify="space-between">
					<Heading> Add Product </Heading>
					<Button type="submit" maxWidth="70%" variant="outline" onClick={() => navigate(
						HOME)} colorScheme="purple" width="min-content">
						HOME
					</Button>
				</Flex>
				<Formik
					initialValues={{
						name: "",
					}}
					onSubmit={(values) => {
						onSubmit(values)
					}}
				>
					{({ handleSubmit, errors, touched }) => (
						<form onSubmit={handleSubmit}>
							<VStack spacing={4} align="flex-start">
								<FormControl>
									<FormLabel htmlFor="name">name</FormLabel>
									<Field
										as={Input}
										id="name"
										name="name"
										type="String"
										variant="filled"
									/>
								</FormControl>
								<Button type="submit" colorScheme="purple" width="full">
									sumbit
								</Button>
							</VStack>
						</form>
					)}
				</Formik>
			</Box>
		</Flex>
	);
}

export default AddProduct;
