package com.cdac.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.app.dto.ErrorResponse;
import com.cdac.app.dto.ResponseDto;
import com.cdac.app.pojos.User;
import com.cdac.app.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserRESTController {

	@Autowired
	private IUserService userService;

//	@PostMapping
//	public User AddUserDetails(@RequestBody User transientUser) {
//		return userService.addUser(transientUser); 
//	}

	@PostMapping
	public ResponseEntity<?> AddUserDetails(@RequestBody User transientUser) {
		try {
			User user = userService.addUser(transientUser);
			return new ResponseEntity<>(user, HttpStatus.CREATED);
		} catch (RuntimeException e) {
			return new ResponseEntity<>(new ErrorResponse("Failed to add user", e.getMessage()),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping
	public List<User> getUsersDetails() {
		return userService.getAllUsers();
	}

	@DeleteMapping("/{userId}")
	public ResponseEntity<ResponseDto> deleteUserDetails(@PathVariable int userId) {
		// return new ResponseEntity<>(new ResponseDto(userService.deteleUser(userId)),
		// HttpStatus.OK);
		// instead of using this for status ok use this shortcut
		return ResponseEntity.ok(new ResponseDto(userService.deteleUser(userId)));
	}

	@GetMapping("/{id}")
	public ResponseEntity<?> getUserDetails(@PathVariable int id) {
		try {
			return ResponseEntity.ok(userService.getUserById(id));
		} catch (RuntimeException e) {
			return new ResponseEntity<>(new ErrorResponse("Fetching user deatils failed", e.getMessage()),
					HttpStatus.BAD_REQUEST);
		}
	}

	@PutMapping("/update/{uId}")
	public ResponseEntity<?> updateUserDetails(@RequestBody User detachedUser, @PathVariable int uId) {
		try {
			// invoke service for validate user
			User existingUser = userService.getUserById(uId);
			// user is valid
			System.out.println("Matched: " + existingUser);
			// existing user ==> user details fetched from database
			// detached user ==> user details fetched from front end

			return ResponseEntity.ok(userService.updateUser(detachedUser, existingUser));
		} catch (RuntimeException e) {
			return new ResponseEntity<>(new ErrorResponse("Updating user deatils failed", e.getMessage()),
					HttpStatus.BAD_REQUEST);
		}
	}
}
