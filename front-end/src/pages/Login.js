import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field } from "formik";
import {
	Box,
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Input,
	VStack,
	useToast
} from "@chakra-ui/react";
import { useMutation, useApolloClient } from "@apollo/client";

import { AUTH_TOKEN } from "../constants/constants";

import { LOGIN_MUTATION } from '../graphql/login_gql'


const Login = () => {
	const navigate = useNavigate();
	const [login] = useMutation(LOGIN_MUTATION)
	const toast = useToast()

	const onSubmit = (values) => {
		let token;
		login({
			variables: {
				...values,
			}
		}).then((data) => {
			token = data.data.login.token
			localStorage.setItem(AUTH_TOKEN, token)
			navigate("/")
			window.location.reload(false)
		}).catch((e) => {
			toast({
				title: "Email or password is incorrect",
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
						username: "",
						password: "",
						rememberMe: false
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
										type="password"
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
								<Field
									as={Checkbox}
									id="rememberMe"
									name="rememberMe"
									colorScheme="purple"
								>
									Remember me?
								</Field>
								<Button type="submit" colorScheme="purple" width="full">
									Login
								</Button>
							</VStack>
						</form>
					)}
				</Formik>
			</Box>
		</Flex>
	);
}
export default Login;
