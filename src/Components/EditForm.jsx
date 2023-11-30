import React , { useState, useCallback } from 'react'


export default function EditForm({task, editTodo}) {

    const [taskValue, setTaskValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
    }

    const handleChange = useCallback((e) => {
        setTaskValue(e.target.value)
    }, [])

  return (
    <div className="wrapper">
        <div className='todotask' >
            <p>{task.task}</p>
        </div>
        <div className={`inputblock edit`}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='editing...' value={taskValue} onChange={handleChange}></input>
                {taskValue ? 
                <button type='submit' onClick={(e) => {e.preventDefault(); editTodo({...task, task: taskValue})}}>Edit Task</button> : 
                <button onClick={() => {editTodo(task)}}>Edit Task</button>} 
            </form>
        </div>
    </div>
  )
}