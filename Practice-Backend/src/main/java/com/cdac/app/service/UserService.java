package com.cdac.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cdac.app.custom_exception.UserHandlingExecption;
import com.cdac.app.dao.UserRepository;
import com.cdac.app.pojos.User;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService implements IUserService {

	@Autowired
	private UserRepository userRepo;

	@Override
	public User addUser(User user) {
		return userRepo.save(user);
	}

	@Override
	public List<User> getAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public String deteleUser(int id) {
		userRepo.deleteById(id);
		return "User deleted of id: " + id;
	}

	@Override
	public User getUserById(int id) {
		// findById() optional<T> is return entity if id is present or empty optional so
		// we return message when empty..
		return userRepo.findById(id).orElseThrow(() -> new UserHandlingExecption("Invalid User id!!"));
	}

	@Override
	public User updateUser(User detachedUser, User existingUser) {
//		existingUser.setFirstName(detachedUser.getFirstName());
//		existingUser.setLastName(detachedUser.getLastName());
		existingUser.setUserName(detachedUser.getUserName());
		existingUser.setAge(detachedUser.getAge());
		existingUser.setSalary(detachedUser.getSalary());
		return userRepo.save(existingUser);
	}

	@Override
	public List<User> getUserByName(String name) {
		return userRepo.findByfirstName(name);
	}

	@Override
	public List<User> getUserByOrder(int age) {
		return userRepo.findByAgeOrderByLastNameDesc(age);
	}

}
