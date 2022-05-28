import { Box, Flex, Heading, Text } from '@chakra-ui/layout';


const baseComponent = (props) => {
	return (
		<Flex width="100vh" >
			{props}
		</Flex>
	)
}

export default baseComponent;
