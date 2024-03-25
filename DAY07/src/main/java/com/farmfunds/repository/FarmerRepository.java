package com.farmfunds.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.farmfunds.entity.FarmerInfo;

public interface FarmerRepository extends JpaRepository<FarmerInfo, Long>{
     
    List<FarmerInfo> findByFirstname(String firstname);
    List<FarmerInfo> findByEmail(String email);
    
}
