import React , { useState } from 'react'


export default function Todotask({task, editTodo}) {

    const [taskVaue, setTaskValue] = useState("")

  return (
    <div className="wrapper">
        <div className='todotask' >
            <p>{task.task}</p>
        </div>
        <div className={`inputblock edit`}>
            <input type="text" placeholder='editing...' value={taskVaue} onChange={e => setTaskValue(e.target.value)}></input>
            <button onClick={() => {task.task = taskVaue; editTodo(task.index)}}>edit</button>  
        </div>
    </div>
  )
}