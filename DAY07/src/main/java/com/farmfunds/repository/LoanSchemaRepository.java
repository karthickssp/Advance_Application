package com.farmfunds.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.farmfunds.entity.LoanSchema;

import java.util.List;


public interface LoanSchemaRepository extends JpaRepository<LoanSchema, Long> {

    List<LoanSchema> findByLoan(String loan);

    long count();
}
