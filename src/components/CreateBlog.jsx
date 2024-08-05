import { useState } from "react"
import blogService from '../services/blogs'
import { UserService } from "../services/user"
import { notifyOperation } from "../utils/notifyOperation"
export const CreateBlog = ({user, setMessage})=>{
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const createBlog = async (e)=>{
        e.preventDefault()
        const data = await blogService.createBlog({config: UserService.defineConfig(user.token), blog: {
            title,
            author,
            url
        }})
        console.log(data)
        notifyOperation({message: data.message, setMessage})
        setAuthor('')
        setTitle('')
        setUrl('')
    }
    return <form onSubmit={createBlog}>
        <div>
            <label htmlFor="">
                <h3>Title:</h3>
            <input value={title} onChange={({target})=>setTitle(target.value)} type="text" />
            </label>
        </div>
        <div>
            <label htmlFor="">
                <h3>Author:</h3>
            <input value={author} onChange={({target})=>setAuthor(target.value)} type="text" />
            </label>
        </div>
        <div>
            <label htmlFor="">
                <h3>Url:</h3>
            <input value={url} onChange={({target})=>setUrl(target.value)} type="text" />
            </label>
        </div>
        <br />
        <button type="submit">Create</button>
    </form>
}