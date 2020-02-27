import React from 'react'

const Ob1 = () =>{
    return(
        <div className="object1">
        <div className="title-object1">
          <h4>Debugger</h4>
          <div className="title-object1-icon">
            <a href="/" className="title-object1-icon-1 ">
              <i className="fa fa-angle-double-left " aria-hidden="true" />
              <span>Previous   |</span>
            </a>
            <p> 1 of 2 | </p>
            <a href="/" className="title-object1-icon-2 active">                    
              <span>Next</span>
              <i className="fa fa-angle-double-right " aria-hidden="true" />
            </a>
          </div>
        </div>
        <p>Added by <a href="/">Priyadarshini-  about 1 hour</a> ago.</p>
      </div>
        
    )
}

export default Ob1