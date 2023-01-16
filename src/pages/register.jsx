import React, { useState } from 'react'
import Add from './img/addAvatar.png'
import { auth, storage, db } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
function Register() {
  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password)

      //Create a unique image name
      const date = new Date().getTime()
      const storageRef = ref(storage, `${displayName + date}`)

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            })
            //create user on firestore
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })

            //create empty user chats on firestore
            await setDoc(doc(db, 'userChats', res.user.uid), {})
            navigate('/')
          } catch (err) {
            console.log(err)
            setErr(true)
            setLoading(false)
          }
        })
      })
    } catch (err) {
      setErr(true)
      setLoading(false)
    }
  }
  return (
    <>
      <div className='formContainer'>
        <div className='form'>
          <span className='register'>Register</span>
          <form onSubmit={handleSubmit}>
            <input required type='text' placeholder='Enter your Name....' />
            <input required type='email' placeholder='Enter your Mail....' />
            <input
              required
              type='password'
              placeholder='Enter Your Password...'
            />
            <input required style={{ display: 'none' }} type='file' id='file' />

            <label htmlFor='file'>
              <img src={Add} alt='avatar' />
              <span>Add Yor Image</span>
            </label>
            <button required className='signup'>
              SignUp
            </button>
            {loading && 'Uploading and compressing the image please wait...'}
            {err && <span>there's something wrong</span>}
            <p>You do have an Account? Login</p>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
