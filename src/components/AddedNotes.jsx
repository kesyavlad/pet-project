import React, {useState} from 'react';
import "../style/styleInput.css"


const AddedNotes = (props) => {
    return (
        <div className="styleAdded">
            <input className='inputField' {...props}/>
        </div>
    );
};

export default AddedNotes;