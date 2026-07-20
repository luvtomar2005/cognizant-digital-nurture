import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {

    constructor() {
        super();

        this.state = {
            posts: [],
            hasError: false
        };
    }

    loadPosts() {

        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => {

                const posts = data.map(post =>
                    new Post(post.id, post.title, post.body)
                );

                this.setState({
                    posts: posts
                });

            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {

        this.setState({
            hasError: true
        });

        alert("An error occurred while rendering the component.");
        console.error(error, info);

    }

    render() {

        if (this.state.hasError) {
            return <h2>Something went wrong.</h2>;
        }

        return (

            <div>

                <h1>Blog Posts</h1>

                {
                    this.state.posts.map(post => (

                        <div
                            key={post.id}
                            style={{
                                border: "1px solid gray",
                                margin: "20px",
                                padding: "15px",
                                borderRadius: "10px"
                            }}
                        >

                            <h3>{post.title}</h3>

                            <p>{post.body}</p>

                        </div>

                    ))
                }

            </div>

        );

    }

}

export default Posts;