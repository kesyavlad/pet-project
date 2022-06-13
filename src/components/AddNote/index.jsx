import React from 'react';
import './index.css';

const AddNote = (props) => (
  <div className="styleAdded">
    <input className="inputField" {...props} />
  </div>
);

export default AddNote;
