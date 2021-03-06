package com.user.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.ws.server.endpoint.annotation.RequestPayload;

import com.user.model.User;
import com.user.repository.UserRepository;
import com.user.service.UserService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.ApiResponse;

@RestController
@CrossOrigin
@RequestMapping("api/")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired(required = true)
    UserService userService;
	
	 @Autowired
	    public UserController(UserService userService) {
	        this.userService = userService;
	    }

	
	@GetMapping("users")
	public ResponseEntity<List> getUsers() {
		return new ResponseEntity<List>((List) userService.getUsers(), HttpStatus.OK);
	}

	
	@ApiOperation(value = "Find user by ID", notes = "Returns a single user", tags = { "user" })
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "successful operation", response=User.class),
        @ApiResponse(code = 404, message = "User not found") })
	@GetMapping("/user/{id}")
	public ResponseEntity getUserById( @ApiParam(value = "Id of the user to be obtained. Cannot be empty.",required = true) @PathVariable(value = "id") Long id) throws Exception {
		return new ResponseEntity(userService.getUserById(id), HttpStatus.OK);
	}
	
	@PostMapping("/getUserByEmailAndPassword")
	public ResponseEntity<List> getUserByEmailAndPassword(@RequestParam(value="email") String email, @RequestParam(value="password") String password) {
		User userRes = this.userRepository.findByEmailAndPassword(email,password);
		System.out.println(userRes.toString());
		List<User> users = new ArrayList<User>();
		users.add(userRes);
		return new ResponseEntity<List>(users, HttpStatus.OK);
	}

}