import React from 'react';

const Header = () =>{
    return(        
      <div className="header">
        <div className="text-header">
            <h3>Bug #276361</h3>
        </div>
        <div className="icon-header">
            <i className="fa fa-pencil icon1" aria-hidden="true" />
            <a href="/">Edit</a>
           <i className="fa fa-star icon2" aria-hidden="true" />
            <a href="/">Watch</a>
        </div>
    </div>
    )
}

export default Header