package com.vaccinatiepunt.backendinventaris.repo;

import java.util.Optional;

import com.vaccinatiepunt.backendinventaris.entity.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	Optional<Product> findByName(String name);
}
