
package com.vaccinatiepunt.backendinventaris.payload.response;

import java.util.ArrayList;
import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Product;

public class ProductResponse {
	private List<Product> products;

	public ProductResponse(Product product) {
		List<Product> products = new ArrayList<Product>();
		this.products = products;
	}

	public ProductResponse(List<Product> products) {
		this.products = products;
	}

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

}
