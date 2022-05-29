package com.vaccinatiepunt.backendinventaris.repo;

import java.util.List;
import java.util.Optional;

import com.vaccinatiepunt.backendinventaris.entity.ProductsOnLocation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductLocationRepository extends JpaRepository<ProductsOnLocation, Long> {

	List<ProductsOnLocation> findAll();

	List<ProductsOnLocation> findAllByLocationId(long locationId);

	List<ProductsOnLocation> findAllByProductId(long productId);

	Optional<ProductsOnLocation> findById(long id);

	Boolean existsById(long id);
}
