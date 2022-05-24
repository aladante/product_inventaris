package com.vaccinatiepunt.backendinventaris.service.productlocation;


import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Product;
import com.vaccinatiepunt.backendinventaris.payload.request.ProductRequest;

public interface ProductLocationService {

	List<Product> listProducts();

	Product getProductByName(String name);

	Product createProduct(ProductRequest productRequest);

	Boolean productExists(String name);

	Boolean deleteProduct(long id);

}
