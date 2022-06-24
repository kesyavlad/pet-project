import React, { useEffect, useState} from 'react';
import '../Note/index.css';
import Clear from '../../assets/images/delete.svg';
import ModalDialog from "../ModalWindow";

const Note = ({ remove, post, number }) => {
  const {title, time} = post
  const periodCalculate = () => {
    let calculateTime = new Date(time) - new Date();
    const days = calculateTime > 0 ? Math.floor(calculateTime / 1000 / 60 / 60 / 24) : 0;
    const hours = calculateTime > 0 ? Math.floor(calculateTime / 1000 / 60 / 60) % 24 : 0;
    const minutes = calculateTime > 0 ? Math.floor(calculateTime / 1000 / 60) % 60 : 0;
    const seconds = calculateTime > 0 ? Math.floor(calculateTime / 1000) % 60 : 0;
    return `${days}day ${hours}h ${minutes}min ${seconds}sec `;
  }
  const [clock, setClock] = useState(periodCalculate());

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(periodCalculate());
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notes">
      <div>
        <strong>
          {number}.{title}
        </strong>
        <div>{time}</div>
      </div>
      <div>{clock}</div>
      <div>
        <ModalDialog text ={title} onSubmit={()=>{remove(post)}}>
          <img
              src={Clear}
              alt="deleteButton"
          />
        </ModalDialog>

      </div>
    </div>
  );
};

export default Note;
