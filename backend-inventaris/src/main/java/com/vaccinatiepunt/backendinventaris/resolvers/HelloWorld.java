package com.vaccinatiepunt.backendinventaris.resolvers;

import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

@Controller
public class HelloWorld {

	@SchemaMapping(typeName = "Query", value = "hello")
	public String hello() {
		return "hello";
	}

}
