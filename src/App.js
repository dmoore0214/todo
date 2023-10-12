import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputItem, setInputItem] = useState([]);
  const [items, setItems] = useState([]);

  const handleAddItem = () => {
    const newItem = {id: items.length + 1, name: inputItem, isChecked: false};
    setItems([...items, newItem]);
  setInputItem('');
  };

  const handleCheck = (id) =>{
    setItems(
      items.map((item) => 
      item.id === id ? {...item, isChecked: !item.isChecked} : item
      )
    )
  };

  const removeElement = (id) =>{
    const newList = items.filter((item) => item.id !== id);
    setItems(newList); 
  }

  return (
    <div className="App">
      <div className="List">
        <h1>To Do List</h1>
        <div className="add-tasks">
          <label for="task">Add Task:</label>
          <input type="text" id="task" value ={inputItem} onChange={(e) => setInputItem(e.target.value)}/>
          <button type='submit'onClick={handleAddItem}>Submit</button>
        </div>
        <div className="to-do-list">
          <h2 className="list-header">List</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <input type="checkbox" 
                checked={item.isChecked}
                onChange={() => handleCheck(item.id)} />
                <span className={item.isChecked ? 'crossed' : ''}>{item.name}</span>
                <button type='button' onClick={()=> removeElement(item.id)}>X</button>
                </li>
            )
            )}
            
          </ul>
        </div>
      </div>
    </div>
  );
}


export default App;
