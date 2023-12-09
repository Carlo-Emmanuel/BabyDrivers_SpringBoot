package com.babydrivers.babydriversserver.service;//package com.babydrivers.babydriversserver.service;
//
//import com.babydrivers.babydriversserver.entity.Manager;
//import com.babydrivers.babydriversserver.repository.ManagerRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//@Service
//public class CustomUserDetailsService implements UserDetailsService {
//
//    private final ManagerRepository managerRepository;
//
//    @Autowired
//    public CustomUserDetailsService(ManagerRepository managerRepository) {
//        this.managerRepository = managerRepository;
//    }
//
//    //Find manager by username and returning that as a UserDetails object for authentication
//    @Override
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        Manager manager = managerRepository.findByUsername(username);
//
//        if (manager == null) {
//            throw new UsernameNotFoundException("Manager not found with username: " + username);
//        }
//
//        return User.withUsername(manager.getUsername())
//                .password(manager.getPassword())
//                .roles("MANAGER")
//                .build();
//    }
//}
//

public class CustomUserDetailsService {
}