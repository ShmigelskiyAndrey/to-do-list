import React from 'react'
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

export default function Todotask({task, removeTodo, toggleComplete, editTodo}) {
  return (
    <div className='todotask' >
        <div className='leftSide'>
        <div className={`completeCircle ${task.completed ? 'done' : ""}`} onClick={() => toggleComplete(task.id)}></div>
        <p onClick={() => toggleComplete(task.id)} className={`text ${task.completed ? "completed" : ""}`}>{task.task}</p>
        </div>
        <div className="buttons">
          <button onClick={() => editTodo(task)}><FaEdit className='icon'/></button>
          <button onClick={() => removeTodo(task.id)}><RiDeleteBin4Fill className='icon'/></button>
        </div>
    </div>
  )
}
