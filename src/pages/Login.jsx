import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Aswanna.lk</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder='E-Mail' />
                <input type="password" placeholder='Password' />

                <button>Login</button>
            </form>

            <p>Don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login