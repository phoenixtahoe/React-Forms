import React, { useState } from "react";
import BoxForm from './newBoxForm'
import Box from './box'

function BoxList() {
    const [formData, setFormData] = useState([]);

    const add = boxObj => {
        setFormData(formData => [...formData, boxObj]);
    };

    const remove = id => {
        setFormData(boxes => boxes.filter(box => box.id !== id));
    };
    
    const Boxes = formData.map(e => (
        <Box key={e.id} id={e.id} width={e.width} height={e.height} color={e.color} remove={remove} />
    ));

    return (
            <div className="boxList">
                <BoxForm createBox={add} />
                {Boxes}
            </div>
    );
}

export default BoxList;
