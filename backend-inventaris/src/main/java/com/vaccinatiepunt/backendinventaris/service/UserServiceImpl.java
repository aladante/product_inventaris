package com.vaccinatiepunt.backendinventaris.service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.vaccinatiepunt.backendinventaris.config.jwt.JwtUtils;
import com.vaccinatiepunt.backendinventaris.config.services.UserDetailsImpl;
import com.vaccinatiepunt.backendinventaris.entity.AuthRequest;
import com.vaccinatiepunt.backendinventaris.entity.ERole;
import com.vaccinatiepunt.backendinventaris.entity.Role;
import com.vaccinatiepunt.backendinventaris.entity.User;
import com.vaccinatiepunt.backendinventaris.exeptions.UserNotFoundException;
import com.vaccinatiepunt.backendinventaris.exeptions.UsernameAlreadyExistsException;
import com.vaccinatiepunt.backendinventaris.payload.request.SignupRequest;
import com.vaccinatiepunt.backendinventaris.payload.response.JwtResponse;
import com.vaccinatiepunt.backendinventaris.payload.response.MessageResponse;
import com.vaccinatiepunt.backendinventaris.repo.RoleRepository;
import com.vaccinatiepunt.backendinventaris.repo.UserRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

	final AuthenticationManager authenticationManager;
	final UserRepository userRepository;
	final RoleRepository roleRepository;
	final PasswordEncoder passwordEncoder;
	final JwtUtils jwtUtils;
	final PasswordEncoder encoder;

	@Override
	public JwtResponse login(AuthRequest authRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return new JwtResponse(jwt,
				userDetails.getId(),
				userDetails.getUsername(),
				roles);
	}

	@Override
	public List<User> listUser() {
		return userRepository.findAll();
	}

	@Override
	public User getUser(long id) {
		return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
	}

	@Override
	public User createUser(SignupRequest signUpRequest) {
		if (userRepository.existsByUsername(signUpRequest.getUsername())) {
			throw new UsernameAlreadyExistsException(signUpRequest.getUsername());
		}

		// Create new user's account
		User user = new User(signUpRequest.getUsername(),
				encoder.encode(signUpRequest.getPassword()));

		Set<String> strRoles = signUpRequest.getRole();
		Set<Role> roles = new HashSet<>();

		if (strRoles == null) {
			Role userRole = roleRepository.findByName(ERole.ROLE_USER)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(userRole);
		} else {
			strRoles.forEach(role -> {
				System.out.println(role);
				switch (role) {
					case "admin":
						Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(adminRole);

						break;
					case "mod":
						Role modRole = roleRepository.findByName(ERole.ROLE_MODERATOR)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(modRole);

						break;
					default:
						Role userRole = roleRepository.findByName(ERole.ROLE_USER)
								.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
						roles.add(userRole);
				}
			});
		}

		user.setRoles(roles);
		userRepository.save(user);
		return user;
	}

	@Override
	public Boolean deleteUser(long id) {
		User user = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
		userRepository.delete(user);
		return true;
	}

}
