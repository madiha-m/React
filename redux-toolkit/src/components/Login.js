import React from 'react'
import { useDispatch } from 'react-redux'  //use to add, modify, delete values of state
import { login, logout } from '../features/user'

function Login() {
    const dispatch = useDispatch(); // dispatch or for sending state data

    return (
        <div className='container'>
            <button
                onClick={() => {
                    dispatch(login({ //this is how we access payload of action
                        name: 'Test Name',
                        age: 10,
                        email: 'test@email.com'
                    }))
                }}
            >
                Login
            </button>
            <button
                onClick={() => {
                    dispatch(logout())
                }}
            >
                Logout
            </button>
        </div>
    )
}

export default Login;
