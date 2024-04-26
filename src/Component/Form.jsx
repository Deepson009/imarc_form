import React, { useState } from "react";
import "./form.scss";

function Form() {
  const [inputRows, setInputRows] = useState([{ value1: "", value2: "" }]);

  const addRow = () => {
    setInputRows([...inputRows, { value1: "", value2: "" }]);
  };

  const removeRow = (index) => {
    const updatedRows = [...inputRows];
    updatedRows.splice(index, 1);
    setInputRows(updatedRows);
  };

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedRows = [...inputRows];
    updatedRows[index][name] = value;
    setInputRows(updatedRows);
  };

  return (
    <div className="form">
      <div className="form-container">
        <div className="header-div">
          <span>Manage Product Price Trends</span>
          <button>Add Changes</button>
        </div>
        <div className="input-div">
          <div className="uper">
            <input type="text" />
            <input type="text" />
          </div>
          <div className="lower">
            <div className="left">
              <input type="number" />
              <input type="text" placeholder="26/04/2024"/>
            </div>
            <div className="right">
              <button onClick={addRow}>+</button>
            </div>
          </div>
          {inputRows.map((row, index) => (
            <div className="lower" key={index}>
              <div className="left">
                <input
                  type="number"
                  value={row.value1}
                  onChange={(e) => handleInputChange(index, e)}
                />
                <input
                  type="text"
                  value={row.value2}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="26/04/2024"
                />
              </div>
              <div className="right">
                <button className="removeBtn" onClick={() => removeRow(index)}>-</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Form;
