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

