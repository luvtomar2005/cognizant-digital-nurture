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


---

# Exercise 4 – REST Country Web Service

## Objective

Create a REST endpoint that returns the India `Country` bean configured in the Spring XML configuration.

---

## REST Endpoint

| HTTP Method | URL |
|-------------|-----|
| GET | /country |

---

## Controller

```
CountryController
```

---

## Method

```java
@RequestMapping("/country")
public Country getCountryIndia()
```

---

## Implementation

- Loads the `Country` bean from `country.xml` using `ApplicationContext`.
- Returns the `Country` object.
- Spring Boot automatically converts the Java object into a JSON response using Jackson.

---

## Sample Request

```
http://localhost:8083/country
```

---

## Sample Response

```json
{
  "code": "IN",
  "name": "India"
}
```

---

## Concepts Covered

- REST Controller
- @RequestMapping
- Spring IoC Container
- XML Bean Configuration
- ApplicationContext
- Bean Retrieval
- JSON Serialization using Jackson

---

## Request Flow

```
Browser
     │
GET /country
     │
DispatcherServlet
     │
CountryController
     │
ApplicationContext
     │
country.xml
     │
Country Bean
     │
Jackson
     │
JSON Response
```

---

## Output

Endpoint successfully returns:

```json
{
  "code": "IN",
  "name": "India"
}
```

---

## Learning Outcome

- Learned how Spring Boot exposes Java objects as REST resources.
- Understood how Spring loads beans from XML configuration.
- Learned how Spring Boot automatically serializes Java objects into JSON.
- Understood the request processing flow in a Spring REST application.

---

# Exercise 5 – REST: Get Country Based on Country Code

## Objective

Create a REST endpoint that returns a specific country based on the country code provided in the URL.

The country code comparison should be **case-insensitive**.

---

## REST Endpoint

| HTTP Method | URL |
|-------------|--------------------|
| GET | `/countries/{code}` |

---

## Sample Request

```
http://localhost:8083/countries/in
```

---

## Sample Response

```json
{
  "code": "IN",
  "name": "India"
}
```

---

## Components Added

### CountryController

Added a new endpoint:

```java
@GetMapping("/countries/{code}")
```

This endpoint accepts a country code from the URL and delegates the request to `CountryService`.

---

### CountryService

Created a service layer to:

- Load the country list from `country.xml`
- Search for the matching country
- Perform case-insensitive comparison using `equalsIgnoreCase()`
- Return the matching `Country` object

---

### country.xml

Updated to store multiple countries:

- India
- United States
- Germany
- Japan

using a Spring `<util:list>`.

---

## Concepts Covered

- REST Controller
- Service Layer
- `@Service`
- `@Autowired`
- `@GetMapping`
- `@PathVariable`
- Spring IoC Container
- XML Bean Configuration
- Java Collections
- Enhanced For Loop
- Case-Insensitive Search
- JSON Serialization using Jackson

---

## Request Flow

```
Browser
     │
GET /countries/in
     │
DispatcherServlet
     │
CountryController
     │
CountryService
     │
country.xml
     │
List<Country>
     │
Search
     │
Country Object
     │
Jackson
     │
JSON Response
```

---

## Output

```
GET /countries/in
```

Response

```json
{
  "code": "IN",
  "name": "India"
}
```

---

## Learning Outcomes

- Implemented URL path variables using `@PathVariable`.
- Learned the purpose of the Service layer.
- Understood separation of concerns.
- Loaded multiple beans from Spring XML configuration.
- Implemented case-insensitive searching.
- Returned Java objects as JSON responses.

# Week 4 - JWT Authentication Service using Spring Security

## Objective

Implement an authentication service that validates user credentials using **Spring Security** and returns a **JSON Web Token (JWT)** upon successful authentication.

This exercise demonstrates the first step in JWT-based authentication where a client sends valid credentials and receives a signed JWT token that can be used for future authenticated requests.

---

# Technologies Used

- Java 17
- Spring Boot 2.7.18
- Spring Security
- JWT (JJWT 0.9.0)
- Maven
- REST API

---

# Project Structure

```
src
└── main
    ├── java
    │   └── com.cognizant.springlearn
    │       ├── controller
    │       │     └── AuthenticationController.java
    │       │
    │       ├── security
    │       │     └── SecurityConfig.java
    │       │
    │       ├── util
    │       │     └── JwtUtil.java
    │       │
    │       ├── model
    │       │     └── AuthenticationResponse.java
    │       │
    │       └── SpringLearnApplication.java
    │
    └── resources
```

---

# Dependencies Added

```xml
spring-boot-starter-security
```

```xml
jjwt 0.9.0
```

Additional JAXB dependencies were added to support JWT generation while using modern Java versions.

---

# Security Configuration

Implemented a custom `SecurityConfig` class.

Configured:

- In-memory authentication
- Two users
- Role-based authorization
- HTTP Basic Authentication
- CSRF disabled

### Users

| Username | Password | Role |
|----------|----------|------|
| user | pwd | USER |
| admin | pwd | ADMIN |

---

# Endpoint Security

| Endpoint | Access |
|----------|--------|
| /countries/** | USER |
| /authenticate | USER, ADMIN |

---

# Authentication Controller

Created

```
AuthenticationController
```

Endpoint

```
GET /authenticate
```

After successful authentication, the controller generates a JWT token and returns it inside an `AuthenticationResponse` object.

---

# JWT Utility

Created

```
JwtUtil.java
```

Responsibilities:

- Generate JWT Token
- Set Subject
- Set Issued Time
- Set Expiration Time
- Sign using HS256 Algorithm
- Return JWT String

---

# Authentication Response Model

Created

```
AuthenticationResponse.java
```

Contains

```java
private String token;
```

Spring Boot automatically converts this object into JSON.

---

# Request

```
GET /authenticate
```

Authorization

```
Basic Authentication
```

Username

```
user
```

Password

```
pwd
```

---

# Sample Response

```json
{
    "token":"eyJhbGciOiJIUzI1NiJ9..."
}
```

---

# Request Flow

```
Client
    │
    ▼
HTTP Basic Authentication
    │
    ▼
Spring Security
    │
    ▼
AuthenticationController
    │
    ▼
JwtUtil
    │
    ▼
Generate JWT
    │
    ▼
AuthenticationResponse
    │
    ▼
JSON Response
```

---

# Concepts Covered

- Spring Security
- Authentication
- Authorization
- HTTP Basic Authentication
- In-Memory Users
- Roles and Permissions
- Security Configuration
- REST Controller
- JWT (JSON Web Token)
- HS256 Signing Algorithm
- Token Expiration
- JSON Serialization
- Utility Classes
- Layered Architecture

---

# Learning Outcomes

After completing this exercise, I learned:

- How Spring Security authenticates users.
- Difference between Authentication and Authorization.
- Configuring in-memory users and roles.
- Protecting REST endpoints.
- Creating an authentication endpoint.
- Generating JWT tokens.
- Returning Java objects as JSON responses.
- Understanding the purpose of JWT in stateless authentication.

---

# Output

Authentication Request

```
GET /authenticate
```

Authentication Credentials

```
Username : user
Password : pwd
```

Response

```json
{
    "token":"eyJhbGciOiJIUzI1NiJ9..."
}
```

---

# Exercise Status

**Completed Successfully** ✅