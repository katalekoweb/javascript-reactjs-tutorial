import React, {useContext} from 'react'
import ComponentC from './ComponentC'
import { UserContext } from './ComponentA'

const ComponentB = () => {

  const user = useContext(UserContext)

  return (
    <div className='box'>
      <h1>Component B</h1>
      <div>
        { `User ${user}` }
      </div>
      <ComponentC />
    </div>
  )
}

export default ComponentB
