package com.vaccinatiepunt.backendinventaris.resolvers;

import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Location;
import com.vaccinatiepunt.backendinventaris.entity.Product;
import com.vaccinatiepunt.backendinventaris.entity.ProductsOnLocation;
import com.vaccinatiepunt.backendinventaris.payload.request.ProductLocationRequest;
import com.vaccinatiepunt.backendinventaris.repo.LocationRepository;
import com.vaccinatiepunt.backendinventaris.service.location.LocationService;
import com.vaccinatiepunt.backendinventaris.service.productLocation.ProductLocationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
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
public class ProductLocationResolver {

	@Autowired
	ProductLocationService productLocationService;

	@Autowired
	LocationService locationService;

	@MutationMapping(name = "addProductAtLocation", value = "addProductAtLocation")
	public ProductsOnLocation createProductLocation(@Argument ProductLocationRequest input) {
		System.out.println(input.getExpireDate());
		return productLocationService.createProductLocation(input);
	}

	@PreAuthorize("hasAnyAuthority('ROLE_USER', 'ROLE_ADMIN')")
	@SchemaMapping(typeName = "Query", value = "listProductsonLocation")
	public List<ProductsOnLocation> getProductsOnLocation(@Argument long locationId) {

		Location productOnLocation = locationService.getLocationById(locationId);
		List<ProductsOnLocation> products = productOnLocation.getProductsOnLocation();

		return products;
	}
}
