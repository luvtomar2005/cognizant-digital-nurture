## Objective

The objective of this exercise is to understand the React Component Lifecycle by fetching blog posts from a REST API using lifecycle methods.

---

## Learning Objectives

After completing this exercise, you will be able to:

- Understand the React Component Lifecycle.
- Learn the purpose of componentDidMount().
- Learn the purpose of componentDidCatch().
- Understand React State.
- Fetch data from REST APIs using the Fetch API.
- Display dynamic data in React.
- Handle rendering errors gracefully.

---

## Technologies Used

- React
- JavaScript (ES6)
- Fetch API
- JSONPlaceholder REST API
- Node.js
- npm

---

## Project Structure

```
blogapp
│
├── src
│   ├── App.js
│   ├── Posts.js
│   ├── Post.js
│   └── index.js
│
├── public
├── package.json
└── .gitignore
```

---

## Features Implemented

- Fetches blog posts from a REST API.
- Displays blog post titles and descriptions.
- Uses React State to store fetched posts.
- Demonstrates React lifecycle methods.
- Handles rendering errors using componentDidCatch().

---

## Lifecycle Methods Used

### constructor()

- Initializes the component.
- Creates the initial state.

### componentDidMount()

- Executes immediately after the component is mounted.
- Calls the Fetch API to retrieve blog posts.

### componentDidCatch()

- Catches rendering errors in child components.
- Prevents the application from crashing unexpectedly.

### render()

- Renders all blog posts dynamically using React.

---

## REST API Used

```
https://jsonplaceholder.typicode.com/posts
```

---

## Steps Performed

1. Created a React project named **blogapp**.
2. Created the `Post` model class.
3. Created the `Posts` class component.
4. Initialized state using the constructor.
5. Implemented `loadPosts()` using the Fetch API.
6. Called `loadPosts()` inside `componentDidMount()`.
7. Rendered blog posts dynamically.
8. Implemented `componentDidCatch()` for error handling.
9. Displayed fetched blog posts in the browser.

---

## Expected Output

The application displays:

- Blog Post Title
- Blog Post Body

for all posts retrieved from the JSONPlaceholder API.

---

## Concepts Learned

- React Lifecycle
- constructor()
- React State
- componentDidMount()
- componentDidCatch()
- Fetch API
- JSON Data
- Dynamic Rendering
- Array Mapping

---

## Industry Best Practices

- Use `componentDidMount()` for API calls in class components.
- In modern React, prefer `useEffect()` and `useState()` in functional components.
- Handle API failures using `.catch()` with Fetch.
- Use unique keys while rendering lists.

---

## Author

**Luv Tomar**

Digital Nurture 5.0 – Java FSE React