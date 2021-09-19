import React from "react";

function Box (props) {
    const {remove, id, width, height, color} = props
    return (
        <div className="m-5">
            <div className="card" style={{height: height, width: width, backgroundColor: color}}>
                <button className="btn btn-primary" onClick={() => remove(id)}>Remove</button>
            </div>
        </div>
    )
}


export default Box;