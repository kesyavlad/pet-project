import logo from './logo.svg';
import './App.css';
import Nots from "./components/Nots";
import AddedNotes from "./components/AddedNotes";
import React, {useState} from "react";
import Time from "./components/Time";
import CustomCalendar from "./components/CustomCalendar";


function App() {

    const[notes, setNotes] = useState([])
    const [title, setTitle]=useState('')
    const [body, setBody] = useState('')
    const [value, setValue] = useState()
    const addNewNotes = () => {
      const newNote = {
          id: Date.now(),
          title,
          body,
          value
      }

      setNotes([...notes,newNote])
        setTitle('')
        setBody('')
    }
    const deleteNotes = (note) => {
        setNotes(notes.filter(p => p.id !== note.id))
    }


  return (
    <>
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <div style={{width:"89%"}}>
        <AddedNotes
            type = "text"
            placeholder = "Название заметки "
            onChange = {e =>setTitle(e.target.value)}
            value = {title}
        />
        <AddedNotes
            type = "text"
            placeholder = "Тело заметки "
            onChange = {e =>setBody(e.target.value)}
            value = {body}/>
                <CustomCalendar value={value} setValue ={setValue}/>
        <button className="buttonColor" onClick={addNewNotes}>Add Note</button>
            </div>
        <Time/>
        </div>
        <div className='flexElement'>
            {notes.map((notes, index)=>
                <Nots
                    number ={index + 1}
                    remove = {deleteNotes}
                    value={value}
                    post={notes}
                />)}
        </div>
    </>
  );
}

export default App;
