import React from 'react';

const Tracker = () =>{
    return(
        <div className="tracker-form">
        <label>Tracker <span>*</span></label>
        <select>
            <option select='selected' value="{1}">1</option>
            <option value="{2}">2</option>
            <option value="{3}">3</option>
            <option value="{4}">4</option>
        </select>
      </div>
    )
}
export default Tracker