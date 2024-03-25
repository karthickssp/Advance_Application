package com.farmfunds.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.farmfunds.entity.LoanApplication;
import com.farmfunds.service.LoanApplicationService;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
@RequestMapping("/farmfunds/loanapplication")

public class LoanApplicationController {

     @Autowired
    private LoanApplicationService loanApplicationService;

    @GetMapping
    public ResponseEntity<Optional<List<LoanApplication>>> getAllLoanApplications() {
        Optional<List<LoanApplication>> loanApplications = loanApplicationService.getAllLoanApplications();
        return new ResponseEntity<>(loanApplications, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoanApplication> getLoanApplicationById(@PathVariable int id) {
        Optional<LoanApplication> loanApplication = loanApplicationService.getLoanApplicationById(id);
        return loanApplication.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<LoanApplication> createLoanApplication(@RequestBody LoanApplication loanApplication) {
        LoanApplication newLoanApplication = loanApplicationService.saveLoanApplication(loanApplication);
        return new ResponseEntity<>(newLoanApplication, HttpStatus.CREATED);
    }
    @PutMapping("{id}")
    public ResponseEntity<LoanApplication> updateLoanApplication(@PathVariable Long id, @RequestBody LoanApplication loanApplication) {
        LoanApplication updatedLoanApplication = loanApplicationService.updateLoanApplication(id, loanApplication);
        return ResponseEntity.ok(updatedLoanApplication);

    }

    @DeleteMapping("/{id}")
    public  ResponseEntity<Map<String, Boolean>> deleteLoanApplication(@PathVariable int id) {
        loanApplicationService.deleteLoanApplication(id);
        Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<List<LoanApplication>> getByEmail(@PathVariable String email) {
        List<LoanApplication> loanApplications = loanApplicationService.findByEmail(email);
        return new ResponseEntity<>(loanApplications, HttpStatus.OK);
    }

    @GetMapping("/salary/{salary}")
    public ResponseEntity<List<LoanApplication>> getBySalary(@PathVariable int salary) {
        List<LoanApplication> loanApplications = loanApplicationService.findBySalary(salary);
        return new ResponseEntity<>(loanApplications, HttpStatus.OK);
    }

    @GetMapping("/loanamount/{loanamount}")
    public ResponseEntity<List<LoanApplication>> getByLoanAmount(@PathVariable int loanamount) {
        List<LoanApplication> loanApplications = loanApplicationService.findByLoanamount(loanamount);
        return new ResponseEntity<>(loanApplications, HttpStatus.OK);
    }

    @GetMapping("/loantype/{loantype}")
    public ResponseEntity<List<LoanApplication>> getByLoanType(@PathVariable String loantype) {
        List<LoanApplication> loanApplications = loanApplicationService.findByLoantype(loantype);
        return new ResponseEntity<>(loanApplications, HttpStatus.OK);
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<LoanApplication>> getByStatus(@PathVariable String status) {
        List<LoanApplication> loanApplications = loanApplicationService.findByStatus(status);
        return new ResponseEntity<>(loanApplications, HttpStatus.OK);
    }

    @GetMapping("/count")
    public ResponseEntity<Long> countApplication(){
        long count = loanApplicationService.countApplication();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
    @GetMapping("/count/{status}")
    public ResponseEntity<Long> countStatus(@PathVariable String status){
        long count = loanApplicationService.countStatus(status);
        return new ResponseEntity<>(count, HttpStatus.OK);
    }
}
