
## Objective

The objective of this exercise is to understand Conditional Rendering in React by displaying different user interfaces based on the user's login status.

---

## Learning Objectives

After completing this exercise, you will be able to:

- Understand Conditional Rendering.
- Work with Element Variables.
- Render Components Conditionally.
- Switch between Login and Logout views.
- Build reusable React components.

---

## Technologies Used

- React
- JavaScript (ES6)
- Node.js
- npm
- Visual Studio Code

---

## Project Structure

```
ticketbookingapp
│
├── src
│   ├── Components
│   │   ├── GuestGreeting.js
│   │   ├── UserGreeting.js
│   │   ├── Greeting.js
│   │   ├── LoginButton.js
│   │   └── LogoutButton.js
│   │
│   ├── App.js
│   └── index.js
│
├── public
├── package.json
└── .gitignore
```

---

## Features Implemented

- Guest View
- Logged-in User View
- Login Button
- Logout Button
- Conditional Rendering
- Element Variables
- State Management

---

## React Concepts Covered

### Conditional Rendering

The application displays different components depending on the user's login status.

---

### Element Variables

Element variables are used to determine whether to display the Login or Logout button.

---

### React State

The login status is maintained using React State.

---

### Props

The login status is passed from the parent component to child components using Props.

---

### Component Communication

Components communicate using Props and Event Handlers.

---

## Steps Performed

1. Created a React application named **ticketbookingapp**.
2. Created GuestGreeting component.
3. Created UserGreeting component.
4. Created Greeting component.
5. Created LoginButton component.
6. Created LogoutButton component.
7. Managed login status using React State.
8. Implemented Conditional Rendering.
9. Displayed Guest page before login.
10. Displayed User page after login.
11. Allowed switching between Login and Logout.

---

## Expected Output

### Guest View

```
Please Sign Up

[ Login ]
```

---

### User View

```
Welcome Back

[ Logout ]
```

---

## Concepts Learned

- Conditional Rendering
- Props
- State
- Functional Components
- useState Hook
- Element Variables
- Event Handling
- Component Communication

---

## Industry Best Practices

- Store authentication state securely.
- Use Context API or Redux for application-wide authentication.
- Avoid hardcoding login states.
- Implement protected routes using React Router.
- Authenticate users using JWT or Session Tokens in real-world applications.

---

## Real-World Applications

Conditional Rendering is widely used in:

- Banking Applications
- Flight Booking Systems
- E-commerce Websites
- Hospital Management Systems
- Student Portals
- Employee Dashboards

---

## Author

**Luv Tomar**

Digital Nurture 5.0 – Java FSE React