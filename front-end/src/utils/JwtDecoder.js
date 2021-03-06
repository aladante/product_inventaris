import { Buffer } from 'buffer';
import { AUTH_TOKEN } from '../constants/constants'

export const parseJwt = (token) => {
	var base64Payload = token.split('.')[1];
	var payload = Buffer.from(base64Payload, 'base64');
	return JSON.parse(payload.toString());
}

export const getRole = (token) => {
	let payload = parseJwt(token)
	return payload.ROLES
}
