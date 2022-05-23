package com.vaccinatiepunt.backendinventaris.resolvers;

import com.vaccinatiepunt.backendinventaris.entity.Product;
import com.vaccinatiepunt.backendinventaris.payload.request.ProductRequest;
import com.vaccinatiepunt.backendinventaris.service.product.ProductService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Controller
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
@Validated
public class ProductResolver {

	@Autowired
	ProductService productService;

	@MutationMapping(name = "createProduct", value = "createProduct")
	public Product addProduct(@Argument ProductRequest input) {
		return productService.createProduct(input);
	}

	@PreAuthorize("hasAuthority('USER')")
	@MutationMapping(name = "getProduct", value = "getProduct")
	public Product getProdcut(@Argument String name) {
		return productService.getProductByName(name);
	}

}
