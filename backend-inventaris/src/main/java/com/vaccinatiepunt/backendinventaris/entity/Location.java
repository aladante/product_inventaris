package com.vaccinatiepunt.backendinventaris.entity;

import java.util.List;
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
@Table(name = "location")
public class Location {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "location_id")
	private Long id;

	@OneToMany(mappedBy = "location")
	List<ProductsOnLocation> productsOnLocation;

	String name;
	String street;
	int number;
	String city;

	public Location() {
	}

	public Location(Long id, String name, String street, int number,
			String city) {
		this.id = id;
		this.name = name;
		this.street = street;
		this.number = number;
		this.city = city;
	}

	public Location(String name, String area, String street, int number) {
		this.name = name;
		this.street = street;
		this.number = number;
		this.city = area;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<ProductsOnLocation> getProductsOnLocation() {
		return productsOnLocation;
	}

	public void setProductsOnLocation(List<ProductsOnLocation> productsOnLocation) {
		this.productsOnLocation = productsOnLocation;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public int getNumber() {
		return number;
	}

	public void setNumber(int number) {
		this.number = number;
	}

	public String getArea() {
		return city;
	}

	public void setArea(String area) {
		this.city = area;
	}

}
