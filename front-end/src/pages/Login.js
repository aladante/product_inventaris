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
	VStack
} from "@chakra-ui/react";
import { gql, useMutation } from "@apollo/client";
import { AUTH_TOKEN } from "../constants/constants";

const LOGIN_MUTATION = gql`
  mutation login(
    $username: String!
    $password: String!
  ) {
    login(input : {username: $username, password: $password}) {
      token
    }
  }`;

const Login = () => {
	const navigate = useNavigate();
	const [login] = useMutation(LOGIN_MUTATION)

	const onSubmit = (values) => {
		console.log(values)

		login({
			variables: {
				...values,
			}
		}).then((data) => {
			localStorage.setItem(AUTH_TOKEN, data.data.login.token)
			navigate("/")
		}).catch((e) => {
			console.log(e)
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
