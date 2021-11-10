package com.user.service;

import java.util.List;

import com.user.exception.UserNotFoundException;
import com.user.model.User;


public interface UserService {
	
	List<User> getUsers() ;

	User getUserById(Long userId) throws UserNotFoundException;

	List<User> getUserByEmailAndPassword(String email,String password) throws UserNotFoundException;
	
}
