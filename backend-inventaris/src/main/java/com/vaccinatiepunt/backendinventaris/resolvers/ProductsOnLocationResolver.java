package com.vaccinatiepunt.backendinventaris.resolvers;

import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Location;
import com.vaccinatiepunt.backendinventaris.entity.Product;
import com.vaccinatiepunt.backendinventaris.entity.ProductsOnLocation;
import com.vaccinatiepunt.backendinventaris.service.location.LocationService;
import com.vaccinatiepunt.backendinventaris.service.product.ProductService;
import com.vaccinatiepunt.backendinventaris.service.productlocation.ProductsOnLocationService;

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
public class ProductsOnLocationResolver {

	@Autowired
	ProductsOnLocationService productOnLocationService;

	@Autowired
	ProductService productService;

	@Autowired
	LocationService locationService;

	@PreAuthorize("hasAuthority('USER')")
	@MutationMapping(name = "getProductOnLocation", value = "getProductOnLocation")
	public ProductsOnLocation getProductOnLocationWithProduct(@Argument String name) {
		Product product = productService.getProductByName(name);
		ProductsOnLocation productsOnLocation = productOnLocationService.getProductsOnLocationByProduct(product);
		return productsOnLocation;
	}

	@PreAuthorize("hasAuthority('USER')")
	@MutationMapping(name = "getAllProductsOnLocation", value = "getProductOnLocation")
	public List<ProductsOnLocation> getAllProdcutsOnLocation(@Argument String name) {
		List<ProductsOnLocation> allProductsOnLocation = productOnLocationService.listProductsoOnLocations();
		return allProductsOnLocation;
	}

	@PreAuthorize("hasAuthority('USER')")
	@MutationMapping(name = "getAllProductsOnLocation", value = "getProductOnLocation")
	public ProductsOnLocation getLocationProducts(@Argument String name) {
		Location location = locationService.getLocationByName(name);
		ProductsOnLocation productsOnLocation = productOnLocationService.getProductsOnLocationByLocation(location);
		return productsOnLocation;
	}
}
