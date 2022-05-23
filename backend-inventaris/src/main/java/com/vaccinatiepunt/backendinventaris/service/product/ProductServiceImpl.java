package com.vaccinatiepunt.backendinventaris.service.product;

import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Product;
import com.vaccinatiepunt.backendinventaris.exeptions.ProductAlreadyExistsException;
import com.vaccinatiepunt.backendinventaris.exeptions.ProductNotFoundException;
import com.vaccinatiepunt.backendinventaris.payload.request.ProductRequest;
import com.vaccinatiepunt.backendinventaris.repo.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

	@Autowired
	ProductRepository productRepository;

	@Override
	public List<Product> listProducts() {
		List<Product> products = productRepository.findAll();
		return products;
	}

	@Override
	public Product getProductByName(String name) {
		Product product = productRepository.findByName(name)
				.orElseThrow(() -> new ProductNotFoundException(name));
		return product;
	}

	@Override
	public Product createProduct(ProductRequest productRequest) {
		if (productRepository.existsByName(productRequest.getName())) {
			throw new ProductAlreadyExistsException(productRequest.getName());
		}
		Product product = new Product(productRequest.getName());
		productRepository.save(product);
		return product;
	}

	@Override
	public Boolean productExists(String name) {
		return productRepository.existsByName(name);
	}

	@Override
	public Boolean deleteProduct(long id) {
		Product product = productRepository.findById(id).orElseThrow(() -> new ProductNotFoundException(id));
		productRepository.delete(product);
		return true;

	}

}
