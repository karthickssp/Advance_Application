package com.farmfunds.service;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.farmfunds.dto.request.AuthRequest;
import com.farmfunds.dto.request.RegisterRequest;
import com.farmfunds.dto.response.AuthenticationResponse;
import com.farmfunds.entity.Role;
import com.farmfunds.entity.UserInfo;
import com.farmfunds.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @SuppressWarnings("null")
    public String register(RegisterRequest request) {

        if (request.getRole().equals("user")) {

            Optional<UserInfo> check = userRepository.findByEmail(request.getEmail());
            if (check.isEmpty()) {
                var user = UserInfo
                        .builder()
                        .name(request.getName())
                        .email(request.getEmail())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .role(Role.USER)
                        .build();
                userRepository.save(user);
                return "User is SuccessFully Created";
            }
            return ("Email Already Exists !!");
        } else {
            Optional<UserInfo> check = userRepository.findByEmail(request.getEmail());
            if (check.isEmpty()) {
                var admin = UserInfo
                        .builder()
                        .email(request.getEmail())
                        .name(request.getName())
                        .password(passwordEncoder.encode(request.getPassword()))
                        .role(Role.ADMIN)
                        .build();
                userRepository.save(admin);
                return "Admin is Successfully Created";
            }
            return ("Admin Already Exists !!");
        }
    }

    public AuthenticationResponse authenticate(AuthRequest request) {

        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        var user_role = user.getRole();
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .role(user_role.toString())
                .build();
    }

}
