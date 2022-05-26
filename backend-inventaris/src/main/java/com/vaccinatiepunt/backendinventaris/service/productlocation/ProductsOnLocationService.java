package com.vaccinatiepunt.backendinventaris.service.productlocation;

import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Location;
import com.vaccinatiepunt.backendinventaris.entity.Product;
import com.vaccinatiepunt.backendinventaris.entity.ProductsOnLocation;

public interface ProductsOnLocationService {

	List<ProductsOnLocation> listProductsoOnLocations();

	ProductsOnLocation getProductsOnLocationByProduct(Product name);

	ProductsOnLocation getProductsOnLocationByLocation(Location location);

	ProductsOnLocation addProductsToLocation(ProductsOnLocation productsOnLocation);

}
