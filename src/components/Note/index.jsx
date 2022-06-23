import React, { useEffect, useState } from 'react';
import '../Note/index.css';
import Clear from '../../assets/images/delete.svg';
import ModalDialog from "../ModalWindow";

const Note = ({ remove, post, number }) => {
  const [time, setTime] = useState(periodCalculate());


  function periodCalculate() {
    let calculateTime = new Date(post.time) - new Date();
    const days = calculateTime > 0 ? Math.floor(calculateTime / 1000 / 60 / 60 / 24) : 0;
    const hours = calculateTime > 0 ? Math.floor(calculateTime / 1000 / 60 / 60) % 24 : 0;
    const minutes = calculateTime > 0 ? Math.floor(calculateTime / 1000 / 60) % 60 : 0;
    const seconds = calculateTime > 0 ? Math.floor(calculateTime / 1000) % 60 : 0;
    return `${days}day ${hours}h ${minutes}min ${seconds}sec `;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(periodCalculate());
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="notes">
      <div>
        <strong>
          {number}.{post.title}
        </strong>
        <div>{post.time}</div>
      </div>
      <div>{time}</div>
      <div>
        <ModalDialog text ={post.title} onSubmit={()=>{remove(post)}}>
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
