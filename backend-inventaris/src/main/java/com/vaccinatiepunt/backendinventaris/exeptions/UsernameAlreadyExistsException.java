package com.vaccinatiepunt.backendinventaris.exeptions;

import lombok.AccessLevel;
import lombok.NonNull;
import lombok.experimental.FieldDefaults;

import java.text.MessageFormat;

@FieldDefaults(level = AccessLevel.PRIVATE)
public class UsernameAlreadyExistsException extends RuntimeException {

	@NonNull
	String username;

	public UsernameAlreadyExistsException(String username) {
		this.username = username;
	}

	@Override
	public String getMessage() {
		return MessageFormat.format("User already exists with username ''{0}''", username);
	}
}
