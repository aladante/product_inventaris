package com.vaccinatiepunt.backendinventaris.repo;

import java.util.Optional;

import com.vaccinatiepunt.backendinventaris.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findByUsername(String username);

	Boolean existsByUsername(String username);
}
