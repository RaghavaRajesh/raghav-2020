import React from 'react';
import  './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p> My name is {props.name} </p>
            <p> This is {props.value}. </p>
        </div>
    );
}

export default userOutput;