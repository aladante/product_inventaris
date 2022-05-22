package com.vaccinatiepunt.backendinventaris.resolvers;

import javax.validation.Valid;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.vaccinatiepunt.backendinventaris.entity.AuthRequest;
import com.vaccinatiepunt.backendinventaris.entity.User;
import com.vaccinatiepunt.backendinventaris.payload.request.LoginRequest;
import com.vaccinatiepunt.backendinventaris.payload.request.SignupRequest;
import com.vaccinatiepunt.backendinventaris.payload.response.JwtResponse;
import com.vaccinatiepunt.backendinventaris.service.UserService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Component
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
@Validated
public class AuthResolver implements GraphQLMutationResolver {

	UserService userService;

	@PreAuthorize("isAnonymous()")
	public JwtResponse login(@Valid AuthRequest input) {
		return userService.login(input);
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	public User createUser(@Valid SignupRequest signupRequest) {
		return userService.createUser(signupRequest);
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	public Boolean deleteUser(long id) {
		return userService.deleteUser(id);
	}

}
