import React from 'react'
import Nabvar from './nabvar'
import Search from './search'
import Chats from './chatsAll'
function sidebar() {
  return (
    <>
      <div className='sidebar'>
        <Nabvar />
        <Search />
        <Chats />
      </div>
    </>
  )
}

export default sidebar
