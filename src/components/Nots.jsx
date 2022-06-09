import React from 'react';
import '../style/styleNots.css'
import Clear from "../images/delete.svg"

const Nots = (props,remove) => {
    return (
        <div className='notes'>
            <div>
            <strong>{props.number}.{props.post.title}</strong>
                <div>{props.post.body}</div>
                <div>{JSON.stringify(props.post.value)}</div>
            </div>
            <div>
            <img src={Clear} alt='deleteButton' onClick={()=>{props.remove(props.post)}}/>
            </div>
        </div>
    );
};

export default Nots;