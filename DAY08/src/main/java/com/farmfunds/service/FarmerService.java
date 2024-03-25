package com.farmfunds.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.farmfunds.entity.FarmerInfo;
import com.farmfunds.repository.FarmerRepository;

@Service

public class FarmerService {

    @Autowired
    private FarmerRepository farmerRepository;

    @SuppressWarnings("null")
    public FarmerInfo saveFarmer(FarmerInfo farmer){
        return farmerRepository.save(farmer);
    }
    public Optional<FarmerInfo> getFarmer(long id){
        return farmerRepository.findById(id);
    }
    
    public void deleteFarmer(long id){
        farmerRepository.deleteById(id);
    }

    public List<FarmerInfo> findFarmerName(String name){
        return farmerRepository.findByFirstname(name);
    }

    public List<FarmerInfo> findFarmerEmail(String email){
        return farmerRepository.findByEmail(email);
    }

}
