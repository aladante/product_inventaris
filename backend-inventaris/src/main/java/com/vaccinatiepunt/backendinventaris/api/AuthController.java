package com.vaccinatiepunt.backendinventaris.api;

import com.vaccinatiepunt.backendinventaris.entity.AuthRequest;
import com.vaccinatiepunt.backendinventaris.utils.JWTUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class AuthController {
	@Autowired
	private JWTUtils jwtUtils;
	@Autowired
	private AuthenticationManager authenticationManager;

	@GetMapping("/welcome")
	public String welcome() {
		return "Welcome!";
	}

	@PostMapping("/authenticate")
	public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
		try {
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(authRequest.getUserName(), authRequest.getPassword()));
		} catch (Exception ex) {
			System.out.println(ex);
			throw ex;
			// throw new Exception("inavalid username/password");
		}
		return jwtUtils.generateToken(authRequest.getUserName());
	}

}
