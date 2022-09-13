import React from 'react';
import Add from '../img/addAvatar.png';

const Register = () => {
  return (
    <div className='formContainer'>
        <div className="formWrapper">
            <span className="logo">Aswanna.lk</span>
            <span className="title">Register</span>

            <form>
                <input type="text" placeholder='Username' />
                <input type="email" placeholder='E-Mail' />
                <input type="password" placeholder='Password' />
                <input type="file" style={{display:"none"}} id='file' />
                <label htmlFor="file">
                    <img src={Add} alt="Add Avatar" />
                    <span>Add an Avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Alrady have an account? Login</p>
        </div>
    </div>
  )
}

export default Register