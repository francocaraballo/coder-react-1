import { useState } from 'react'

export  function useCounter(initialValue = 0, onlyPositives) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if(onlyPositives) {
      if( count === 0) return
    }

    setCount(count - 1)
  };

  return { count, increment, decrement}
}
