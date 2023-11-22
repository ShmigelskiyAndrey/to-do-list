import React, { useState } from 'react'

export default function Inputblock({addTodo}) {

  const [taskVaue, setTaskValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <div className='inputblock'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='What is the task for today?' value={taskVaue} onChange={e => setTaskValue(e.target.value)}></input>
        {taskVaue ? 
        <button type='submit' onClick={() => {addTodo(taskVaue); setTaskValue("")}}>Add Task</button> :
        <button>Add Task</button>}
      </form>
    </div>
  )
}
