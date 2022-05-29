package com.vaccinatiepunt.backendinventaris.resolvers;

import com.vaccinatiepunt.backendinventaris.entity.AuthRequest;
import com.vaccinatiepunt.backendinventaris.entity.User;
import com.vaccinatiepunt.backendinventaris.payload.request.SignupRequest;
import com.vaccinatiepunt.backendinventaris.payload.response.JwtResponse;
import com.vaccinatiepunt.backendinventaris.service.user.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Controller
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
@Validated
public class AuthResolver {

	@Autowired
	UserService userService;

	@MutationMapping(name = "login", value = "login")
	public JwtResponse login(@Argument AuthRequest input) {
		JwtResponse response = userService.login(input);
		return response;
	}

	@MutationMapping(name = "checkJwt", value = "checkJwt")
	@PreAuthorize("hasAnyAuthority('ROLE_USER', 'ROLE_ADMIN')")
	public String checkJwt(@Argument String jwt) {
		return jwt;
	}

	@MutationMapping(name = "createUser", value = "createUser")
	public User createUser(@Argument SignupRequest input) {
		return userService.createUser(input);
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	public Boolean deleteUser(long id) {
		return userService.deleteUser(id);
	}

}
