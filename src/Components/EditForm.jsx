import React , { useState } from 'react'


export default function Todotask({task, editTodo}) {

    const [taskValue, setTaskValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
    }

  return (
    <div className="wrapper">
        <div className='todotask' >
            <p>{task.task}</p>
        </div>
        <div className={`inputblock edit`}>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='editing...' value={taskValue} onChange={e => setTaskValue(e.target.value)}></input>
                {taskValue ? 
                <button type='submit' onClick={() => {task.task = taskValue; editTodo(task.id)}}>Edit Task</button> : 
                <button onClick={() => {editTodo(task.id)}}>Edit Task</button>} 
            </form>
        </div>
    </div>
  )
}