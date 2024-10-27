import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";


const CreateAccountPage = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate();

  const createAccount = async()=>{
    try {
        if(password != confirmPassword ){
          setError('Password and confirm password do not match');
          return;
        }
        const auth = getAuth();
        
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        if(userCredential.user){
          navigate('/articles')
        }
       
    } catch (error) {
        setError(error.message)
    }
    
  } 

  return (
    <>
    <h1>Create Account</h1>
    {error && <p className='error'>{error}</p>}
    <div className='create-account-form'>
        <input 
            placeholder='Your email address'
            value={email}
            onChange={e=> setEmail(e.target.value)}
            type="text" />
        <input 
            placeholder='Your password'
            value={password}
            onChange={e=> setPassword(e.target.value)}
            type="password" />
          <input 
            placeholder='Re-enter your password'
            value={confirmPassword}
            onChange={e=> setConfirmPassword(e.target.value)}
            type="password" />
        <button onClick={createAccount}>Create Account</button>
        <Link to='/login'>
           Already have an account?Log in here.
        </Link>
    </div>
    </>
  )
}

export default CreateAccountPage