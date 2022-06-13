import './App.css';
import Note from './components/Note';
import AddNote from './components/AddNote'; // ToDo change name to AddNote
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(new Date()); // ToDo change value to date
  const [time, setTime] = useState('00:00');

  function formatDate(date) {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('.');
  }

  const addNewNotes = () => {
    const newNote = {
      id: Date.now(),
      title,
      time: `${formatDate(value)} ${time}`
    };

    setNotes([...notes, newNote]);
    setTitle('');
    setTime('00:00');
  };

  const deleteNote = (note) => {
    setNotes(notes.filter((p) => p.id !== note.id));
  };

  return (
    <>
      <div>
        <AddNote
          type="text"
          placeholder="Reminder" // ToDo change to English
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <div>
          <Calendar onChange={setValue} value={value} minDate={new Date()} />
          <input
            type="time"
            value={time}
            onChange={(e) => {
              setTime(e.currentTarget.value);
            }}
            className="timeButton"
          />
        </div>
        <button className="buttonColor" onClick={addNewNotes}>
          Add Note
        </button>
      </div>
      <div className="flexElement">
        {notes.map((note, index) => (
          <Note
            key={Math.random().toString(16).slice(2)}
            number={index + 1}
            remove={deleteNote}
            post={note}
          />
        ))}
      </div>
    </>
  );
}

export default App;
