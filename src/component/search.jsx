import React, { useState } from 'react'

function Search() {
  const [username, setUsername] = useState('')
  const [err, setErr] = useState(false)
  const [user, setUser] = useState(null)
  const handleKey = () => {}
  const handleSelect = () => {}
  return (
    <div className='search'>
      <div className='searchForm'>
        <input
          type='text'
          placeholder='Find a user'
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className='userChat' onClick={handleSelect}>
          <img src={user.photoURL} alt='' />
          <div className='userChatInfo'>
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
