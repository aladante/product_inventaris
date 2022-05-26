package com.vaccinatiepunt.backendinventaris.exeptions;

import java.text.MessageFormat;

import lombok.AccessLevel;
import lombok.NonNull;
import lombok.experimental.FieldDefaults;

@FieldDefaults(level = AccessLevel.PRIVATE)
public class LocationNotFoundException extends RuntimeException {

	@NonNull
	String name;

	public LocationNotFoundException(long name) {
		this.name = String.valueOf(name);
	}

	public LocationNotFoundException(String name) {
		this.name = name;
	}

	@Override
	public String getMessage() {
		return MessageFormat.format("User with Id ''{0}'' could not be found", name);
	}

}
