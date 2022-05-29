package com.vaccinatiepunt.backendinventaris.service.location;

import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Location;
import com.vaccinatiepunt.backendinventaris.payload.request.LocationRequest;

public interface LocationService {

	List<Location> listLocations();

	Location getLocationByName(String name);

	Location getLocationById(long id);

	Location createLocation(LocationRequest locationRequest);

	Boolean locationExists(String name);

	Boolean deleteLocation(long id);

}
