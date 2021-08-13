package com.hussam.petsAdoption.repository;

import com.hussam.petsAdoption.entity.RefreshToken;
import com.hussam.petsAdoption.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Long> {
    Optional<RefreshToken> findByToken(String token);

    int deleteByUser(User user);
}
