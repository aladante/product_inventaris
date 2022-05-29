package com.vaccinatiepunt.backendinventaris.repo;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import com.vaccinatiepunt.backendinventaris.entity.Location;
import com.vaccinatiepunt.backendinventaris.entity.ProductsOnLocation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductLocationRepository extends JpaRepository<ProductsOnLocation, Long> {

	List<ProductsOnLocation> findAll();

	List<ProductsOnLocation> findAllByLocation(Location location);

	List<ProductsOnLocation> findAllByProductId(long productId);

	Optional<ProductsOnLocation> findById(long id);

	Boolean existsById(long id);

	Boolean existsByLocationIdAndProductIdAndExpireDate(long locationId, long productId, Date expireDate);
}
