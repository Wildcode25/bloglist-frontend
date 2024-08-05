import axios from "axios";
const baseUrl = '/api'
let token=null;

export class UserService{
    static async login({password, username}){
        try{
        const res = await axios.post('/api/login', {password, username})
        return res.data;
    }catch(e){
        console.error(e.message)
    }
    }
    
    static defineConfig(token){
        return {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    }
}