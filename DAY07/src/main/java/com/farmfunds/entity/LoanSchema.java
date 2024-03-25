package com.farmfunds.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class LoanSchema {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String loan;
    private String image;
    private String description;
    private String eligibility;
    private double interest;
    private double processingfee;
    private String documents;

    @ManyToOne
    @JoinColumn(name="useremail", referencedColumnName = "email")
    private UserInfo userInfo;
}
