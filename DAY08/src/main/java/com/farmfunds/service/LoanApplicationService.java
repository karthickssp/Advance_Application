package com.farmfunds.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.farmfunds.entity.LoanApplication;
import com.farmfunds.repository.LoanApplicationRepository;

@Service

public class LoanApplicationService {
    @Autowired
    private LoanApplicationRepository loanApplicationRepository;

    public Optional<List<LoanApplication>> getAllLoanApplications() {
        return Optional.of(loanApplicationRepository.findAll());
    }

    public Optional<LoanApplication> getLoanApplicationById(long id) {
        return Optional.of(loanApplicationRepository.findById(id));
    }

    @SuppressWarnings("null")
    public LoanApplication saveLoanApplication(LoanApplication loanApplication) {

        var loan = LoanApplication.builder()
        .firstname(loanApplication.getFirstname())
        .lastname(loanApplication.getLastname())
        .dob(loanApplication.getDob())
        .gender(loanApplication.getGender())
        .mobile(loanApplication.getMobile())
        .email(loanApplication.getEmail())
        .maritalstatus(loanApplication.getMaritalstatus())
        .aadharno(loanApplication.getAadharno())
        .panno(loanApplication.getPanno())
        .addressline1(loanApplication.getAddressline1())
        .addressline2(loanApplication.getAddressline2())
        .city(loanApplication.getCity())
        .pin(loanApplication.getPin())
        .salary(loanApplication.getSalary())
        .patta(loanApplication.getPatta())
        .area(loanApplication.getArea())
        .loanamount(loanApplication.getLoanamount())
        .loanpurpose(loanApplication.getLoanpurpose())
        .duration(loanApplication.getDuration())
        .loantype(loanApplication.getLoantype())
        .coapplicant(loanApplication.getCoapplicant())
        .status("pending")
        .aadhar(loanApplication.getAadhar())
        .pan(loanApplication.getPan())
        .photo(loanApplication.getPhoto())
        .signature(loanApplication.getSignature())
        .build();
        return loanApplicationRepository.save(loan);
    }

    public LoanApplication updateLoanApplication(long id, LoanApplication loanApplication){
        LoanApplication loanEntity = loanApplicationRepository.findById(id);
        if(loanEntity != null){
            loanEntity.setFirstname(loanApplication.getFirstname());
            loanEntity.setLastname(loanApplication.getLastname());
            loanEntity.setDob(loanApplication.getDob());
            loanEntity.setGender(loanApplication.getGender());
            loanEntity.setMobile(loanApplication.getMobile());
            loanEntity.setEmail(loanApplication.getEmail());
            loanEntity.setMaritalstatus(loanApplication.getMaritalstatus());
            loanEntity.setAadharno(loanApplication.getAadharno());
            loanEntity.setPanno(loanApplication.getPanno());
            loanEntity.setAddressline1(loanApplication.getAddressline1());
            loanEntity.setAddressline2(loanApplication.getAddressline2());
            loanEntity.setCity(loanApplication.getCity());
            loanEntity.setPin(loanApplication.getPin());
            loanEntity.setSalary(loanApplication.getSalary());
            loanEntity.setPatta(loanApplication.getPatta());
            loanEntity.setArea(loanApplication.getArea());
            loanEntity.setLoanamount(loanApplication.getLoanamount());
            loanEntity.setLoanpurpose(loanApplication.getLoanpurpose());
            loanEntity.setDuration(loanApplication.getDuration());
            loanEntity.setLoantype(loanApplication.getLoantype());
            loanEntity.setCoapplicant(loanApplication.getCoapplicant());
            loanEntity.setStatus(loanApplication.getStatus());
            loanEntity.setAadhar(loanApplication.getAadhar());
            loanEntity.setPan(loanApplication.getPan());
            loanEntity.setPhoto(loanApplication.getPhoto());
            loanEntity.setSignature(loanApplication.getSignature());
            return loanApplicationRepository.save(loanEntity);
        }
        return null;
    }

    public String deleteLoanApplication(long id) {
        LoanApplication loan = loanApplicationRepository.findById(id);
        if(loan != null){
            loanApplicationRepository.deleteById(id);
            return "Deleted Successfully";
        }
        return "Not found";
    }

    public List<LoanApplication> findByEmail(String email) {
        return loanApplicationRepository.findByEmail(email);
    }

    public List<LoanApplication> findBySalary(int salary) {
        return loanApplicationRepository.findBySalary(salary);
    }

    public List<LoanApplication> findByLoanamount(int loanamount) {
        return loanApplicationRepository.findByLoanamount(loanamount);
    }

    public List<LoanApplication> findByLoantype(String loantype) {
        return loanApplicationRepository.findByLoantype(loantype);
    }

    public List<LoanApplication> findByStatus(String status) {
        return loanApplicationRepository.findByStatus(status);
    }
    
    public long countApplication(){
        return loanApplicationRepository.count();
    }

    public long countStatus(String status){
        return loanApplicationRepository.countByStatus(status);
    }
}
