import { UseCounter } from "./UseCounter"

const Counter = () => {
  const { count, Increment, Decrement } = UseCounter();
  return (
    <div className="mt-10">
      <div className="font-extrabold text-white">
        <p data-testid="counter-value" className="text-center text-black">
          {count}
        </p>
        <div className="flex">
          <button onClick={Increment}
            className="bg-blue-500 p-3 rounded">
            increment
          </button>

          <button onClick={Decrement}
            className="bg-red-500 p-3 rounded">
            Decrement
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter