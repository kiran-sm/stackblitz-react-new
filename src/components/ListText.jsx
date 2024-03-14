import React, { useState } from 'react';

function ListText() {
  const [inputText, setInputText] = useState();
  const [updateList, setUpdateList] = useState([]);
  function handleInputChange(e) {
    setInputText(e.target.value);
  }
  function handleAddClick() {
    if (inputText.trim() !== '') {
      setUpdateList([...updateList, inputText]);
      setInputText('');
    }
  }
  return (
    <div>
      <h1>Adding in list</h1>

      <input type="text" onChange={handleInputChange} value={inputText} />
      <button onClick={handleAddClick}>Add</button>
      <ul>
        {updateList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListText;
