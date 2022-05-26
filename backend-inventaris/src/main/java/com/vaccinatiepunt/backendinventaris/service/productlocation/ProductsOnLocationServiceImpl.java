package com.vaccinatiepunt.backendinventaris.service.productlocation;

import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Location;
import com.vaccinatiepunt.backendinventaris.entity.Product;
import com.vaccinatiepunt.backendinventaris.entity.ProductsOnLocation;
import com.vaccinatiepunt.backendinventaris.exeptions.ProductNotFoundException;
import com.vaccinatiepunt.backendinventaris.exeptions.LocationNotFoundException;
import com.vaccinatiepunt.backendinventaris.repo.ProductsOnLocationRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@FieldDefaults(level = AccessLevel.PRIVATE, makeFinal = true)
@RequiredArgsConstructor
public class ProductsOnLocationServiceImpl implements ProductsOnLocationService {

	@Autowired
	ProductsOnLocationRepository productsOnLocationsRepository;

	@Override
	public List<ProductsOnLocation> listProductsoOnLocations() {
		List<ProductsOnLocation> productsOnLocations = productsOnLocationsRepository.findAll();
		return productsOnLocations;
	}

	@Override
	public ProductsOnLocation getProductsOnLocationByProduct(Product product) {
		ProductsOnLocation productsOnLocation = productsOnLocationsRepository.findByProduct(product)
				.orElseThrow(() -> new ProductNotFoundException(product.getName()));
		return productsOnLocation;
	}

	@Override
	public ProductsOnLocation getProductsOnLocationByLocation(Location location) {

		ProductsOnLocation productsOnLocation = productsOnLocationsRepository.findByLocation(location)
				.orElseThrow(() -> new LocationNotFoundException(location.getName()));
		return productsOnLocation;
	}

	@Override
	public ProductsOnLocation addProductsToLocation(ProductsOnLocation productsOnLocation) {
		// TODO Auto-generated method stub
		return null;
	}

}
