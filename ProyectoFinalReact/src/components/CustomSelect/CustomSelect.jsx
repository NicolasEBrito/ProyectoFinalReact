import React from 'react'
import { useState } from 'react'

const CustomSelect = ({handleCategorySelected, categories}) => {
    const [isOpen,setIsOpen]=useState(false)
    const [selectedOption, setSelectedOption]= useState('Todos')

    const handleOptionClick = (category) => {
        setSelectedOption(category.name)
        setIsOpen(false)
        handleCategorySelected(category.id)
      }

  return (
    <div className="selectWrapper" onClick={() => setIsOpen(!isOpen)}>
    <div className="selectedOption">
      {selectedOption}
      <span className="icon">&#9660;</span>
    </div>
    {isOpen && (
      <ul className="optionsList">
        {categories.map((category) => (
          <li
            key={category.id}
            className="option"
            onClick={() => handleOptionClick(category)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default CustomSelect