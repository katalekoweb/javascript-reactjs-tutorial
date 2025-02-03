import React from 'react'
import { useState } from 'react'

const TodoList = () => {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    function handleInputChange (event) {

    }

    function addTask () {

    }

    function deleteTask (index) {

    }

    function moveTaskUp (index) {

    }

    function moveTaskDown (index) {
        
    }

  return (
    <div className='todo-list'>
      <h1>Todo List</h1>
      <div>
        <input type="text"  />
      </div>
    </div>
  )
}

export default TodoList
