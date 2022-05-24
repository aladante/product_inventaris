package com.vaccinatiepunt.backendinventaris.service.location;

import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Location;
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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Location getLocationByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Location createLocation(LocationRequest locationRequest) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean productExists(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean deleteLocation(long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
