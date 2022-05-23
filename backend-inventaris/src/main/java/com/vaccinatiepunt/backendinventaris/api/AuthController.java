package com.vaccinatiepunt.backendinventaris.api;

import javax.validation.Valid;

import com.vaccinatiepunt.backendinventaris.entity.AuthRequest;
import com.vaccinatiepunt.backendinventaris.payload.request.SignupRequest;
import com.vaccinatiepunt.backendinventaris.payload.response.JwtResponse;
import com.vaccinatiepunt.backendinventaris.payload.response.MessageResponse;
import com.vaccinatiepunt.backendinventaris.service.user.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

	@Autowired
	UserService userService;

	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody AuthRequest authRequest) {
		JwtResponse response = userService.login(authRequest);
		return ResponseEntity.ok(response);
	}

	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {

		userService.createUser(signUpRequest);
		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
}
