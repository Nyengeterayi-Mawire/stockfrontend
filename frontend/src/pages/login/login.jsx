import React from 'react' 
import { Link } from 'react-router-dom'; 
import { useState } from 'react'; 
import './login.css'; 

const Login = () => { 
  const [error,setError] = useState('');  
  const [form,setForm] = useState({username : '',password : ''}); 

  const handleInput = (e) => {
    setForm(state=>state={...state,[e.target.name]:e.target.value})
  } 

  const handleSubmit = (e) => {
    e.preventDefault();  
    if(form.username.trim()==''){
      return setError('Please enter username')
    }else if(form.password.trim()==''){
      return setError('Please enter password')
    }
    console.log(form)
  }

  return (
    <div className='page'>
      <form className='form' id='login-form' onSubmit={handleSubmit}> 
        <h2>LOGIN</h2>
        <div className='input-field-container'>
          <label className='input-label'>Username</label>
          <input type='text' placeholder='John123' name='username' onChange={handleInput}/>
        </div> 
        <div className='input-field-container'>
          <label className='input-label'>Password</label>
          <input type='text' placeholder='12345678%23#' name='password' onChange={handleInput}/>
        </div>  
        {error && <p className='error-message'style={{color:'red'}}>{error}</p>}
        <button type='submit'>LOGIN</button> 
        <p>Do not have an account?<Link to='/signup'>Sign Up</Link> here</p>
      </form>
    </div>
  )
}

export default Login