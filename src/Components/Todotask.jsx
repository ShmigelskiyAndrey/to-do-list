import React from 'react'
import { RiDeleteBin4Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";

export default function Todotask({task}) {
  return (
    <div className='todotask' >
        <p>{task.task}</p>
        <div className="buttons">
          <button onClick={() => console.log("hui")}><FaEdit className='icon'/></button>
          <button><RiDeleteBin4Fill className='icon'/></button>
        </div>
    </div>
  )
}
