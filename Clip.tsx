import { useState } from "react"


const Clip = () => {
  const [text, setText] = useState<string>("");

  // const display = () => {
  //   console.log(text);
  // }
  return (
    <div className="mt-5">
      <div>
        <input
          type="text"
          value={text}
          placeholder="enter message....."
          className="border"
          data-testid="input-value"
          onChange={(e) => setText(e.target.value)} />
        <button
          onClick={() => console.log(text)}
          className="bg-black text-white">send</button>
      </div>
    </div>

  )

}

export default Clip