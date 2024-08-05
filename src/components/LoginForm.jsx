export const LoginForm = ({username, password, setUsername, setPassword, submitHandle})=>{
    return (
        <form onSubmit={submitHandle}>
            <div>
            <label htmlFor="">
                Username: 
                <input onChange={({target})=>setUsername(target.value)} value={username} type="text" />
            </label>
            </div>
            
            <div>
            <label htmlFor="passwordInput">
                Password: 
                <input value={password} onChange={({target})=>setPassword(target.value)} id="passwordInput" type="text" />
            </label>
            </div>
            <button type="submit">login</button>
        </form>
    )
}