import React from 'react'

function login() {
  const handlesubmit = () => {}
  return (
    <>
      <div className='formContainer'>
        <div className='form'>
          <span className='register'>Login</span>
          <form onSubmit={handlesubmit}>
            <input
              required
              type='email'
              placeholder='Enter your Mail....'
              className='email'
            />
            <input
              required
              type='password'
              placeholder='Enter Your Password....'
              className='password'
            />

            <button required className='signin'>
              SignIn
            </button>
            <p>You have not an Account? Register</p>
          </form>
        </div>
      </div>
    </>
  )
}

export default login
