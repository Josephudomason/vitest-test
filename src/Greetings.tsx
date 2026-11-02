

const Greetings = ({ name }: { name: string }) => {
  return <h1 className="font-extrabold text-2xl text-center mt-10">Hello {name || "World"}</h1>
}

export default Greetings;