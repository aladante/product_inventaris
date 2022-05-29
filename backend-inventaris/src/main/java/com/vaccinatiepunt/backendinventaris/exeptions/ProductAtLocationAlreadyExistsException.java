package com.vaccinatiepunt.backendinventaris.exeptions;

import lombok.AccessLevel;
import lombok.NonNull;
import lombok.experimental.FieldDefaults;

import java.text.MessageFormat;

@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductAtLocationAlreadyExistsException extends RuntimeException {

	@NonNull
	String name;

	public ProductAtLocationAlreadyExistsException(String name) {
		this.name = name;
	}

	@Override
	public String getMessage() {
		return MessageFormat.format("Product already exists at that location''{0}''", name);
	}
}
