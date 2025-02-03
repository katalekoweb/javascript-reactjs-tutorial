import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState("Guest")
  const [quantity, setQuantity] = useState(0)
  const [comment, setComment] = useState("")
  const [payment, setPayment] = useState("Visa")
  const [shipping, setShipping] = useState("")

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value)
  }

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const handlePaymentChange = (e) => {
    setPayment(e.target.value)
  }

  const handleShippingChange = (e) => {
    setShipping(e.target.value)
  }

  return (
    <div>
      <div>
      <input type="text" value={name} 
      onChange={handleNameChange} />

      <p>
        Name: {name}
      </p>
      </div>
      <div>
        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <p>{ quantity }</p>
      </div>

      <div>
        <textarea placeholder='Enter delivery instructions' value={comment} onChange={handleCommentChange} />
        <p>Comment: { comment }</p>
      </div>

      <div>
        <select value={payment} onChange={handlePaymentChange} name="" id="">
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>
        <p>
          Payment: { payment }
        </p>
      </div>

      <div>
        <label>
          <input type="radio" value="Pick Up" checked={shipping === 'Pick Up'} onChange={handleShippingChange} />
          Pick Up
        </label> <br />
        <label>
        <input type="radio" value="Delivery" checked={shipping === 'Delivery'} onChange={handleShippingChange} />
          Delivery
        </label>
        <p>
          { shipping }
        </p>
      </div>
    </div>
  )
}

export default Form
