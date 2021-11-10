package com.user.service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.user.model.User;
@Component
public class UserServiceUtility {

//	public List<User> sortUsersByName(List<User> users) {
//		return  users.stream()
//		        .sorted(Comparator.comparing(User::getName))
//		        .collect(Collectors.toList());
//	}

	public List<User> sortUsersByName(List<User> users) {
		return  users.stream()
		        .sorted(Comparator.comparing(User::getName))
		        .collect(Collectors.toList());	
	}
}
