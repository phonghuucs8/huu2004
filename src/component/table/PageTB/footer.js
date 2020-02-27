import React from 'react';

const Footer = () =>{
    return(        
        <div className="footer">
        <div className="icon-footer">
          <i className="fa fa-pencil icon1" aria-hidden="true" />
          <a href="/">Edit</a>
          <i className="fa fa-star icon2" aria-hidden="true" />
          <a href="/">Watch</a>
        </div>
        <div className="infor-footer">
          <span>Also available in:</span>
          <a href='/'><i className="fa fa-wifi" aria-hidden="true"></i> Atorm</a> <span>|</span>
          <a href="/">PDF</a>
        </div>
      </div>
    )
}

export default Footer