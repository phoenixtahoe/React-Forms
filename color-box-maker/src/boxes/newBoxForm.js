import {React, useState} from "react";
import uuid from "uuid/v4";

function BoxForm ({createBox}) {
    const [formData, setFormData] = useState({
        width: "",
        height: "",
        color: ""
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
        createBox({...formData, id: uuid()})
    } 


    return (
            <form onSubmit={gatherInput}>
                <div className="form-group m-2">
                    <label htmlFor="height">Height</label>
                    <input className="form-control" onChange={handleChange} id="height" name="height" value={formData.height} />
                    <label htmlFor="width" >Width</label>
                    <input className="form-control" onChange={handleChange} id="width" name="width" value={formData.width}/>
                    <label htmlFor="width" >Color</label>
                    <input className="form-control" onChange={handleChange} id="color" name="color" value={formData.color} />
                </div>
                <button className="btn btn-primary">Create Box</button>
            </form>
    )
}

export default BoxForm;