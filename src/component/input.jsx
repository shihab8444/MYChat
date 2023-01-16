import React, { useState } from 'react'
import Attach from '../pages/img/attach.png'
import Img from '../pages/img/img.png'

function Input() {
  const [text, setText] = useState('')
  const [img, setImg] = useState(null)
  const handlechange = () => {}

  return (
    <>
      <div className='input'>
        <input
          type='text'
          placeholder='Typing sometjing...'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <div className='send'>
          <img src={Attach} alt='' type='file' />
          <input
            type='file'
            style={{ display: 'none' }}
            id='file'
            onChange={(e) => setImg(e.target.files[0])}
          />
          <label htmlFor='file'>
            <img src={Img} alt='' />
          </label>
          <button onClick={handlechange}>send</button>
        </div>
      </div>
    </>
  )
}

export default Input
