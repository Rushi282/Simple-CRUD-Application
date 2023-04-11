package com.cdac.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.app.pojos.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	public List<User> findByfirstName(String name);
	public List<User> findByAgeOrderByLastNameDesc(int age);
}
