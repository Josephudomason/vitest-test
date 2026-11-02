import Counter from "./Counter"
import Greetings from "./Greetings"
import UserProfile from "./UserProfile"
import Clip from "../clip"
import Welcome from "./Welcome"
import { Formater } from "./Formater"


const App = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Greetings name="Joe" />
      <Counter />
      <UserProfile userId={4} />
      <Clip />
      <Welcome name={''} />
      {Formater(1_000)}
    </div>
  )
}

export default App