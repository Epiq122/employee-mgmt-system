package com.gleasondev.employee.service;

import com.gleasondev.employee.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);

    List<User> getAllUsers();

   User getUserById(Long id);

    Boolean deleteUser(Long id);

    User updateUser(Long id, User user);
}
