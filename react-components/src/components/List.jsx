import React from 'react'
import PropTypes from 'prop-types'

const List = props => {
  const items = props.items
  const category = props.category

  // fruits.sort((a, b) => a.name.localeCompare(b.name)) // Alphabetical
  // fruits.sort((a, b) => b.name.localeCompare(a.name)) // Reverse Alphabetical
  items.sort((a, b) => a.calories - b.calories) // Numeric
  //fruits.sort((a, b) => b.calories - a.calories) // Reverse Numeric

  const listItems = items.map(item => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>{' '}
    </li>
  ))

//   const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
//   const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)

  return (
    <div>
      <h2 className='list-category'>{ category }</h2>
      <ol className='list-items'>{listItems}</ol>
    </div>
  )
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    })),
    category: PropTypes.string
}

List.defaultProps = {
    items: [],
    category: "Category"
}

export default List
