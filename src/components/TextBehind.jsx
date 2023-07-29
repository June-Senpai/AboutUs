import React from "react"

const Text = [
  {
    text: " Some ",
  },
  {
    text: " Random ",
  },
  {
    text: " Text ",
  },
]

const TextList = (props) => {
  return (
    <div className="text-9xl text-gray-600 flex flex-row m-2">
      <div className="">{props.Text.text}</div>
    </div>
  )
}

const Texts = () => {
  return (
    <div className="text-9xl text-gray-400 flex flex-row text-moving">
      {Text.map((Text) => (
        <TextList Text={Text} />
      ))}
      {Text.map((Text) => (
        <TextList Text={Text} />
      ))}
    </div>
  )
}

export default Texts
