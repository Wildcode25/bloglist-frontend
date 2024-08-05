import { useState } from "react";
import blogService from "../services/blogs.js";
import { UserService } from "../services/user.js";
const Blog = ({ blog, user }) => {
  const [visible, setVisible] = useState(false);
  const [likes, setLikes] = useState(blog.likes);
  const addLike = async () => {
    const newLikes = likes + 1;
    await blogService.updateBlog({
      blog: { id: blog._id, likes: newLikes },
      config: UserService.defineConfig(user.token),
    });
    setLikes(newLikes);
  };
  const deleteBlog = async () => {
    if (confirm("Are you sure?")) {
      setVisible(null);
      await blogService.deleteBlog({
        blog: { id: blog._id },
        config: UserService.defineConfig(user.token),
      });
    }
  };
  if (visible !== null)
    return (
      <div style={{ textAlign: "center", border: "black solid 2px" }}>
        <h2>
          {blog.title}{" "}
          <button onClick={() => setVisible(!visible)}>
            {visible ? "hide" : "view"}
          </button>{" "}
        </h2>
        <strong>{blog.author}</strong> <br />
        {visible && (
          <>
            <a>{blog.url}</a> <br />
            <b>likes: {likes} </b>
            <button onClick={addLike}>like</button> <br />
            <button onClick={deleteBlog}>Eliminar</button>
          </>
        )}
      </div>
    );
};

export default Blog;
