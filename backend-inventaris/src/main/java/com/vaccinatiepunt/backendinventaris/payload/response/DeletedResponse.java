package com.vaccinatiepunt.backendinventaris.payload.response;

public class DeletedResponse {
	private boolean deleted;

    public DeletedResponse(boolean deleted) {
        this.deleted = deleted;
    }

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }

}
