import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation login(
    $username: String!
    $password: String!
  ) {
    login(input : {username: $username, password: $password}) {
      token
    }
  }`
	;

export const SIGNUP_MUTATION = gql`
  mutation createUser(
    $username: String!
    $password: String!
  ) {
    createUser(input : {username: $username, password: $password}) {
		id	
    }
  }`
	;
export const CHECK_JWT = gql`
  query checkJwt($jwt: String!) {
	  checkJwt(jwt: $jwt){
		  jwt
	  }
  }`;
