import React from 'react';

const Date = () =>{
    return(
        <div className="form-date">
        <div className="start-date">
          <label>Start date</label>
          <input id="issue_start_date" defaultValue="25/02/2020" />
          <i className="fa fa-calendar" aria-hidden="true" />
        </div>
        <div className="Due-date">
          <label>Due date</label>
          <input id="issue_Due_date" />
          <i className="fa fa-calendar" aria-hidden="true" />
        </div>
        <div className="Done-date">
          <label>% Done</label>
          <select id="issue_Done_date">
            <option select='selected' value="0%">0%</option>
            <option value="10%">10%</option>
            <option value="20%">20%</option>
            <option value="30%">30%</option>
            <option value="40%">40%</option>
            <option value="50%">50%</option>
            <option value="60%">60%</option>
            <option value="70%">70%</option>
            <option value="80%">80%</option>
            <option value="90%">90%</option>
            <option value="1o0%">100%</option>
          </select>
        </div>
      </div>

)}
export default Date
   