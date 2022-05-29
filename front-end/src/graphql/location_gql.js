import { gql } from '@apollo/client';

export const LIST_PRODUCTS_ON_LOCATION = gql`
  query listProductsonLocation($id: ID!){
	  listProductsonLocation(locationId: $id){
		id,
		amount,
		expireDate
		product {
			name
		  }

	  }
  }`;

export const DELETE_PRODUCT_AT_LOCATION = gql`
  mutation deleteProductAtLocation(
    $id: ID!
  ) {
    deleteProductAtLocation( id: $id ) {
		  deleted
    }
  }`;
