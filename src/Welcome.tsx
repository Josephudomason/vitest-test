

const Welcome = ({ name }: { name: string }) => {
  return (
    <div className="text-center mt-10">
      Welcome {name || "there"}
    </div>
  )
}

export default Welcome;