package com.user.service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import com.user.exception.UserNotFoundException;
import com.user.model.User;
import com.user.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired(required = true)	
	private UserRepository userRepository;
	@Autowired(required = true)
	private UserServiceUtility userServiceUtility;
	

		
	
	@GetMapping("users")
	public List<User> getUsers() {
		List<User> users = this.userRepository.findAll();	
		return userServiceUtility.sortUsersByName(users);
	}

	@Override
	public User getUserById(Long id) throws UserNotFoundException {		
		User user;
        if (userRepository.findById(id).isPresent()) {
            throw new UserNotFoundException("User not found for this id :: " + id);
        } else {
            user = userRepository.findById(id).get();
        }
        return user;
	}
	
	@Override
	public List<User> getUserByEmailAndPassword(String email,String password) {
		User userRes = this.userRepository.findByEmailAndPassword(email, password);
		List<User> users = new ArrayList<User>();
	
        if (userRes == null) {
            throw new UserNotFoundException("User not found for this Email :: " + email);
        } else {
        	users.add(userRes);
        }
        return users;
	}
	
}
