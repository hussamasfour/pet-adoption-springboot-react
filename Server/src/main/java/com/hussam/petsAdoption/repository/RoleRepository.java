package com.hussam.petsAdoption.repository;

import com.hussam.petsAdoption.entity.Role;
import com.hussam.petsAdoption.entity.RoleType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {
    Role findByRoleType(RoleType roleAdmin);
}
