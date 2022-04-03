import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, updateUser } from '../features/crud'

function StudyCRUD() {
    const userLst = useSelector((state) => state.crud.value);
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');

    return (
        <div className='container'>
            <div className='addUser'>
                <input type="text" placeholder='name'
                    onChange={(e) => { setName(e.target.value) }} />
                <input type="text" placeholder='user name'
                    onChange={(e) => { setUserName(e.target.value) }} />
                <button
                    onClick={() => {
                        dispatch(addUser({ id: 0, name, userName: userName }))
                    }}
                >
                    Add User
                </button>
            </div>
            <div className='displayUser'>
                {
                    userLst.map((user) => {
                        return (
                            <div key={user.id}>
                                <h3>
                                    {user.name}
                                </h3>
                                <h3>
                                    {user.userName}
                                </h3>
                                <input type="text" placeholder='user name'
                                    onChange={(e) => { setUserName(e.target.value) }}
                                />
                                <button
                                    onClick={() => {
                                        dispatch(updateUser({ id: user.id, userName }))
                                    }}
                                >
                                    Edit User
                                </button>
                                <button
                                    onClick={() => {
                                        dispatch(deleteUser({ id: user.id }))
                                    }}
                                >
                                    Delete User
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StudyCRUD;
