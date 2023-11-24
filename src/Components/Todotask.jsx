import React from 'react'
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

export default function Todotask({task, removeTodo, toggleComplete, editTodo}) {
  return (
    <div className='todotask' >
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
        <div className="buttons">
          <button onClick={() => editTodo(task.id)}><FaEdit className='icon'/></button>
          <button onClick={() => removeTodo(task.id)}><RiDeleteBin4Fill className='icon'/></button>
        </div>
    </div>
  )
}
