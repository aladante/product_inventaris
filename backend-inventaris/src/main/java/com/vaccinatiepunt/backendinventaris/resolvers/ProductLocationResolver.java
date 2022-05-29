package com.vaccinatiepunt.backendinventaris.resolvers;

import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Location;
import com.vaccinatiepunt.backendinventaris.entity.ProductsOnLocation;
import com.vaccinatiepunt.backendinventaris.payload.request.EditProductLocationRequest;
import com.vaccinatiepunt.backendinventaris.payload.request.ProductLocationRequest;
import com.vaccinatiepunt.backendinventaris.payload.response.DeletedResponse;
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
		return productLocationService.createProductLocation(input);
	}

	@MutationMapping(name = "editProductAtLocation", value = "editProductAtLocation")
	public ProductsOnLocation editProductLocation(@Argument EditProductLocationRequest input) {
		System.out.println(input.getAmount());
		return productLocationService.editProductLocation(input.getId(), input.getAmount());
	}

	@MutationMapping(name = "deleteProductAtLocation", value = "deleteProductAtLocation")
	public DeletedResponse deleteProductLocation(@Argument long id) {
		productLocationService.deleteProductLocation(id);
		DeletedResponse deletedResponse = new DeletedResponse(true);
		return deletedResponse;
	}

	@PreAuthorize("hasAnyAuthority('ROLE_USER', 'ROLE_ADMIN')")
	@SchemaMapping(typeName = "Query", value = "listProductsonLocation")
	public List<ProductsOnLocation> getProductsOnLocation(@Argument long locationId) {
		Location productOnLocation = locationService.getLocationById(locationId);
		List<ProductsOnLocation> products = productOnLocation.getProductsOnLocation();
		return products;
	}
}
