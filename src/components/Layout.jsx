import { useEffect, useState } from "react";
import { BlogList } from "./BlogList";
import blogService from '../services/blogs.js'
import { UserService } from "../services/user.js";
import { CreateBlog } from "./CreateBlog.jsx";
export const Layout = ({page, user, setMessage})=>{
    const [blogs, setBlogs] = useState([]);
 
    useEffect(() => {
        const initBlogs = async () => {
          const blogs = await blogService.getAll({
            config: UserService.defineConfig(user.token),
          });
          setBlogs(blogs);
           
          }
          initBlogs();
        }
        , [page]);

    return (
        <>
        {page===1 &&  <BlogList blogs={blogs} user={user}/>}
        {page===2 && <CreateBlog user={user} setMessage={setMessage}/>}
        </>
    )
}