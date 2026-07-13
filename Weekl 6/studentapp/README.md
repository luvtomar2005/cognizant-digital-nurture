# Week 6 - Exercise 2: React Components (Student Management Portal)

## Objective

The objective of this exercise is to understand the fundamentals of **React Components** by creating a simple Student Management Portal. The application demonstrates how multiple components can be created independently and rendered together in a React application.

---

## Learning Objectives

After completing this exercise, you will be able to:

- Understand what React Components are.
- Differentiate between JavaScript functions and React Components.
- Understand the concept of Class Components.
- Understand the purpose of the `render()` method.
- Create multiple React components.
- Render multiple components inside a parent component.
- Organize components into separate files for better project structure.

---

## Prerequisites

Before starting this exercise, ensure the following software is installed:

- Node.js
- npm
- Visual Studio Code

Verify installation using:

```bash
node -v
npm -v
```

---

## Technologies Used

- React
- JavaScript (ES6)
- Node.js
- npm
- Create React App
- Visual Studio Code

---

## Project Structure

```
Exercise-2
│
├── StudentApp
│   ├── src
│   │   ├── Components
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   └── Contact.js
│   │   │
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   │
│   ├── public
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
│
└── README.md
```

---

## Components Created

### Home Component

Displays:

```
Welcome to the Home Page of Student Management Portal
```

### About Component

Displays:

```
Welcome to the About Page of Student Management Portal
```

### Contact Component

Displays:

```
Welcome to the Contact Page of Student Management Portal
```

---

## Steps Performed

1. Created a React application named **StudentApp**.

```bash
npx create-react-app StudentApp
```

2. Created a **Components** folder inside the `src` directory.

3. Created the following class components:

- Home.js
- About.js
- Contact.js

4. Imported all three components into `App.js`.

5. Rendered all components inside the main application.

6. Applied basic CSS to center the content.

7. Started the React development server.

```bash
npm start
```

8. Verified the output in the browser.

---

## Output

The application displays three messages:

```
Welcome to the Home Page of Student Management Portal

Welcome to the About Page of Student Management Portal

Welcome to the Contact Page of Student Management Portal
```

---

## Concepts Learned

- React Components
- Class Components
- Component Rendering
- render() Method
- Component Composition
- JSX
- Import and Export in React
- React Project Structure

---

## Expected Outcome

A React application successfully renders multiple class components and displays the Home, About, and Contact pages within a single parent component.

---

## Author

**Luv Tomar**

Digital Nurture 5.0 - Java FSE React