package com.cdac.app;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.cdac.app.pojos.User;
import com.cdac.app.service.IUserService;

@SpringBootTest
class PracticeBackendApplicationTests {

	@Autowired
	private IUserService userService;
	
	@Test
	void contextLoads() {
		List<User> allUsers = userService.getAllUsers();
		System.out.println(allUsers);
		assertEquals(0, allUsers.size());
	}

}
