package com.farmfunds.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.farmfunds.entity.FarmerInfo;
import com.farmfunds.service.FarmerService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/farmfunds/farmer")
@PreAuthorize("hasRole('USER')")
@RequiredArgsConstructor

public class FarmerController {

    @Autowired
    private FarmerService farmerService;

    @PostMapping
    public ResponseEntity<FarmerInfo> createFarmer(@RequestBody FarmerInfo farmer){
        FarmerInfo newFarmer = farmerService.saveFarmer(farmer);
        return new ResponseEntity<>(newFarmer, HttpStatus.CREATED);
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFarmer(@PathVariable long id){
        farmerService.deleteFarmer(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    @GetMapping("/id/{id}")
    public ResponseEntity<FarmerInfo> getFarmerId(@PathVariable long id){
        Optional<FarmerInfo> farmer =  farmerService.getFarmer(id);
        return farmer.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
        .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    @GetMapping("/email/{email}")
    public ResponseEntity<List<FarmerInfo>> getFarmerEmail(@PathVariable String email){
        List<FarmerInfo> farmers = farmerService.findFarmerEmail(email);
        return new ResponseEntity<>(farmers, HttpStatus.OK);
    }
    @GetMapping("/name/{name}")
    public ResponseEntity<List<FarmerInfo>> getFarmerName(@PathVariable String name){
        List<FarmerInfo> farmers = farmerService.findFarmerName(name);
        return new ResponseEntity<>(farmers, HttpStatus.OK);
    }
    
}
