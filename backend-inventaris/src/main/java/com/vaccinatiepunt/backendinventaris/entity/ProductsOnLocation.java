package com.vaccinatiepunt.backendinventaris.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "product_at_location")
public class ProductsOnLocation {

	public ProductsOnLocation(Location location, Product product, Date expire_date, int amount) {
		this.location = location;
		this.product = product;
		this.expire_date = expire_date;
		this.amount = amount;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "product_at_location_id")
	Long id;

	@ManyToOne
	@JoinColumn(name = "location_id")
	Location location;

	@ManyToOne
	@JoinColumn(name = "product_id")
	Product product;

	Date expire_date;

	int amount;

}
