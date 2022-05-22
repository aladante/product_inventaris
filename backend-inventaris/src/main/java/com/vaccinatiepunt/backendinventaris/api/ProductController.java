package com.vaccinatiepunt.backendinventaris.api;

import com.vaccinatiepunt.backendinventaris.entity.Product;
import com.vaccinatiepunt.backendinventaris.repo.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/product")
public class ProductController {

	@Autowired
	ProductRepository productRepository;

	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}

	@GetMapping("/product/{name}")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public String getProduct(@PathVariable String name) {
		Product product = productRepository.findByName(name)
				.orElseThrow(() -> new RuntimeException("Error: Role is not found."));

		return "pl";

	}

	@PostMapping("/mod")
	@PreAuthorize("hasRole('MODERATOR')")
	public String createProduct() {
		return "Moderator Board.";
	}
}
