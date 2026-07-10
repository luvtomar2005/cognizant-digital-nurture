# Week 5 - Exercise 1: Creating Microservices for Account and Loan

## Objective

The objective of this exercise is to understand the fundamentals of **Microservices Architecture** by creating two independent Spring Boot RESTful Web Services.

Two separate microservices are developed:

- **Account Microservice**
- **Loan Microservice**

Each microservice is an independent Maven project with its own:

- Source code
- Dependencies
- Configuration
- Embedded Tomcat Server
- Build lifecycle

No database connectivity is used in this exercise. Both services return dummy JSON responses.

---

# Technologies Used

- Java 21
- Spring Boot
- Spring Web
- Spring Boot DevTools
- Maven
- REST API

---

# Project Structure

```
Exercise-1/
│
├── account/
│   ├── src/
│   ├── pom.xml
│   └── ...
│
├── loan/
│   ├── src/
│   ├── pom.xml
│   └── ...
│
└── README.md
```

---

# Account Microservice

### Default Port

```
8080
```

### Endpoint

```
GET /accounts/{number}
```

### Sample Request

```
http://localhost:8080/accounts/00987987973432
```

### Sample Response

```json
{
    "number": "00987987973432",
    "type": "savings",
    "balance": 234343.0
}
```

---

# Loan Microservice

### Port

```
8081
```

### Endpoint

```
GET /loans/{number}
```

### Sample Request

```
http://localhost:8081/loans/H00987987972342
```

### Sample Response

```json
{
    "number": "H00987987972342",
    "type": "car",
    "loan": 400000.0,
    "emi": 3258.0,
    "tenure": 18
}
```

---

# Why Two Different Ports?

Spring Boot applications run on **port 8080** by default.

When both Account and Loan microservices are started simultaneously, both attempt to use port **8080**, resulting in:

```
APPLICATION FAILED TO START

Port 8080 was already in use.
```

To resolve this conflict, the Loan microservice was configured with:

```properties
server.port=8081
```

Now:

```
Account Service
↓

localhost:8080

Loan Service
↓

localhost:8081
```

Both applications can run independently.

---

# What is a Microservice?

A **Microservice** is a small, independently deployable application that performs one specific business function.

Characteristics:

- Independent project
- Independent deployment
- Independent configuration
- Independent server
- Focused on a single responsibility
- Communicates with other services using REST APIs

---

# Request Flow

```
Browser
    │
    ▼
HTTP Request
    │
    ▼
Spring Boot Dispatcher
    │
    ▼
Controller
    │
    ▼
Java Object
    │
    ▼
Jackson
    │
    ▼
JSON Response
    │
    ▼
Browser
```

---

# Key Spring Boot Annotations Used

## @SpringBootApplication

Marks the main Spring Boot application class.

---

## @RestController

Marks a class as a REST Controller.

Spring automatically detects it and exposes REST endpoints.

---

## @GetMapping

Maps an HTTP GET request to a Java method.

Example:

```java
@GetMapping("/accounts/{number}")
```

---

## @PathVariable

Reads values directly from the URL.

Example:

```
/accounts/12345
```

becomes

```java
String number = "12345";
```

---

# Maven Commands

Build Project

```bash
mvn clean package
```

Run Application

```bash
mvn spring-boot:run
```

Using Maven Wrapper

```bash
./mvnw spring-boot:run
```

Windows

```powershell
.\mvnw.cmd spring-boot:run
```

---

# Important Learning Outcomes

- Understanding Microservices Architecture
- Creating independent Spring Boot applications
- Building RESTful Web Services
- Returning JSON responses
- Using Spring MVC annotations
- Understanding Path Variables
- Configuring different server ports
- Running multiple microservices simultaneously
- Understanding embedded Tomcat
- Debugging package and project structure issues

---

# Difference Between Monolith and Microservices

| Monolithic Application | Microservices |
|-------------------------|---------------|
| Single project | Multiple independent projects |
| Single deployment | Independent deployments |
| Single server | Multiple services |
| Entire application scales together | Individual services scale independently |
| Tightly coupled | Loosely coupled |

---

# Conclusion

In this exercise, two independent Spring Boot microservices were successfully developed:

- Account Service
- Loan Service

Each service exposes its own REST endpoint and runs on a separate port, demonstrating the core principle of Microservices Architecture.