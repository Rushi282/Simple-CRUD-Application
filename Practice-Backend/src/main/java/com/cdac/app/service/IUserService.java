package com.cdac.app.service;

import java.util.List;

import com.cdac.app.pojos.User;

public interface IUserService {
	
	//Adding user
	User addUser(User user);

	//Getting all users
	List<User> getAllUsers();
	
	//delete user by id
	String deteleUser(int id);
	
	//get user by id
	User getUserById(int id);
	
	//update user 
	User updateUser(User detachedUser, User existingUser);
	
	//get users by name
	List<User> getUserByName(String name);
	
	//get by order
	List<User> getUserByOrder(int age);
}
