import { gql } from '@apollo/client';

export const ALL_PRODUCTS_ON_LOCATION_QUERY = gql`
  query listProductsonLocations {
    listProductsonLocations {
			id,
			amount,
			expireDate
			product {
				name
			}
			location {
			  name
		}
    }
  }`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct(
    $id: ID!
  ) {
    deleteProduct( id: $id ) {
		  deleted
    }
  }`;
