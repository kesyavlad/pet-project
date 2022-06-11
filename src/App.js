import logo from './logo.svg';
import './App.css';
import Nots from "./components/Nots";
import AddedNotes from "./components/AddedNotes";
import React, {useState} from "react";
import CustomCalendar from "./components/CustomCalendar";


function App() {

    const[notes, setNotes] = useState([])
    const [title, setTitle]=useState('')
    const [body, setBody] = useState('')
    const [value, setValue] = useState()
    const [isChecked, setIsChecked] = useState(false)
    const [time, setTime] = useState('00:00')

    const addNewNotes = () => {
      const newNote = {
          id: Date.now(),
          title,
          body,
          value,
          time
      }



      setNotes([...notes,newNote])
        setTitle('')
        setBody('')
    }
    const deleteNotes = (note) => {
        setNotes(notes.filter(p => p.id !== note.id))
    }
    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };


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
                <div >
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleOnChange}
                    />
                    {isChecked?<span>Убрать календарь</span>:<span>Добавить календарь</span>}
                    {isChecked?
                        <>
                        <CustomCalendar value={value} setValue ={setValue}/>
                        <input type="time" id="appt" name="appt"
                               onChange={(e) => {
                                   setTime(e.currentTarget.value)}}/>
                        </>
                        :
                        <div></div>}
                </div>
        <button className="buttonColor" onClick={addNewNotes}>Add Note</button>
            </div>
        </div>
        <div className='flexElement'>
            {notes.map((notes, index)=>
                <Nots
                    number ={index + 1}
                    remove = {deleteNotes}
                    value={value}
                    post={notes}
                    cheked = {isChecked}
                />)}
        </div>

    </>
  );
}

export default App;
