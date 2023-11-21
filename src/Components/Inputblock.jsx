import React, { useState } from 'react'

export default function Inputblock({addTodo}) {

  const [taskVaue, setTaskValue] = useState("")

  return (
    <div className='inputblock'>
        <input type="text" placeholder='What is the task for today?' value={taskVaue} onChange={e => setTaskValue(e.target.value)}></input>
        <button onClick={() => {addTodo(taskVaue); setTaskValue("")}}>Add Task</button>
    </div>
  )
}
