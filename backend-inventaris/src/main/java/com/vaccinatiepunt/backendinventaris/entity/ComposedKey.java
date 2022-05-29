package com.vaccinatiepunt.backendinventaris.entity;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Embeddable
public class ComposedKey implements Serializable {

	public ComposedKey(long locationId, long productId, Date expireDate) {
		this.locationId = locationId;
		this.productId = productId;
		this.expireDate = expireDate;
	}

	@Column(name = "location_id", nullable = false)
	private long locationId;

	@Column(name = "product_id", nullable = false)
	private long productId;

	@Column(name = "expireDate", nullable = false)
	private Date expireDate;
	/** getters and setters **/
}
