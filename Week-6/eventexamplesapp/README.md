## Objective

The objective of this exercise is to understand how React handles events, invoke event handlers, work with Synthetic Events, and build an event-driven React application.

---

## Learning Objectives

After completing this exercise, you will be able to:

- Understand React Events.
- Understand Event Handlers.
- Understand Synthetic Events.
- Learn React Event Naming Conventions.
- Invoke multiple methods from a single event.
- Pass arguments to event handlers.
- Handle form submission.
- Build a simple Currency Converter.

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
eventexamplesapp
│
├── src
│   ├── Components
│   │   ├── Counter.js
│   │   └── CurrencyConvertor.js
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

### Counter Component

- Increment Counter
- Decrement Counter
- Invoke multiple methods using a single button click
- Display greeting message
- Display welcome message
- Demonstrate Synthetic Event handling

### Currency Converter

- Accept amount in Indian Rupees.
- Convert INR to Euro.
- Handle form submission.
- Display converted currency.

---

## React Concepts Covered

### Event Handling

React handles browser events using camelCase event names.

Example:

```jsx
<button onClick={handleClick}>
```

---

### Multiple Event Handling

One button invokes multiple methods:

- Increment Counter
- Display Greeting

---

### Passing Arguments

```jsx
<button onClick={() => sayWelcome("Welcome")}>
```

---

### Synthetic Events

React wraps native browser events into a SyntheticEvent object to provide consistent behavior across browsers.

---

### Form Handling

- Controlled Components
- Input Handling
- Form Submission
- preventDefault()

---

## Steps Performed

1. Created a React project named **eventexamplesapp**.
2. Created the Counter component.
3. Implemented Increment and Decrement functionality.
4. Implemented multiple method invocation.
5. Passed parameters to event handlers.
6. Demonstrated Synthetic Event handling.
7. Created the Currency Converter component.
8. Implemented form handling and currency conversion.
9. Displayed the converted currency.

---

## Expected Output

### Counter

- Increment Button
- Decrement Button
- Say Welcome Button
- Click on Me Button

### Currency Converter

- Amount Input
- Currency Output
- Submit Button

---

## Concepts Learned

- React Events
- Event Handlers
- Synthetic Events
- State Management
- Controlled Components
- Form Handling
- Arrow Functions
- React Event Binding

---

## Industry Best Practices

- Prefer Functional Components with Hooks in modern React.
- Use controlled forms.
- Keep event handlers small and reusable.
- Avoid inline business logic inside JSX.
- Separate UI and business logic whenever possible.

---

## Author

**Luv Tomar**

Digital Nurture 5.0 – Java FSE React