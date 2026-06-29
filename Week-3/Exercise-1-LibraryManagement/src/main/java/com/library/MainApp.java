package com.library;

import com.library.repository.BookRepository;
import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

    public static void main(String[] args) {

        // Load the Spring IoC Container
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Retrieve BookRepository bean
        BookRepository repository =
                context.getBean("bookRepository", BookRepository.class);

        // Retrieve BookService bean
        BookService service =
                context.getBean("bookService", BookService.class);

        // Call methods
        repository.saveBook();
        service.displayService();
    }
}