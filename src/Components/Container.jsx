import React, { useState } from 'react'
import Inputblock from './Inputblock'
import Todotask from './Todotask'
import EditForm from './EditForm'
const baseUrl = 'https://crudcrud.com/api/ccb24084f7454c38b1a2cba542f7cbd0/tasks'

export default function Container() {
  
  const [todos, setTodos] = useState([])

  const fetchTodos = () => {
    fetch(baseUrl).then(res => {
      if(res.ok) {
        return (res.json())
      }
    }).then(taskList => {
        const tasks = taskList.map(({ _id, ...task }) => ({ id: _id, ...task}));
      setTodos(tasks)
      console.log(tasks)
    })
  }

  const addTodo = todo => {
    const newTodo = {task: todo, completed: false, isEditing: false};

    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;utc-8'
      },
      body: JSON.stringify(newTodo)
    }).then(response => {
      if(response.ok) {
        fetchTodos()
      } else {
        throw new Error("Failed to create task")
      }
    })
  }

  const removeTodo = id => {
    fetch(`${baseUrl}/${id}`, {
      method: 'DELETE'
    }).then(response => {
      if(response.ok) {
        fetchTodos()
      } else {
        throw new Error("Failed to delete task")
      }
    })
  }

  const toggleComplete = id => {
    const {task, completed} = todos.find(task => task.id === id)
    const updatedTask = {
      task,
      completed: !completed
    }

    fetch(`${baseUrl}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json;utc-8'
      },
      body: JSON.stringify(updatedTask)
    }).then(response => {
      if(response.ok) {
        fetchTodos()
      } else {
        throw new Error("Failed to create task")
      }
    })
  }

  const editTodo = id => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo ))
  }

  return (
    <div className="container">
        <p className='title'>To Do List</p>
        <Inputblock addTodo={addTodo}></Inputblock>
        {todos.map((todo) => (
          todo.isEditing ? <EditForm task={todo} key={todo.id} editTodo={editTodo}/> : 
          <Todotask task={todo} key={todo.id} removeTodo={removeTodo} toggleComplete={toggleComplete} editTodo={editTodo}/>
        ))}
    </div>
  )
}
