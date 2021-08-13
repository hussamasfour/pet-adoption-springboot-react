package com.hussam.petsAdoption.service;

import com.hussam.petsAdoption.entity.RefreshToken;

import java.util.Optional;

public interface RefreshTokenService {
    Optional<RefreshToken> findByToken(String token);
    RefreshToken createRefreshToken(Long userId);
    RefreshToken verifyExpiration(RefreshToken token);
    public int deleteByUserId(Long userId);
}
