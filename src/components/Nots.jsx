import React, {useState,useEffect} from 'react';
import '../style/styleNots.css'
import Clear from "../images/delete.svg"

const Nots = (props,remove) => {
    const [second, setSecond] = useState('')
    let event = new Date(props.post.value)
    if(event.toLocaleDateString() === "Invalid Date"){
        event = new Date()
    }
    function timechel() {
        const stringTime = event.toLocaleDateString()
        let array = stringTime.split('.')
        array = [array[0], array [1],array[2]] = [array[2], array[1], array[0]]
        let newTime = array.join('.')+" "+ props.post.time
        let calculateTime = new Date(newTime) - new Date()
        const days = calculateTime > 0 ? Math.floor(calculateTime / 1000 / 60 / 60 / 24) : 0;
        const hours = calculateTime > 0 ? Math.floor(calculateTime / 1000 / 60 / 60) % 24 : 0;
        const minutes = calculateTime > 0 ? Math.floor(calculateTime / 1000 / 60) % 60 : 0;
        const seconds = calculateTime > 0 ? Math.floor(calculateTime / 1000) % 60 : 0;
        return `${days}day ${hours}h ${minutes}min ${seconds}sec `
    }
        setInterval(() => {
            setSecond(timechel)
        },  1000);


    return (
        <div className='notes'>
            <div>
            <strong>{props.number}.{props.post.title}</strong>
                <div>{props.post.body}</div>
                <div>{event.toLocaleDateString() }</div>
            </div>
            {props.cheked? <div>{second}</div>: ''}
            <div>
            <img src={Clear} alt='deleteButton' onClick={()=>{props.remove(props.post)}}/>
            </div>
        </div>
    );
};

export default Nots;