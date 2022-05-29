package com.vaccinatiepunt.backendinventaris.resolvers;

import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Location;
import com.vaccinatiepunt.backendinventaris.payload.request.LocationRequest;
import com.vaccinatiepunt.backendinventaris.service.location.LocationService;

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
public class LocationResolver {

	@Autowired
	LocationService locationService;

	@MutationMapping(name = "createLocation", value = "createLocation")
	public Location createLocation(@Argument LocationRequest input) {
		return locationService.createLocation(input);
	}

	@PreAuthorize("hasAnyAuthority('ROLE_USER', 'ROLE_ADMIN')")
	@SchemaMapping(typeName = "Query", value = "getLocation")
	public Location getLocationById(@Argument long id) {
		return locationService.getLocationById(id);
	}

	@PreAuthorize("hasAnyAuthority('ROLE_USER', 'ROLE_ADMIN')")
	@SchemaMapping(typeName = "Query", value = "listLocations")
	public List<Location> getLocations(@Argument String name) {
		List<Location> locations = locationService.listLocations();
		return locations;
	}
}
