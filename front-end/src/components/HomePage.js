import {
	Button,
	Text,
	Flex,
	Box,
} from "@chakra-ui/react";
const HomeComponent = (role) => {
	console.log("hello world")
	console.log(role)

	return (
		<Box width="100vw" alignItems="center">
			<Flex direction="column" width="60%" >
				<Button type="submit" colorScheme="purple" width="full">
					product
				</Button>
				<Button type="submit" colorScheme="purple" width="full">
					Location
				</Button>
				<Text>
					hello world
				</Text>

				{role === "ADMIN" ? "ADMIN" : <>
					<Button type="submit" colorScheme="purple" width="full">
						add product
					</Button>
					<Button type="submit" colorScheme="purple" width="full">
						add Location
					</Button>
				</>
				}
			</Flex >
		</Box>
	)
}
export default HomeComponent;
