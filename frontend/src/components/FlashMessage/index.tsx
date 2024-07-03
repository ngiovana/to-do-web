import { Dispatch, SetStateAction, useEffect } from "react"

import { FlashMessageContainer } from './styles'

interface MessageType {
  message: string,
  type: string,
  show: boolean
}

interface FlashMessageProps {
  message: MessageType,
  setMessage: Dispatch<SetStateAction<MessageType>>,
}

export function FlashMessage({ message, setMessage }: FlashMessageProps) {

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage({...message, message: ''});
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  if (!message.message) return null
  
  return (
    <FlashMessageContainer type={message.type} onClick={() => setMessage({...message, message: ''})}>
      <p>{message.message}</p>
    </FlashMessageContainer>
  )
}