import React,{useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = ({setValue , value}) => {
    return (
            <div>
                <Calendar
                    onChange={setValue}
                    value={value}
                    minDate={new Date()}
                />
            </div>
    );
};

export default CustomCalendar;