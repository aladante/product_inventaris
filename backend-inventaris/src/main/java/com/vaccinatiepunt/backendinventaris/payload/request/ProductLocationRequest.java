package com.vaccinatiepunt.backendinventaris.payload.request;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

import java.sql.Date;
import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProductLocationRequest {

	@NotBlank
	long productId;

	@NotBlank
	long locationId;

	int amount;
	String exipreDate;

	public long getProductId() {
		return productId;
	}

	public void setProductId(long productId) {
		this.productId = productId;
	}

	public long getLocationId() {
		return locationId;
	}

	public void setLocationId(long locationId) {
		this.locationId = locationId;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public String getExipreDate() {
		return exipreDate;
	}

	public void setExipreDate(String exipreDate) {
		this.exipreDate = exipreDate;
	}
}
