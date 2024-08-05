import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = async ({config}) => {

  const request = await axios.get(baseUrl, config)
  return request.data
}

const createBlog = async ({config, blog})=>{
  const res = await axios.post(baseUrl, blog, config)
  return res.data;
}

const updateBlog = async ({blog, config})=>{
  const updatedBlog = await axios.put(`${baseUrl}/${blog.id}`, blog, config)
}
const deleteBlog = async ({blog, config})=>{
  const deletedBlog = await axios.delete(`${baseUrl}/${blog.id}`, config)
}
export default { getAll, createBlog, updateBlog, deleteBlog }