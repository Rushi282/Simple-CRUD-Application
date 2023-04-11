package com.cdac.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.app.dto.ErrorResponse;
import com.cdac.app.service.IUserService;

@RestController
@RequestMapping("/findUser")
public class UserFinderController {
	@Autowired
	private IUserService userServe;
	
	@GetMapping("/byName/{name}")
	public ResponseEntity<?> getDetailsByName(@PathVariable String name){
		try {
			return ResponseEntity.ok(userServe.getUserByName(name));
		}catch (RuntimeException e) {
			return new ResponseEntity<>(new ErrorResponse("Name not exist!!", e.getMessage()),
					HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/byOrder/{age}")
	public ResponseEntity<?> getDetailsByOrder(@PathVariable int age){
		try {
			return ResponseEntity.ok(userServe.getUserByOrder(age));
		}catch (RuntimeException e) {
			return new ResponseEntity<>(new ErrorResponse("Fetching failed...", e.getMessage()),
					HttpStatus.BAD_REQUEST);
		}
	}
}
