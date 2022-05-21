package com.vaccinatiepunt.backendinventaris.repo;

import java.util.Optional;

import com.vaccinatiepunt.backendinventaris.entity.ERole;
import com.vaccinatiepunt.backendinventaris.entity.Role;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(ERole name);
}
