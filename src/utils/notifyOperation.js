export function notifyOperation({message, setMessage}){
    if(message.isError) return setMessage({
        content: message.content,
        isError: true
    })
    setMessage({
        content: message.content
    })
}