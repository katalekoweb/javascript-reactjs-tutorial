import React, { useState } from 'react'

const MyComponentArrayObject = () => {
  const [cars, setCars] = useState([])
  const [carYear, setCarYear] = useState(new Date().getFullYear())
  const [carMake, setCarMake] = useState('')
  const [carModel, setCarModel] = useState('')

  function handleAddCar () {
    const newCar = {
        year: carYear,
        make: carMake,
        model: carModel
    }

    setCars(c => ([...c, newCar]))

    setCarYear(new Date().getFullYear())
    setCarModel("")
    setCarMake("")
  }

  function handleRemoveCar (index) {
    if (confirm("Are sure?")) {
        setCars(c => c.filter((_, i) => i !== index))
    }
  }

  function handleYearChange (event) {
    setCarYear(event.target.value)
  }

  function handleMakeChange (event) {
    setCarMake(event.target.value)
  }

  function handleModelChange (event) {
    setCarModel(event.target.value)
  }

  return <div>
    <h1>List of Cars</h1>
    <ul>
        { cars.map((car, index) => <li onDoubleClick={() => handleRemoveCar(index)} key={index}>{car.year} {car.make} {car.model} </li>) }
    </ul>

    <input type="number" value={carYear} onChange={handleYearChange} placeholder='Enter car year' />
    <input type="text" value={carMake} onChange={handleMakeChange} placeholder='Enter car make' />
    <input type="text" value={carModel} onChange={handleModelChange} placeholder='Enter car model' />
    <button onClick={handleAddCar}>Add car</button>
  </div>
}

export default MyComponentArrayObject
