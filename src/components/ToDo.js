import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import AddTask from './AddTask'
import ListTask from './ListTask'
import './ToDo.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDo = () => {

  const [tasks, setTasks] = useState([
    
  ])

  const addTask = (title) => {
    const newTask = [...tasks, { title }]
    setTasks(newTask)
  }

  const removeTask = (index) => {
    const newTask = [...tasks]
    newTask.splice(index, 1)
    setTasks(newTask)
  }

  return (
    <>
        <div className='main-container'>
            <div><h1>TODO APP</h1></div>
            <div className='add-task'>
                <AddTask addTask={addTask}></AddTask>
            </div>
          
            <div className='list-task'>
              {tasks.map((task, index) => <ListTask task={task} removeTask={removeTask} index={index} key={index}></ListTask> )}
                
            </div>
            <br></br>
        </div>
    </>
  )
}

export default ToDo