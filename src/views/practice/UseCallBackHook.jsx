import React, { useCallback, useEffect, useState } from 'react';

const UseCallBackHook = () => {
    const [counter, setCounter] = useState(0);
    const [isDivisibleByTwo, setIsDivisibleByTwo] = useState(false);
  
  const dividedFunc=useCallback(
    () => {
        console.log('res')
      setIsDivisibleByTwo(counter%2===0)
    },
    [counter],
  )
  
  
    useEffect(() => {
        console.log('res')
        dividedFunc();
    }, [dividedFunc]);
  return (
    <div>
 <button onClick={()=>setCounter(prevCount=>prevCount+1)}>add one</button>
      <h2>Counter: {counter}</h2>
      <h3>Is divisible by two: {isDivisibleByTwo ? "YES" : "NO"}</h3>
    </div>
  )
}

export default UseCallBackHook