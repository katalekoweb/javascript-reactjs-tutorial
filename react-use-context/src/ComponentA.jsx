import React, { useState, createContext } from 'react'
import ComponentB from './ComponentB'

export const UserContext = createContext()

const ComponentA = () => {

    const [user, setUser] = useState('Kataleko')

  return (
    <div className='box'>
      <h1>Component A</h1>
      <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        <h2> { `Hello ${user}` } </h2>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  )
}

export default ComponentA
