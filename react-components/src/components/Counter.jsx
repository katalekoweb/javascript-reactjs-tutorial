import React, { useState } from 'react'

const Counter = () => {
//   const [name, setName] = useState("Guest")
//   const [age, setAge] = useState(0)
//   const [isEmployeed, setIsEmployeed] = useState(false)

//   const updateName = () => {
//     setName("Kataleko");
//   }

//   const incrementAge = () => {
//     setAge(age + 1)
//   }

//   const toggleIsEmployeedStatus = () => {
//     setIsEmployeed(!isEmployeed)
//   }

const [count, setCount] = useState(0)

const increment = () => {
    // updater function
    setCount(c => c + 1)
    setCount(c => c + 1)
    setCount(c => c + 1)
}

const decrement = () => {
    setCount(count - 1)
}

const reset = () => {
    setCount(0)
}

  return <div className='counter-container'>
    <p className='count-display'>{count}</p>

    <div>
        <button className='counter-button' onClick={decrement}>Decrement</button>
        <button className='counter-button' onClick={reset}>Reset</button>
        <button className='counter-button' onClick={increment}>Increment</button>
    </div>
  </div>
}

export default Counter
