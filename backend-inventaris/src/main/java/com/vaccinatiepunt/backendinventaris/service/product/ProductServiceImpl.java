package com.vaccinatiepunt.backendinventaris.service.product;

import java.util.List;

import com.vaccinatiepunt.backendinventaris.entity.Product;
import com.vaccinatiepunt.backendinventaris.entity.User;
import com.vaccinatiepunt.backendinventaris.payload.request.ProductRequest;
import com.vaccinatiepunt.backendinventaris.payload.request.SignupRequest;
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
	ProductRepository userRepository;

    @Override
    public List<Product> listProducts() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Product getProductByName(String name) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Product createProduct(ProductRequest productRequest) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Boolean productExists(String name) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Boolean deleteProduct(long id) {
        // TODO Auto-generated method stub
        return null;
    }


}
