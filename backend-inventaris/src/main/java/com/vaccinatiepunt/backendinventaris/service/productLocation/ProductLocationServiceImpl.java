package com.vaccinatiepunt.backendinventaris.service.productLocation;

import java.sql.Date;
import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Location;
import com.vaccinatiepunt.backendinventaris.entity.Product;
import com.vaccinatiepunt.backendinventaris.entity.ProductsOnLocation;
import com.vaccinatiepunt.backendinventaris.exeptions.LocationNotFoundException;
import com.vaccinatiepunt.backendinventaris.exeptions.ProductAtLocationAlreadyExistsException;
import com.vaccinatiepunt.backendinventaris.exeptions.ProductNotFoundException;
import com.vaccinatiepunt.backendinventaris.payload.request.ProductLocationRequest;
import com.vaccinatiepunt.backendinventaris.repo.LocationRepository;
import com.vaccinatiepunt.backendinventaris.repo.ProductLocationRepository;
import com.vaccinatiepunt.backendinventaris.repo.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
public class ProductLocationServiceImpl implements ProductLocationService {

	@Autowired
	ProductLocationRepository productLocationRepository;

	@Autowired
	ProductRepository productRepository;

	@Autowired
	LocationRepository locationRepository;

	@Override
	public List<ProductsOnLocation> listProductsOnLocation() {
		List<ProductsOnLocation> productsOnLocations = productLocationRepository.findAll();
		return productsOnLocations;
	}

	@Override
	public List<ProductsOnLocation> listProductsOnLocationByLocation(long id) {
		Location location = locationRepository.findById(id)
				.orElseThrow(() -> new LocationNotFoundException(id));
		List<ProductsOnLocation> productsOnLocations = productLocationRepository.findAllByLocation(location);
		System.out.println(productsOnLocations);
		System.out.println("LEANNNNNN");
		return productsOnLocations;
	}

	@Override
	public List<ProductsOnLocation> listProductsOnLocationByProductId(long id) {
		List<ProductsOnLocation> productsOnLocations = productLocationRepository.findAllByProductId(id);
		return productsOnLocations;
	}

	@Override
	public ProductsOnLocation createProductLocation(ProductLocationRequest productsOnLocationRequest) {

		Location location = locationRepository.findById(productsOnLocationRequest.getLocationId())
				.orElseThrow(() -> new LocationNotFoundException(productsOnLocationRequest.getLocationId()));

		Product product = productRepository.findById(productsOnLocationRequest.getProductId())
				.orElseThrow(() -> new ProductNotFoundException(productsOnLocationRequest.getProductId()));

		Date date = Date.valueOf(productsOnLocationRequest.getExpireDate());
		ProductsOnLocation productOnLocation = new ProductsOnLocation(location, product,
				date, productsOnLocationRequest.getAmount());

		boolean exists = productLocationRepository.existsByLocationIdAndProductIdAndExpireDate(location.getId(),
				product.getId(), date);
		if (exists) {
			System.out.println("EXISTS");
			throw new ProductAtLocationAlreadyExistsException(product.getName());
		}

		productLocationRepository.save(productOnLocation);
		return productOnLocation;
	}

	@Override
	public Boolean productLocationExists(long id) {
		return productLocationRepository.existsById(id);
	}

	@Override
	public Boolean deleteProductLocation(long id) {
		productLocationRepository.deleteById(id);
		return true;
	}

	// TODO FIX EXPETION
	@Override
	public ProductsOnLocation editProductLocation(long id, int amount) {
		ProductsOnLocation productsOnLocation = productLocationRepository.findById(id)
				.orElseThrow(() -> new ProductNotFoundException(id));

		int old_amount = productsOnLocation.getAmount();
		productsOnLocation.setAmount(old_amount + amount);
		productLocationRepository.save(productsOnLocation);
		return productsOnLocation;
	}
}
