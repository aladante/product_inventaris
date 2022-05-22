package com.vaccinatiepunt.backendinventaris.exeptions;

import lombok.AccessLevel;
import lombok.NonNull;
import lombok.experimental.FieldDefaults;

import java.text.MessageFormat;

@FieldDefaults(level = AccessLevel.PRIVATE)
public class UserNotFoundException extends RuntimeException {

	@NonNull
	long id;

	public UserNotFoundException(long id) {
		this.id = id;
	}

	@Override
	public String getMessage() {
		return MessageFormat.format("User with Id ''{0}'' could not be found", id);
	}

}
