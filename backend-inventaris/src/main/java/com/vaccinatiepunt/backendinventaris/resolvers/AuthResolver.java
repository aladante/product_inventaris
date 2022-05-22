package com.vaccinatiepunt.backendinventaris.graphql.resolvers;

import java.util.List;
import java.util.stream.Collectors;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.vaccinatiepunt.backendinventaris.config.jwt.JwtUtils;
import com.vaccinatiepunt.backendinventaris.config.services.UserDetailsImpl;
import com.vaccinatiepunt.backendinventaris.payload.response.JwtResponse;
import com.vaccinatiepunt.backendinventaris.repo.RoleRepository;
import com.vaccinatiepunt.backendinventaris.repo.UserRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class TokenResolver implements GraphQLMutationResolver {
	private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	public String getToken(String username, String password) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(username, password));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt,
				userDetails.getId(),
				userDetails.getUsername(),
				roles));
	}

}
