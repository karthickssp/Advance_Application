package com.farmfunds.dto;

import com.farmfunds.entity.UserInfo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class LoanSchemaDto {

    private long id;
    private String loan;
    private String image;
    private String description;
    private String eligibility;
    private double interest;
    private double processingfee;
    private String documents;
    private UserInfo userInfo;

}
