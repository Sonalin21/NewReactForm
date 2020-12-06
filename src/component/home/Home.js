import React, { useState, useEffect } from 'react';

import useFormHook from '../hooks/CustomHook';

const Home = () => {
    const alertFunction = () => {
        alert(`User created!
            Name : ${inputs.fullName}
            Password : ${inputs.password}
        `);
    }

    const { inputs, handleSubmit, handleInputChange } =  useFormHook(alertFunction);

    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" name="fullName" onChange = {handleInputChange} value = {inputs.fullName} required></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password" onChange = {handleInputChange} value = {inputs.password} required></input>
            </div>

            <button type="submit"> Login </button>
        </form>
    )
}

export default Home;