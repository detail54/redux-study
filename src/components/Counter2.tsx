import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { decrement, increment, incrementByAmount } from '../feature/counter/conterSlice';


const Counter2: React.FC = () => {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increment())}>increment</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  )
};

export default Counter2
