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
	useToast
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { ADD_LOCATION_MUTATATION, LIST_LOCATIONS } from "../graphql/location_gql"


const AddLocation = () => {
	const toast = useToast()
	const [addLocation] = useMutation(ADD_LOCATION_MUTATATION,
		{
			refetchQueries: [
				LIST_LOCATIONS, // DocumentNode object parsed with gql
				'listLocations' // Query name
			],
		}
	)

	const onSubmit = (values) => {

		addLocation({
			variables: {
				...values,
			}
		}).then((data) => {
			toast({
				title: 'Location created.',
				status: 'success',
				duration: 4000,
				isClosable: true,
				colorScheme: "purple"
			})

		}).catch((e) => {
			console.log(e)
			toast({
				title: 'Location Already exists.',
				status: 'error',
				duration: 4000,
				isClosable: true,
				colorScheme: "purple"
			})
		})
	};

	return (
		<Flex bg="gray.100" align="center" justify="center" h="100vh">
			<Box bg="white" p={6} rounded="md" w={64}>
				<Formik
					initialValues={{
						name: "",
						city: "",
						number: "",
						street: "",
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
										type="string"
										variant="filled"
									/>
									<FormLabel htmlFor="city">city</FormLabel>
									<Field
										as={Input}
										id="city"
										name="city"
										type="string"
										variant="filled"
									/>
									<FormLabel htmlFor="street">street</FormLabel>
									<Field
										as={Input}
										id="street"
										name="street"
										type="string"
										variant="filled"
									/>
									<FormLabel htmlFor="number">number</FormLabel>
									<Field
										as={Input}
										id="number"
										name="number"
										type="number"
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

export default AddLocation;
