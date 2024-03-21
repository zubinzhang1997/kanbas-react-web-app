import React, { useState } from "react";

function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);

    const addElement = () => {
        setArray([...array, Math.floor(Math.random() * 100)]);
    };

    const deleteElement = (index:number) => {
        setArray(array.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Array State Variable</h2>
            <button className="btn btn-success" onClick={addElement}>
                Add Element
            </button>
            <div style={{ padding: "8px" }}>
                {array.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "8px",
                            border: "1px solid gray",
                            padding: "4px",
                        }}
                    >
            <span style={{ marginRight: "8px", padding: "4px", fontWeight: "bold"}}>
              {item}
            </span>
                        <button
                            className="btn btn-danger"
                            onClick={() => deleteElement(index)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ArrayStateVariable;