import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field } from "formik";
import {
	Box,
	Button,
	Flex,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	VStack,
	useToast,
	Heading
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { SIGNUP_MUTATION } from '../graphql/login_gql'
import { HOME } from '../constants/routeConstants';


const Signup = () => {
	const navigate = useNavigate();
	const [signup] = useMutation(SIGNUP_MUTATION)
	const toast = useToast()

	const onSubmit = (values) => {
		signup({
			variables: {
				...values,
			}
		}).then((data) => {
			console.log(data)
			toast({
				title: 'account created.',
				status: 'success',
				duration: 4000,
				isClosable: true,
				colorScheme: "purple"
			})
			navigate("/")
		}).catch((e) => {
			console.log(e)
			toast({
				title: "Email already exist",
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
				<Heading>Create User</Heading>
				<Formik
					initialValues={{
						username: "",
						password: "",
					}}
					onSubmit={(values) => {
						onSubmit(values)
					}}
				>
					{({ handleSubmit, errors, touched }) => (
						<form onSubmit={handleSubmit}>
							<VStack spacing={4} align="flex-start">
								<FormControl>
									<FormLabel htmlFor="email">Email Address</FormLabel>
									<Field
										as={Input}
										id="username"
										name="username"
										type="username"
										variant="filled"
									/>
								</FormControl>
								<FormControl isInvalid={!!errors.password && touched.password}>
									<FormLabel htmlFor="password">Password</FormLabel>
									<Field
										as={Input}
										id="password"
										name="password"
										type="string"
										variant="filled"
										validate={(value) => {
											let error;
											if (value.length < 5) {
												error = "Password must contain at least 6 characters";
											}
											return error;
										}}
									/>
									<FormErrorMessage>{errors.password}</FormErrorMessage>
								</FormControl>
								<Button type="submit" colorScheme="purple" width="full">
									Create account
								</Button>

								<Button type="submit" variant="outline" onClick={() => navigate(
									HOME)} colorScheme="purple" width="full">
									HOME
								</Button>
							</VStack>
						</form>
					)}
				</Formik>
			</Box>
		</Flex>
	);
}

export default Signup;
