import { useState, useEffect } from "react";
import { LoginForm } from "./components/LoginForm";
import { UserService } from "./services/user";
import { Notification } from "./components/Notification";
import { Home } from "./components/Home";
import { notifyOperation } from "./utils/notifyOperation";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  useEffect(()=>{
    const newUser = window.localStorage.getItem("blogAppUser");
          if (newUser) {
            const user = JSON.parse(newUser);
            setUser(user);
  }}, [])
  const submitHandle = async (e) => {
    e.preventDefault();
    const data = await UserService.login({ password, username });
    if(data.message.isError) return notifyOperation({message: data.message, setMessage})
    setUser(data);
    window.localStorage.setItem("blogAppUser", JSON.stringify(data));
    setMessage({
      isError: false,
      content: "User logged succesfuly",
    });  
    
  };
  
  return (
    <>
      <Notification message={message} setMessage={setMessage} />

      {user === null ? (
        <>
          <h1>Login</h1>
          <LoginForm
            setPassword={setPassword}
            setUsername={setUsername}
            password={password}
            username={username}
            submitHandle={submitHandle}
          />
        </>
      ) : (
        <Home user={user} setMessage={setMessage}/>

      )}
    </>
  );
};

export default App;
