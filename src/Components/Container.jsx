import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import Inputblock from './Inputblock'
import Todotask from './Todotask'
uuidv4();

export default function Container() {
  
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, {task: todo, index: uuidv4()}]);
  }

  const removeTodo = index => {
    setTodos(todos.filter(todo => {
      return todo.index !== index
    }))
  }

  return (
    <div className="container">
        <p className='title'>To Do List</p>
        <Inputblock addTodo={addTodo}></Inputblock>
        {todos.map((todo, index) => (
          <Todotask task={todo} key={index} removeTodo={removeTodo}/>
        ))}
        
    </div>
  )
}
