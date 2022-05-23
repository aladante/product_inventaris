package com.vaccinatiepunt.backendinventaris.payload.request;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.NotBlank;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class AuthRequest {

	@NotBlank
	String username;

	@NotBlank
	String password;
}
