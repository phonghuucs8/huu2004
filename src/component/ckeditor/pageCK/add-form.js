import React from 'react';

const Add = () => {
    return(
        <div className="add_attachment">
            <label htmlFor="myfile"> Files </label>
            <input type="file" id="myfile" name="myfile" />
            <span>(Maximum size: 100 KB)</span>
      </div>
    )
}
export default Add