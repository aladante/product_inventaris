
package com.vaccinatiepunt.backendinventaris.payload.response;

import java.util.ArrayList;
import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Location;

public class LocationResponse {
	private List<Location> locations;

	public LocationResponse(Location location) {
		List<Location> locations = new ArrayList<Location>();
		this.locations = locations;
	}

	public LocationResponse(List<Location> locations) {
		this.locations = locations;
	}

	public List<Location> getLocations() {
		return locations;
	}

	public void setLocations(List<Location> location) {
		this.locations = location;
	}

}
