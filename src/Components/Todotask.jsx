import React from 'react'
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

export default function Todotask({task, removeTodo, toggleComplete, editTodo}) {
  return (
    <div className='todotask' >
        <p onClick={() => toggleComplete(task.index)} className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
        <div className="buttons">
          <button onClick={() => editTodo(task.index)}><FaEdit className='icon'/></button>
          <button onClick={() => removeTodo(task.index)}><RiDeleteBin4Fill className='icon'/></button>
        </div>
    </div>
  )
}
