package com.vaccinatiepunt.backendinventaris.repo;

import java.util.List;
import java.util.Optional;

import com.vaccinatiepunt.backendinventaris.entity.Location;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long> {

	List<Location> findAll();

	Optional<Location> findByName(String name);

	Optional<Location> findById(long id);

	Boolean existsByName(String name);
}
