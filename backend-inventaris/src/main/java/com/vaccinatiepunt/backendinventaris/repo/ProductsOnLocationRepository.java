package com.vaccinatiepunt.backendinventaris.repo;

import java.util.List;
import java.util.Optional;

import com.vaccinatiepunt.backendinventaris.entity.Location;
import com.vaccinatiepunt.backendinventaris.entity.Product;
import com.vaccinatiepunt.backendinventaris.entity.ProductsOnLocation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsOnLocationRepository extends JpaRepository<ProductsOnLocation, Long> {

	List<ProductsOnLocation> findAll();

	Optional<ProductsOnLocation> findByProduct(Product product);

	Optional<ProductsOnLocation> findByLocation(Location location);

	Boolean existsByProduct(String Product);
}
