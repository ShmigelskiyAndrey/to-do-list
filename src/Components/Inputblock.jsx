import React, { useState } from 'react'



export default function Inputblock() {

  const [value, setValue] = useState(0)

  let inputVal

  const addTask = (hui) => {
    console.log(hui)
    setValue("")
    inputVal = ""
    console.log(inputVal)
  }

  return (
    <div className='inputblock'>
        <input type="text" placeholder='What is the task for today?' value={inputVal} onChange={(e) => setValue({value: e.target.value})}></input>
        <button onClick={() => addTask(value.value)}>Add Task</button>
    </div>
  )
}
