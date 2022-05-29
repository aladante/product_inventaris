package com.vaccinatiepunt.backendinventaris.resolvers;

import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;

@Controller
public class HelloWorld {


	@SchemaMapping(typeName = "Query", value = "hello")
	@PreAuthorize("hasAuthority('USER')")
	public String hello() {
		return "hello";
	}

	@SchemaMapping(typeName = "Query", value = "helllo")
	public String helllo() {
		return "hello";
	}

}
