package com.farmfunds.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.farmfunds.entity.UserInfo;
import com.farmfunds.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/farmfunds/user")
@PreAuthorize("hasRole('USER')")
@RequiredArgsConstructor

public class UserController {

     @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<List<UserInfo>> getAllUsers() {
        List<UserInfo> users = userService.getAllUserInfo();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<UserInfo> getUserByEmail(@PathVariable String email) {
        Optional<UserInfo> user = userService.getUserInfoByEmail(email);
        return user.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{email}")
    public ResponseEntity<Void> deleteUser(@PathVariable String email) {
        userService.deleteUserInfo(email);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/count")
    public ResponseEntity<Long> getApplyCount(){
        long count = userService.getApplyCount();
        return new ResponseEntity<>(count, HttpStatus.OK);
    }

}
