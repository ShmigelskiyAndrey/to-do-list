import React from 'react'
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

export default function Todotask({task, removeTodo}) {
  return (
    <div className='todotask' >
        <p>{task.task}</p>
        <div className="buttons">
          <button onClick={() => removeTodo(task.index)}><FaEdit className='icon'/></button>
          <button onClick={() => removeTodo(task.index)}><RiDeleteBin4Fill className='icon'/></button>
        </div>
    </div>
  )
}
