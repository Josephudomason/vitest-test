import { useState } from 'react'

export function UseCounter(initialValue = 0) {
  const [count, setCounter] = useState<number>(initialValue)

  function Increment() {
    setCounter((c) => c + 1)
  }

  function Decrement() {
    setCounter((c) => c - 1)
  }
  return ({ count, Increment, Decrement });
}
