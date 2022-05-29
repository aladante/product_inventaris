package com.vaccinatiepunt.backendinventaris.service.productLocation;

import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Product;
import com.vaccinatiepunt.backendinventaris.entity.ProductsOnLocation;
import com.vaccinatiepunt.backendinventaris.payload.request.ProductLocationRequest;

public interface ProductLocationService {

	List<ProductsOnLocation> listProductsOnLocation();

	List<ProductsOnLocation> listProductsOnLocationByLocationId(long id);

	List<ProductsOnLocation> listProductsOnLocationByProductId(long id);

	ProductsOnLocation createProductLocation(ProductLocationRequest productsOnLocation);

	Boolean productLocationExists(long id);

	Boolean deleteProductLocation(long id);
}
