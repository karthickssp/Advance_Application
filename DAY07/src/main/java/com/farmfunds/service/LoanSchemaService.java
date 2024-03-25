package com.farmfunds.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.farmfunds.entity.LoanSchema;
import com.farmfunds.repository.LoanSchemaRepository;

@Service

public class LoanSchemaService {

    @Autowired
    private LoanSchemaRepository loanSchemaRepository;

    public List<LoanSchema> getAllLoanSchemas() {
        return loanSchemaRepository.findAll();
    }

    public List<LoanSchema> getLoanSchemasByLoan(String loan) {
        return loanSchemaRepository.findByLoan(loan);
    }

    @SuppressWarnings("null")
    public LoanSchema saveLoanSchema(LoanSchema loanSchema) {
        return loanSchemaRepository.save(loanSchema);
    }

    public void deleteLoanSchema(long id) {
        loanSchemaRepository.deleteById(id);
    }

    public long countSchema(){
        return loanSchemaRepository.count();
    }
}
