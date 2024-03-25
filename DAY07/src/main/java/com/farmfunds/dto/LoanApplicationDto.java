package com.farmfunds.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class LoanApplicationDto {

    private long id;
    private String firstname;
    private String lastname;
    private Date dob;
    private String gender;
    private String mobile;
    private String email;
    private String maritalstatus;
    private String aadharno;
    private String panno;
    private String addressline1;
    private String addressline2;
    private String city;
    private int pin;
    private int salary;
    private String patta;
    private int area;
    private int loanamount;
    private String loanpurpose;
    private int duration;
    private String loantype;
    private String coapplicant;
    private String status;
    private String aadhar;
    private String pan;
    private String photo;
    private String signature;
}
