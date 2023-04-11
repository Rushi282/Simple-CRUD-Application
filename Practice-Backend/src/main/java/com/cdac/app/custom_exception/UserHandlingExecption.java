package com.cdac.app.custom_exception;

@SuppressWarnings("serial")
public class UserHandlingExecption extends RuntimeException {
	public UserHandlingExecption(String msg) {
		super(msg);
	}
}
