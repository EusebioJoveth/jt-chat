import React,{ useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'

function Message(message) {

  const {currentUser} = useContext(AuthContext)
  const {data} = useContext (ChatContext)
  
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.pexels.com/photos/11500401/pexels-photo-11500401.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt='' />
        <span>Agora mesmo</span>
      </div>
      <div className="messageContent">
        <p>Ola</p>
        { <img src="https://images.pexels.com/photos/11523778/pexels-photo-11523778.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />}
      </div>
    </div>
  )
}

export default Message