import React from 'react'
import { useState } from 'react'

const TodoList = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  function handleInputChange (event) {
    setNewTask(event.target.value)
  }

  function addTask () {
    if (newTask.trim() !== '') {
      setTasks(t => [...t, newTask])
      setNewTask('')
    }
  }

  function deleteTask (index) {
    if (confirm('Are you sure?')) {
      const updatedTasks = tasks.filter((task, i) => i !== index)
      setTasks(updatedTasks)
    }
  }

  function moveTaskUp (index) {
    if (index > 0) {
      const updatedTasks = [...tasks]

      console.log(updatedTasks);
      
      [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  function moveTaskDown (index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks]

      console.log(updatedTasks);

      [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]]
      setTasks(updatedTasks)
    }
  }

  return (
    <div className='todo-list'>
      <h1>Todo List</h1>

      <div style={{display: 'flex'}}>
        <input
          type='text'
          placeholder='Enter a task...'
          value={newTask}
          onChange={handleInputChange}
        />

        <button className='add-button' onClick={addTask}>
          Add
        </button>
      </div>

      <div>

        <div>
          { tasks.length == 0 && 'No tasks yet. Start writing.' }
        </div>
        <ol>

          {tasks.map((task, index) => (
            <li key={index}>
              <span className='text'>{task}</span>
              <button
                className='delete-button'
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
              <button className='move-button' onClick={() => moveTaskUp(index)}>
                Up
              </button>
              <button
                className='move-button'
                onClick={() => moveTaskDown(index)}
              >
                Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default TodoList
