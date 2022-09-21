import {doc, onSnapshot } from 'firebase/firestore'
import React, { useState, useEffect, useContext } from 'react'
import { ChatContext } from '../context/ChatContext'
import { db } from '../firebase'
import Message from './Message'

function Messages() {
  
  const { data } = useContext(ChatContext)
  const { messages, setMessages } = useState([]);

  useEffect( () =>{
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc)=>{
      doc.exists() && setMessages(doc.data().messages);
    });

    return () =>{
      unSub()
    };
  }, [data.chatId]);

console.log('messages', messages)
  return (
    <div className='messages'>
       {messages?.map((m) => (
        <Message message={m} key={m.id} />
       ))}
        
    </div>
  )
}

export default Messages