import React,{useState} from 'react';
import './App.scss';

function App() {
const [count, setCount] =useState(0);
const handleSubtract =() =>{
  setCount(count-1);
}
const handleReset =() =>{
  setCount(count);
}
const handleAdd =()=>{
  setCount(count + 1);
}

  return (
    <section classname = 'counter-sec --flex-center'>
      <div className='container-counter --card --center-all'>
        <h1 className='--text-light'>React Counter</h1>
        <p className='count --my2'>{count}</p>
        <div className='buttons'>
          <button className='--btn --btn-danger' onClick={handleSubtract}>- Subtract</button>
          <button className='--btn --btn' onClick={handleReset}>! Reset</button>
          <button className='--btn --btn-success' onClick={handleAdd}>+ Add</button>

        </div>
      </div>
    </section>
  );
}

export default App;
