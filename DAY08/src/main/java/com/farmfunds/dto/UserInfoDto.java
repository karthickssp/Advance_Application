package com.farmfunds.dto;

import java.util.List;

import com.farmfunds.entity.LoanSchema;
import com.farmfunds.entity.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class UserInfoDto {

    private String email;
    private String name;
    private String password;
    private List<LoanSchema> loanschema;
    private Role role;

}
