import React, { useEffect, useState } from 'react'

const MyComponent = () => {
  // useEffect

  const [count, setCount] = useState(0)
  const [color, setColor] = useState("green")

  // updates always in rerender
//   useEffect(() => {
//     document.title = `Count: ${count}`
//   })

  // updates once
//   useEffect(() => {
//     document.title = `Count: ${count}`
//   }, [])

  // updates when the component mounts and when the variable changes
  useEffect(() => {
    document.title = `Count: ${count} ${color}`
  }, [count, color])

  function addCount () {
    setCount(c => c + 1)
  }

  function subtractCount () {
    setCount(c => c - 1)
  }

  function changeColor () {
    setColor(c => c === 'green' ? 'red' : 'green')
  }

  return <div>
    <p style={{color: color}}>Count: {count} </p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtractCount}>Subtract</button>

    <br />
    <button onClick={changeColor}>Change Color</button>
  </div>
}

export default MyComponent
