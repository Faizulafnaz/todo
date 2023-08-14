import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const ListTask = ({ task, index, removeTask }) => {
  return (
    <>
    <div className='list-task'>
         {task.title}
        <Button className='btn-delete' variant='light' onClick={() => removeTask(index)} >DELETE</Button>
    </div>
    </>
  )
}

export default ListTask