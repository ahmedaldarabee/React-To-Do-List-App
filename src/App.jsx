import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/ToDo/Todo';
import AddItems from './components/AddItems/AddItems';
import './components/ToDo/Todo.css'

const App = () => {
  const [data, setData] = useState([{
      id: 1,
      name: "ahmed nayel al darabee",
      age: 22
    },
  ]);

  const deleteData = (id) => {
    setData(data.filter((user) => user.id !== id));
  }

  const addItem = (item) => {
    const newItem = {
      ...item,
      id: Math.round(Math.random() * 100),
      age: Number(item.age)
    };
    setData([...data, newItem]);
  }

  return (
    <div style={{background: 'linear-gradient(to right, #4A90E2, #6A11CB)', minHeight: '100vh'}}>
      <div className='to-do-section'>
        <ToDo data={data} deleteData={deleteData}/>
        <AddItems addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
