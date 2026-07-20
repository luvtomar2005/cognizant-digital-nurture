import "./App.css";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

    const showBooks = true;
    const showBlogs = true;
    const showCourses = true;

    return (

        <div className="container">

            {showCourses && <CourseDetails />}

            {showBooks ? <BookDetails /> : null}

            {showBlogs ? <BlogDetails /> : null}

        </div>

    );

}

export default App;