import React from 'react'
import Messages from './messagesAll'
import Input from './input'
import Cam from '../pages/img/cam.png'
import Add from '../pages/img/add.png'
import More from '../pages/img/more.png'

function Chat() {
  return (
    <>
      <div className='chat'>
        <div className='chatInfo'>
          <span>Shihab</span>
          <div className='chatIcons'>
            <img src={Cam} alt='' />
            <img src={Add} alt='' />
            <img src={More} alt='' />
          </div>
        </div>
        <Messages />
        <Input />
      </div>
    </>
  )
}

export default Chat
