import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import './App.css';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [unList, setUnList] = useState([]);
  const [compTask, setCompTask] = useState([]);

  function handleChange(e) {
    setInputValue(e.target.value)
    //console.log(inputValue);
  }

  function handleAdd() {
    //console.log(inputValue);
    if(!inputValue){
      alert("enter an item")
      return;
    }

    const unList = {
      id: new Date().getTime(),
      value: inputValue
    };

    setUnList(oldList => oldList.concat(unList));
    setInputValue('');
    //console.log(unList)
  }
  
  function handleDelete(id) {
    console.log(id)
    const newList = unList.filter((item) => item.id !== id)
    setUnList(newList)
    // console.log(newList)
  }
  
  function handleComplete(id) {

    // let comArr = [...compTask];
    // setCompTask(compcomArr => comArr.concat({id}))
    // console.log(comArr)
    // const delCompList = unList.filter((item) => item.id !== id)
    // setUnList(delCompList)
    setCompTask(oldList => oldList.concat(unList));
    handleDelete(id);
  }

  return (
    <div>
      <h1>Todo List App</h1>
      <div className='input-add-container'>
        <input placeholder='Enter your task here...' type='text' onChange={(e) =>handleChange(e)} value = {inputValue}/>
        <Button className='btn-primary btn add' onClick={()=>handleAdd()}>Add</Button>
      </div>
      <hr/>
      <h6 className='pen-heading'>Pending Tasks:</h6>
      <div className='yet-tasks'>
      <ul className='pen-task'>
        {unList.map(item =>{
          return(
            <li key = {item.id}>
              {item.value}
              <Button type ="button" className='btn btn-success completed' onClick={()=>handleComplete(item.id)}>Completed</Button>
              <Button type='button' className='btn btn-danger delete' onClick={() =>handleDelete(item.id)}>Delete</Button>
              </li>
          )
        })}
      </ul>
      </div>
      <hr className='sec-hr'/>
      <h6 className='comp-heading'>Completed Tasks:</h6>
      <ol className='comp-task'>
        {compTask.map(task =>{
          return <li key={task.id}>{task.value} completed</li>
        })}
      </ol>
    </div>
  );
}

export default App;
