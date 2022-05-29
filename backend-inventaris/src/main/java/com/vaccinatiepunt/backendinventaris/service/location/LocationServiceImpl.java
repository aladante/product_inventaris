package com.vaccinatiepunt.backendinventaris.service.location;

import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Location;
import com.vaccinatiepunt.backendinventaris.exeptions.LocationAlreadyExistsException;
import com.vaccinatiepunt.backendinventaris.exeptions.LocationNotFoundException;
import com.vaccinatiepunt.backendinventaris.payload.request.LocationRequest;
import com.vaccinatiepunt.backendinventaris.repo.LocationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
public class LocationServiceImpl implements LocationService {

	@Autowired
	LocationRepository locationRepository;

	@Override
	public List<Location> listLocations() {
		List<Location> locations = locationRepository.findAll();
		return locations;
	}

	@Override
	public Location getLocationByName(String name) {
		Location location = locationRepository.findByName(name)
				.orElseThrow(() -> new LocationNotFoundException(name));
		return location;
	}

	@Override
	public Location createLocation(LocationRequest locationRequest) {
		if (locationRepository.existsByName(locationRequest.getName())) {
			throw new LocationAlreadyExistsException(locationRequest.getName());
		}
		Location location = new Location(locationRequest.getName(), locationRequest.getCity(),
				locationRequest.getStreet(), locationRequest.getNumber());
		locationRepository.save(location);
		return location;
	}

	@Override
	public Boolean locationExists(String name) {
		return locationRepository.existsByName(name);
	}

	@Override
	public Boolean deleteLocation(long id) {
		Location location = locationRepository.findById(id).orElseThrow(() -> new LocationNotFoundException(id));
		locationRepository.delete(location);
		return true;
	}

	@Override
	public Location getLocationById(long id) {
		Location location = locationRepository.findById(id)
				.orElseThrow(() -> new LocationNotFoundException(id));
		return location;
	}

}
