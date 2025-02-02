import { useState } from "react"

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item:string) => void
}

export default function ListGroup ({items, heading, onSelectItem}: Props) {
  // let selectedIndex = 0;

  // hook
  // useState // state hook
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <>
      <h2 className="bg-dark text-white p-2 rounded text-center">{heading}</h2>
      <ul className='list-group'>
        { items.length === 0 && <p>No item found</p> }
        { items.map((item, index) =>  <li 
        onClick={() => {
            setSelectedIndex(index);
            onSelectItem(item)
        }} 
        key={index} 
        className={selectedIndex === index ? 'list-group-item cursor-pointer active' : 'list-group-item cursor-pointer'}>{item}</li>) }
      </ul>
    </>
  )
}
