package com.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.user.model.User;
import com.user.repository.UserRepository;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableSwagger2
public class SpringBootUserApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootUserApplication.class, args);
	}
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		this.userRepository.save(new User("James", "James@123.com", "1!23#4", "EMPLOYEE"));
		this.userRepository.save(new User("Peter", "Peter@123.com", "8^23!3", "EMPLOYEE"));
		this.userRepository.save(new User("John", "John@123.com", "98!891", "ADMIN"));
		this.userRepository.save(new User("Fred", "Fred@123.com", "68651", "ADMIN"));
		
	}
	
	@Bean
	  public Docket productApi() {
	    return new Docket(DocumentationType.SWAGGER_2).select()
	        .apis(RequestHandlerSelectors.basePackage("com.user")).build();
	  }

}
