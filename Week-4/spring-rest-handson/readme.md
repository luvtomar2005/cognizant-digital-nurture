# Week 4 - Spring REST using Spring Boot

## Spring REST Hands-on

This project contains the solutions implemented for the mandatory Week 4 Spring REST hands-on exercises from the Cognizant Digital Nurture Java FSE program.

---

# Technologies Used

- Java 21+
- Spring Boot 4.x
- Spring Framework
- Spring Web
- Spring Boot DevTools
- Maven

---

# Project Information

| Property | Value |
|----------|-------|
| Group ID | com.cognizant |
| Artifact ID | spring-learn |
| Packaging | JAR |
| Build Tool | Maven |

---

# Exercises Completed

## Exercise 1 – Create a Spring Boot Maven Project

### Objective

Create a Spring Boot project using Spring Initializr and understand the generated Maven project structure.

### Concepts Covered

- Spring Initializr
- Maven Project Structure
- Spring Boot
- Embedded Tomcat
- Maven Wrapper

### Output

Application starts successfully.

Tomcat started on port 8080

Started SpringLearnApplication

Accessing

http://localhost:8080

returns HTTP 404 because no REST endpoint has been created yet.

---

## Exercise 2 – Load Country from Spring Configuration XML

### Objective

Configure a Country bean using Spring XML configuration and load it using Spring IoC Container.

### Implemented Components

- Country.java
- country.xml
- ApplicationContext
- XML Bean Configuration

Configured Country

| Code | Name |
|------|------|
| IN | India |

### Output
Country [code=IN, name=India]


### Concepts Learned

- Spring IoC Container
- XML Bean Configuration
- ApplicationContext
- Dependency Injection Basics

---

## Exercise 3 – Hello World RESTful Web Service

### Objective

Create a REST endpoint that returns the string
Hello World!!

### REST API

| Method | URL |
|---------|------|
| GET | /hello |

### Controller
HelloController

### Method
public String sayHello()


### Response
Hello World!!


### Logging

The controller logs

- Start of method execution
- End of method execution

using SLF4J logger.

---
---

# Build


mvn clean package


or


mvnw.cmd clean package


---

# Run


mvn spring-boot:run


or


mvnw.cmd spring-boot:run


---

# Verify

## Country Bean

Console Output


Country [code=IN, name=India]


## REST API

Open


http://localhost:8080/hello


Response


Hello World!!


---

# Learning Outcomes

- Created a Spring Boot Maven project.
- Understood Spring Boot project structure.
- Learned Spring IoC Container.
- Configured beans using XML.
- Loaded beans using ApplicationContext.
- Created a basic REST Controller.
- Implemented a GET endpoint.
- Used SLF4J logging.
- Successfully tested the REST endpoint.

---

# Current Progress

- ✅ Exercise 1 Completed
- ✅ Exercise 2 Completed
- ✅ Exercise 3 Completed

More Week 4 exercises will be added to this project.

