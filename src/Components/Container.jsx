import React, { useState, useEffect } from 'react'
import Inputblock from './Inputblock'
import Todotask from './Todotask'
import EditForm from './EditForm'
import {createTask, editTask, fetchTaskList, removeTask } from './TasksGateaway'

export default function Container() {
  
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetchTodos()
  },[])

  const fetchTodos = () => {
    fetchTaskList().then(taskList => setTodos(taskList))
  }



  const addTodo = todo => {
    const newTodo = {task: todo, completed: false, isEditing: false};

    createTask(newTodo).then(() => fetchTodos()).catch(()=>{})
  }

  const removeTodo = id => {
    removeTask(id).then(() => fetchTodos())

  }

  const toggleComplete = id => {
    const {task, completed} = todos.find(task => task.id === id)
    const updatedTask = {
      task,
      completed: !completed
    }

    editTask(id, updatedTask).then(() => fetchTodos())
  }

  const editTodo = todoTask => {
    const { id, isEditing} = todos.find(task => task.id === todoTask.id)
    const updatedTask = {
      task: todoTask.task,
      isEditing: !isEditing
    }

    editTask(id, updatedTask).then(() => fetchTodos())
  }

  return (
    <div className="container">
        <p className='title'>To Do List</p>
        <Inputblock addTodo={addTodo}></Inputblock>
        {todos.sort((a, b) => a.completed - b.completed).map((todo) => (
          todo.isEditing 
          ? <EditForm task={todo} key={todo.id} editTodo={editTodo}/> 
          : <Todotask task={todo} key={todo.id} removeTodo={removeTodo} toggleComplete={toggleComplete} editTodo={editTodo}/>
        ))}
    </div>
  )
}
