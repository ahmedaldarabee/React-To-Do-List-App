import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({ data, deleteData }) => {
    const userInfo = data.length > 0 ? data.map((user) => (
        <tr className='text-center pointer' key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td> <FontAwesomeIcon onClick={() => deleteData(user.id)} className='xmark-icon' title='delete these data?' icon={faXmark} role="button" aria-label="Delete user" /> </td>
        </tr>
    )) : (
        <tr>
            <td colSpan={3} className='text-capitalize fw-bold text-center'>
                try to add new users!
            </td>
        </tr>
    );

    return (
        <div className='todo-container'>
            <div className='container box-shadow'>
                <div className="content text-center">
                    <h3 className='m-2 text-capitalize text-white'>to do list app</h3>
                    <table className="table">
                        <thead>
                            <tr className='text-center'>
                                <th scope="col" className='text-capitalize'>name</th>
                                <th scope="col" className='text-capitalize'>age</th>
                                <th scope="col" className='text-capitalize'>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userInfo}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ToDo;