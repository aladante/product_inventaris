package com.vaccinatiepunt.backendinventaris.payload.request;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.sql.Date;

import javax.validation.constraints.NotBlank;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductRequest {

	@NotBlank
	String name;

	@NotBlank
	Date date;

}
