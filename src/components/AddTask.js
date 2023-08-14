import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const AddTask = ({addTask}) => {
  const [value, setValue] = useState('')

  const addItem = () => {
    addTask(value)
    setValue('')
  }
  return (
    <>
        <div>
            <input type='text'
             placeholder='Add a new task'
            className='input'
            value={value}
            onChange={(e) => setValue(e.target.value)} 
            ></input>
            <Button variant="light" onClick={addItem}>Add task</Button>
        </div>
    </>
  )
}

export default AddTask