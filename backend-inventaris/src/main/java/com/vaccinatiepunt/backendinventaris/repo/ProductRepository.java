package com.vaccinatiepunt.backendinventaris.repo;

import java.util.List;
import java.util.Optional;

import com.vaccinatiepunt.backendinventaris.entity.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

	List<Product> findAll();

	Optional<Product> findByName(String name);

	Boolean existsByName(String name);
}
