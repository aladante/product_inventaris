package com.vaccinatiepunt.backendinventaris.resolvers;

import com.vaccinatiepunt.backendinventaris.entity.Location;
import com.vaccinatiepunt.backendinventaris.payload.request.LocationRequest;
import com.vaccinatiepunt.backendinventaris.payload.response.LocationResponse;
import com.vaccinatiepunt.backendinventaris.service.location.LocationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
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

	@PreAuthorize("hasAuthority('USER')")
	@MutationMapping(name = "getLocation", value = "getLocation")
	public Location getLocation(@Argument String name) {
		return locationService.getLocationByName(name);
	}

	@PreAuthorize("hasAuthority('ADMIN')")
	@QueryMapping(name = "listLocations", value = "listLocations")
	public LocationResponse getLocations(@Argument String name) {
		System.out.println("in here");
		LocationResponse response = new LocationResponse(locationService.listLocations());
		return response;
	}
}
