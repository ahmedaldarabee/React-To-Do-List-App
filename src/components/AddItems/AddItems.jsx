import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AddItem.css'

const AddItems = ({ addItem }) => {
    
    const [user, setUser] = useState({ name: '', age: '' });

    const clearInput = () => {
        setUser({ name: '', age: '' });
    }
    
    const submitHandler = (event) => {
        event.preventDefault();
        addItem(user);
        clearInput();
    }
    
    const inputHandler = (event) => {
        setUser(prevUser => ({
            ...prevUser,
            [event.target.id]: event.target.value
        }));
    }

    return(
        <>
            <form onSubmit={submitHandler} className="m-0 d-flex justify-content-center align-items-center flex-column">
                
                <div className="main-input d-flex justify-content-center align-items-center gap-1">
                    <input id="name" onChange={inputHandler} value={user.name} placeholder="Enter user name here" type="text" className="form-control" />
                    <input id="age" onChange={inputHandler} value={user.age} placeholder="Enter user age here" type="number" className="form-control" />
                </div>
                
                <div className="submit-btn mt-2">
                    <input type="submit" value="Send" className="form-control" />
                </div>
            </form>
        </>
    )
}

export default AddItems;
