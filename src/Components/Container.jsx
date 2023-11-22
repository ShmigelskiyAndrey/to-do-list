import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import Inputblock from './Inputblock'
import Todotask from './Todotask'
import EditForm from './EditForm'
uuidv4();

export default function Container() {
  
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([...todos, {task: todo, index: uuidv4(), completed: false, isEditing: false}]);
  }

  const removeTodo = index => {
    setTodos(todos.filter(todo => {
      return todo.index !== index
    }))
  }

  const toggleComplete = index => {
    setTodos(todos.map(todo => todo.index === index ? {...todo, completed: !todo.completed} : todo ))
  }

  const editTodo = index => {
    setTodos(todos.map(todo => todo.index === index ? {...todo, isEditing: !todo.isEditing} : todo ))
  }

  return (
    <div className="container">
        <p className='title'>To Do List</p>
        <Inputblock addTodo={addTodo}></Inputblock>
        {todos.map((todo, index) => (
          todo.isEditing ? <EditForm task={todo} key={index} editTodo={editTodo}/> : 
          <Todotask task={todo} key={index} removeTodo={removeTodo} toggleComplete={toggleComplete} editTodo={editTodo}/>
        ))}
    </div>
  )
}
