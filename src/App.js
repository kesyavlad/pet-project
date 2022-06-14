import './App.css';
import Note from './components/Note';
import AddNote from './components/AddNote';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(new Date());
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
  const sortNoteDecreasing = () => {
    setNotes(
      [...notes].sort((a, b) => {
        if (a.time > b.time) {
          return -1;
        }
        if (a.time < b.time) {
          return 1;
        }
      })
    );
  };
  const sortNoteIncreasing = () => {
    setNotes(
      [...notes].sort((a, b) => {
        if (a.time < b.time) {
          return -1;
        }
        if (a.time > b.time) {
          return 1;
        }
      })
    );
  };
  return (
    <>
      <div>
        <AddNote
          type="text"
          placeholder="Reminder"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <div>
          <Calendar onChange={setValue} value={value} minDate={new Date()} />
          <div className="flexBox">
            <input
              type="time"
              value={time}
              onChange={(e) => {
                setTime(e.currentTarget.value);
              }}
              className="timeButton"
            />
            <div className="sortBox">
              <div>
                <input type="radio" name="sort" onClick={sortNoteIncreasing} />
                <label>Sort by increasing</label>
              </div>
              <div>
                <input type="radio" name="sort" onClick={sortNoteDecreasing} />
                <label>Sort by decreasing</label>
              </div>
            </div>
          </div>
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
