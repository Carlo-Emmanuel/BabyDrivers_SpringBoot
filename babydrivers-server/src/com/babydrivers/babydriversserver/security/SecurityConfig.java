package com.babydrivers.babydriversserver.security;//package com.babydrivers.babydriversserver.security;
//
//import com.babydrivers.babydriversserver.service.ManagerService;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
//    private final ManagerService managerService;
//
//    public SecurityConfig(ManagerService managerService) {
//        this.managerService = managerService;
//    }
//
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(managerService);
//    }
//
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests()
//                .antMatchers("/manager/**").hasRole("MANAGER")
//                .and()
//                .formLogin()
//                .loginPage("/login")
//                .defaultSuccessUrl("/manager/dashboard")
//                .permitAll()
//                .and()
//                .logout()
//                .permitAll();
//    }
//}

public class SecurityConfig {
}
