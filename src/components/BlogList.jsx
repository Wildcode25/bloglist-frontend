import Blog from "./Blog";
export const BlogList = ({blogs, user})=>{
    return (
        <div style={{display: "flex",
          gap: "15px",
          flexDirection: "column",
          justifyContent: "center",
          width: "570px"
        }}>
          <h2>blogs</h2>
  
          {blogs.map((blog) => (
            <Blog key={blog._id} user={user} blog={blog} />
          ))}
        </div>
      );
}