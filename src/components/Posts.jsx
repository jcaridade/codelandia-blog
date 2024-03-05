// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import HeartLikeButton from "./HeartLikeBtn";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data/posts.json")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Erro:", error));
  }, []);

  return (
    <div className="card">
      {posts.map((post, index) => (
        <div key={index}>
          <div className="card-box">
            <div className="card-date">
              <span>{post.date}</span>
              <HeartLikeButton />
            </div>
            <h1>{post.title}</h1>
            <p>{post.subcontent}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
