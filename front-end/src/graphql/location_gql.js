import { gql } from '@apollo/client';

export const ADD_LOCATION_MUTATATION = gql`
  mutation createLocation(
    $street: String!
    $number: Int!
    $city: String!
    $name: String!
  ) {
    createLocation(input : {name: $name, city: $city, number: $number, street : $street }) {
     name 
    }
  }`;

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

export const LIST_LOCATIONS = gql`
  query listLocations {
	  listLocations {
			id,
			name,
			city,
			street,
			number
	  }
  }`;

