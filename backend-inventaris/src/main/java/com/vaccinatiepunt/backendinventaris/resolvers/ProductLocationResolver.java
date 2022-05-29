package com.vaccinatiepunt.backendinventaris.resolvers;

import com.vaccinatiepunt.backendinventaris.entity.Product;
import com.vaccinatiepunt.backendinventaris.entity.ProductsOnLocation;
import com.vaccinatiepunt.backendinventaris.payload.request.ProductLocationRequest;
import com.vaccinatiepunt.backendinventaris.service.productLocation.ProductLocationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Controller
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
@Validated
public class ProductLocationResolver {

	@Autowired
	ProductLocationService productLocationService;

	@MutationMapping(name = "addProductAtLocation", value = "addProductAtLocation")
	public ProductsOnLocation createProductLocation(@Argument ProductLocationRequest input) {
		return productLocationService.createProductLocation(input);
	}

	//
	// @PreAuthorize("hasAnyAuthority('ROLE_USER', 'ROLE_ADMIN')")
	// @SchemaMapping(typeName = "Query", value = "listProducts")
	// public List<Product> getProducts() {
	// List<Product> products = productService.listProducts();
	// return products;
	// }
}
