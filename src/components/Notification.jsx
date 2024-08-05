export const Notification=({message, setMessage})=>{
    if(message===null) return null;
    setTimeout(() => setMessage(null), 3000);
    return  <div className="messageContainer">
        <div className={`message ${message.isError?"error":"success"}`}>
        <div className="load"></div>
        <span>{message.content}</span>
    </div>
    </div>
}