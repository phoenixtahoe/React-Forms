import React from "react";

function Todo (props) {
    const {remove, id, content} = props
    return (
        <div className="m-5">
            <div className="card p-4">
                <div className="card-title">
                    <h5 className="card-title">⏰</h5>
                </div>
                <div className="card-body">
                    <div className="card-text">{content}</div>
                </div>
                <div className="card-body">
                    <button className="card-link btn btn-primary" onClick={() => remove(id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}


export default Todo;