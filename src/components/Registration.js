import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import { Login } from './Login'

function Registration() {

    const[name,setname] = useState ("")
    const[email,setemail] = useState ("")
    const[password,setpassword] = useState ("")
    const[phone,setphone] = useState ("")
    const[flag,setflag] = useState (false)
    const[login,setlogin] = useState (true)



const handleSubmit = (e) => {
    e.preventDefault();

    if(!name || !email || !password || !phone){
        setflag(true)
    } else{
        setflag(false)
        localStorage.setItem('Email', JSON.stringify(email));
        localStorage.setItem('Password', JSON.stringify(password));

        console.log('saved in local storage');
        setlogin(!login);
    }
}

const handleClick = () => {
    setlogin(!login);
}



  return (
    <div>

    {login ? (

        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className='form-group'>
                <label>Name:</label>
                <input
                type={"text"}
                className="form-control"
                placeholder='Enter Full name'
                onChange={(event)=> setname(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Email:</label>
                <input
                type={"text"}
                className="form-control"
                placeholder='Enter Your Email'
                onChange={(event)=> setemail(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Password:</label>
                <input
                type={"password"}
                className="form-control"
                placeholder='Enter Password'
                onChange={(event)=> setpassword(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>PhoneNumber:</label>
                <input
                type={"number"}
                className="form-control"
                placeholder='Enter Contact Number'
                onChange={(event)=> setphone(event.target.value)}
                />
            </div>
            <button type='submit' className='btn btn-primary btn-lg'>Register</button>

            <button onClick={handleClick} className="text-white btn btn-info">Already Registered{" "}? LOGIN IN</button>

        {flag && (
            <Alert color='primary' variant='danger'>
                Please Fill Every Field
            </Alert>
        )}

        </form>

):(
        <Login/>
)}
    </div>
  )
}

export default Registration