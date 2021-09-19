import {React, useState} from "react";
import uuid from "uuid/v4";

function TodoForm ({createTodo}) {
    const [formData, setFormData] = useState({
        content: ""
    });

    const handleChange = evt => {
        evt.preventDefault()
        
        const { name, value } = evt.target;

        setFormData(fData => ({
            ...fData,
            [name]: value
        }));

        

    };

    const gatherInput = e => {
        e.preventDefault()
        createTodo({...formData, id: uuid()})
        setFormData({content: ""})
    }

    return (
            <form onSubmit={gatherInput}>
                <div className="form-group m-2">
                    <label htmlFor="content">TodoList!</label>
                    <input
                    id="content"
                    name="content"
                    onChange={handleChange}
                    value={formData.content}
                    />
                </div>
                <button className="btn btn-primary">Create Todo!</button>
            </form>
    )
}


export default TodoForm;