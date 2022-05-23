package com.vaccinatiepunt.backendinventaris.service.user;

import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.AuthRequest;
import com.vaccinatiepunt.backendinventaris.entity.User;
import com.vaccinatiepunt.backendinventaris.payload.request.SignupRequest;
import com.vaccinatiepunt.backendinventaris.payload.response.JwtResponse;

public interface UserService {

	JwtResponse login(AuthRequest authRequest);

	List<User> listUser();

	User getUser(long id);

	User createUser(SignupRequest signupRequest);

	Boolean deleteUser(long id);

}
