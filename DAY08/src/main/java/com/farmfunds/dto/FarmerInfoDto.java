package com.farmfunds.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class FarmerInfoDto {

    private long id;
    private String firstname;
    private String lastname;
    private String email;
    private String mobile;
    private String aadhar;
    private String pan;
    private int area;

}
