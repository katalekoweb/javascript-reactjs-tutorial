import React, { useState } from 'react'

const MyComponent = () => {

    const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana'])

    const handleAddFood = () => {
        const newFood = document.getElementById('foodInput').value
        document.getElementById('foodInput').value = ""

        setFoods(f => ([...f, newFood]))
    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index))
    }

  return (
    <div>
      <h2>List of foods</h2>
      <ol>
        { foods.map((food, index) => <li onDoubleClick={() => handleRemoveFood(index)} key={index}> {food} </li> ) }
      </ol>

      <input type="text" id='foodInput' placeholder='Enter food name' />
      <button onClick={handleAddFood}>Add food</button>
    </div>
  )
}

export default MyComponent
