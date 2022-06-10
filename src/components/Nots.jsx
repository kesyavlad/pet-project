import React, {useState,useEffect} from 'react';
import '../style/styleNots.css'
import Clear from "../images/delete.svg"
import Clock from 'react-live-clock';

const Nots = (props,remove) => {
    const [second, setSecond] = useState('')
    const event = new Date(props.post.value)
    function timechel() {
        const addTime = event.toLocaleDateString()
        let array = addTime.split('.')
        array = [array[0], array [1], array[2]] = [array[2], array[1], array[0]]
        let test = array.join('.')
        let diff = new Date(test) - new Date()
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        return `${days}day ${hours}h ${minutes} ${seconds}s `
    }
    setInterval(() => {
        setSecond(timechel())
    },  1000);


    return (
        <div className='notes'>
            <div>
            <strong>{props.number}.{props.post.title}</strong>
                <div>{props.post.body}</div>
                <div>{event.toLocaleDateString() }</div>
            </div>
            <div>{second}</div>
            <div>
            <img src={Clear} alt='deleteButton' onClick={()=>{props.remove(props.post)}}/>
            </div>
        </div>
    );
};

export default Nots;