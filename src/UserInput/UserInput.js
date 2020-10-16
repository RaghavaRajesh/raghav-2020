import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid grey',
        width: '250px',
        height: '24px',
        margin: '20px'
    }
    return (
        <div>
            <input style={style} type='text' onChange={props.change} value={props.default}/>
        </div>
    );
}

export default userInput;