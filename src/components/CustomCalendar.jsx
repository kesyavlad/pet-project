import React,{useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

const CustomCalendar = () => {
    const [value, onChange] = useState(new Date());
    console.log(value)

    return (
            <div>
                <Calendar
                    onChange={onChange}
                    value={value}
                    minDate={new Date()}
                />
            </div>
    );
};

export default CustomCalendar;