import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'
import MyComponent2 from './MyComponent2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MyComponent2 />
    </div>
  )
}

export default App
