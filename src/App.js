import './App.css';
import Note from './components/Note';
import AddNote from './components/AddNote';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNoteAction,
  deleteNoteAction,
  sortNoteDecreasingAction,
  sortNoteIncreasingAction
} from './components/store/actions/notes';


function App() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(new Date());
  const [search, setSearch] = useState('');
  const [time, setTime] = useState('23:59');
  const dispatch = useDispatch();
  const note = useSelector((state) => state.notes);
  function formatDate(date) {
    return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('.');
  }
  const addNewNotes = () => {
    const newNote = {
      id: Date.now(),
      title,
      time: `${formatDate(value)} ${time}`
    };
    dispatch(addNoteAction(newNote));
    setTitle('');
    setTime('23:59');
  };

  const deleteNote = (id) => {
    dispatch(deleteNoteAction(id));
  };

  const sortNoteDecreasing = () => {
    dispatch(sortNoteDecreasingAction());
  };
  const sortNoteIncreasing = () => {
    dispatch(sortNoteIncreasingAction());
  };
  const handleKeypress = e => {
    if (e.key==="Enter" && title.length>0) {
      addNewNotes();
    }
  };

  return (
    <>
      <div>
        <AddNote
          type="text"
          placeholder="Add a reminder"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          onKeyPress={handleKeypress}
        />
        <input
          className="inputField"
          type="text"
          onChange={(e) => {
            setSearch(e.currentTarget.value);
          }}
          placeholder="Search....."
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
        <button className="buttonColor" onClick={addNewNotes} disabled={!title.trim().length > 0} >
          Add Note
        </button>
      </div>
      <div className="flexElement">
        {note.length ? (
          note
            .filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
            .map((note, index) => (
              <Note
                key={Math.random().toString(16).slice(2)}
                number={index + 1}
                remove={() => deleteNote(note.id)}
                post={note}
              />
            ))
        ) : (
          <div className="noList">
            No list
          </div>
        )}
      </div>
    </>
  );
}

export default App;
