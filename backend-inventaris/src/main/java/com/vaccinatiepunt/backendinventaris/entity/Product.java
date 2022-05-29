package com.vaccinatiepunt.backendinventaris.entity;

import java.sql.Date;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "product")
public class Product {

	public Product(String name) {
		this.name = name;
	}

	public Product() {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_id")
	Long id;

	@OneToMany(mappedBy = "product")
	Set<ProductsOnLocation> productsOnLocation;
	String name;
	Date expireDate;
}
