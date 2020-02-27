import React from 'react'

const Ob2 = () =>{
    return(
        <div className="object2">
        <div className="container-fluid" style={{padding: '0 10px'}}>
          <div className="row">
            <div className="col-md-3">
              <h4>Status:</h4>
              <h4>Priority:</h4>
              <h4>Asignee:</h4>
              <h4>Category:</h4>
              <h4>Target version:</h4>               
            </div>
            <div className="col-md-3 object2-pragra">
              <p>New</p>
              <p>Normal</p>
              <p>-</p>
              <p>-</p>
              <p>-</p>               
            </div>
            <div className="col-md-3">
              <h4>Status:</h4>
              <h4>Due date:</h4>
              <h4>% Done:</h4>
              <h4>Spend times:</h4>               
            </div>
            <div className="col-md-3 object3-pragra">
              <p>02/25/2020</p>
              <p>03/06/2020</p>
              <input id="percent-done" /> <span>0%</span>
              <p>-</p>
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default Ob2