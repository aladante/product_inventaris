
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';

import { DELETE_PRODUCT} from "../graphql/product_gql"

const AddOrDelete = (props) => {
	const [deleteProductAtLocation] = useMutation(DELETE_PRODUCT_AT_LOCATION, {
		refetchQueries: [
			LIST_PRODUCTS_ON_LOCATION, // DocumentNode object parsed with gql
			'listProductsonLocation', // Query name
			ALL_PRODUCTS_ON_LOCATION_QUERY, // DocumentNode object parsed with gql
			'listProductsonLocations' // Query name
		],
	})

	return (
		<Flex width="full" justify="space-around" paddingTop={10}>
			<Heading> delete {props.name}</Heading>


		</Flex>
	)
}

export default AddOrDelete;
