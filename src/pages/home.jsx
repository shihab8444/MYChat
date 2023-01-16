import React from 'react'
import Sidebar from '../component/sidebar'
import Chat from '../component/chat'
function Home() {
  return (
    <>
      <div className='home'>
        <div className='container'>
          <Sidebar />
          <Chat />
        </div>
      </div>
    </>
  )
}

export default Home
