package com.babydrivers.babydriversserver.security;//package com.babydrivers.babydriversserver.security;
//
//import org.springframework.security.authentication.AuthenticationProvider;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//public class CustomAuthenticationProvider implements AuthenticationProvider {
//
//    private final UserDetailsService userDetailsService;
//    private final PasswordEncoder passwordEncoder;
//
//    public CustomAuthenticationProvider(UserDetailsService userDetailsService, PasswordEncoder passwordEncoder) {
//        this.userDetailsService = userDetailsService;
//        this.passwordEncoder = passwordEncoder;
//    }
//
//    @Override
//    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
//        String username = authentication.getPrincipal().toString();
//        String password = authentication.getCredentials().toString();
//
//        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
//
//        if (userDetails != null && passwordEncoder.matches(password, userDetails.getPassword())) {
//            return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
//        } else {
//            throw new BadCredentialsException("Bad credentials");
//        }
//    }
//
//    @Override
//    public boolean supports(Class<?> authentication) {
//        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
//    }
//}

public class CustomAuthenticationProvider{

        }
