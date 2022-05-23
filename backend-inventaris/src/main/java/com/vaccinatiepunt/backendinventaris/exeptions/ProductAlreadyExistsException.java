package com.vaccinatiepunt.backendinventaris.exeptions;

import lombok.AccessLevel;
import lombok.NonNull;
import lombok.experimental.FieldDefaults;

import java.text.MessageFormat;

@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductAlreadyExistsException extends RuntimeException {

	@NonNull
	String name;

	public ProductAlreadyExistsException(String name) {
		this.name = name;
	}

	@Override
	public String getMessage() {
		return MessageFormat.format("User already exists with username ''{0}''", name);
	}
}
