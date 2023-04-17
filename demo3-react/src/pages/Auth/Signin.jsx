import React from 'react'

const Signin = () => {

    return (
        <div>
            <form onClick={onHandleSubmit}>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" onChange={onHandleChange} name='email' />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="text" class="form-control" id="password" onChange={onHandleChange} name='password' />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signin