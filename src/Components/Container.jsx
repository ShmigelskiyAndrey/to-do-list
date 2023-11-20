import React from 'react'
import Inputblock from './Inputblock'
import Todolist from './Todolist'

export default function Container() {
  return (
    <div className="container">
        <p className='title'>To Do List</p>
        <Inputblock></Inputblock>
        <Todolist></Todolist>
    </div>
  )
}
