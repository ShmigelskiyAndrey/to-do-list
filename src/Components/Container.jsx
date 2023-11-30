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
    fetchTaskList().then(taskList => setTodos(taskList)).catch(() => alert('something gone wrong, please try again')) 
  }

  const addTodo = todo => {
    const newTodo = {task: todo, completed: false, isEditing: false};
    createTask(newTodo).then(() => fetchTodos()).catch(() => alert('something gone wrong, please try again')) 
  }

  const removeTodo = id => {
    removeTask(id).catch(() => alert('something gone wrong, please try again')) 
    setTodos(todos.filter(task => task.id !== id))
  }

  const toggleComplete = id => {
    const {task, completed} = todos.find(task => task.id === id)
    const updatedTask = {
      task,
      completed: !completed
    }

    editTask(id, updatedTask).catch(() => alert('something gone wrong, please try again')) 
    setTodos(todos.map(task => {
      if (task.id === id) {
        return {
          ...task, completed: !completed
        } 
      } return task
    }))
  }

  const editTodo = todoTask => {
    const { id, isEditing} = todos.find(task => task.id === todoTask.id)
    const updatedTask = {
      task: todoTask.task,
      isEditing: !isEditing
    }

    editTask(id, updatedTask).catch(() => alert('something gone wrong, please try again')) 
    setTodos(todos.map(task => {
      if (task.id === id) {
        return {
          ...task, task: todoTask.task, isEditing: !isEditing
        } 
      } return task
    }))
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
