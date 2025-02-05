import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const MyComponent2 = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        console.log("EVENT LISTENER ADDED");  

        return () => {
            window.removeEventListener('reset', handleResize)
            console.log("EVENT LISTENER REMOVED");  
        }
    }, [])      

    function handleResize () {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }
  return (
    <div>
      <p> Window width: {width}px </p>
      <p> Window height: {height}px </p>
    </div>
  )
}

export default MyComponent2
