import React from 'react' 
import { Link } from 'react-router-dom'; 
import { useState } from 'react'; 
import '../login/login.css'; 

const Register = () => {
    const [error,setError] = useState('');  
    const [form,setForm] = useState({fullname:'',email:'',username : '',password : ''}); 

    const handleInput = (e) => {
    setForm(state=>state={...state,[e.target.name]:e.target.value})
    } 

    const handleSubmit = (e) => {
    e.preventDefault();  
    if(form.username.trim()==''){
        return setError('Please enter username')
    }else if(form.password.trim()==''){
        return setError('Please enter password')
    }else if(form.fullname.trim()==''){
        return setError('Please enter your fullname')
    }else if(form.email.trim()==''){
        return setError('Please enter your email')
    }
    console.log(form)
    }

  return (
    <div className='page'>
          <form className='form' id='login-form' onSubmit={handleSubmit}> 
            <h2>Sign Up</h2>
            <div className='input-field-container'>
              <label className='input-label'>Fullname</label>
              <input type='text' placeholder='John Doe' name='fullname' onChange={handleInput}/>
            </div> 

            <div className='input-field-container'>
              <label className='input-label'>Username</label>
              <input type='text' placeholder='John123' name='username' onChange={handleInput}/>
            </div> 

            <div className='input-field-container'>
              <label className='input-label'>Email</label>
              <input type='email' placeholder='Johndoe@gmail.com' name='email' onChange={handleInput}/>
            </div>  
            
            <div className='input-field-container'>
              <label className='input-label'>Password</label>
              <input type='password' placeholder='12345678%23#' name='password' onChange={handleInput}/>
            </div> 

            {error && <p className='error-message'style={{color:'red'}}>{error}</p>}
            <button type='submit'>SIGNUP</button> 
            <p>Already have an account?<Link to='/login'>Login</Link> here</p>
          </form>
        </div>
  )
}

export default Register