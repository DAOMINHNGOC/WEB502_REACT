import React, { useEffect, useState } from 'react'

const Signup = (props) => {
    const [inputValue, setinputValue] = useState({});
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setinputValue({ ...inputValue, [name]: value })
    }
    const onHandleSubmit = (e) => {
        e.preventDefault();
        props.onSignup(inputValue);
    }
    return (
        <div className='container'>
            <h1>signup</h1>
            <form onSubmit={onHandleSubmit}>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" onChange={onHandleChange} name='email' />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="text" className="form-control" id="password" onChange={onHandleChange} name='password' />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">confirmPassword</label>
                    <input type="text" className="form-control" id="confirmPassword" onChange={onHandleChange} name='confirmPassword' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup