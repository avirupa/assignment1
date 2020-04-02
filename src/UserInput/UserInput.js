import React from 'react';
const userInput = (props) => {
    const InputStyle={
        border:'2px solid red'

    };
    return <input
     type="text" 
     style={InputStyle}
     onChange={props.changed} 
     value={props.currentName} />;
};
export default userInput;