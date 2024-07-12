import React, {useState} from 'react'

const Count = ({count, handleCount, stock}) => {
    
  const incrementCount=()=>{
    if(count< stock)
      handleCount(count =>count +1)
  }
  const decrementCount=()=>{
    if(count>1)
      handleCount(count => count-1)
  }
  return (
    <div>
        <button onClick={incrementCount}>+</button>
        <span>{count}</span>
        <button onClick={decrementCount}>-</button>
    </div>
  )
}

export default Count