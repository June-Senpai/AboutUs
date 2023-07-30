"use client"
import React from "react"
import { motion, useCycle } from "framer-motion"

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
  const [animation, cycleAnimation] = useCycle({ x: "-100%" }, { x: "0%" })

  return (
    <motion.div
      className="text-9xl text-gray-400 flex flex-row"
      animate={animation}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
        onRepeat: cycleAnimation,
      }}
    >
      {Text.map((Text, index) => (
        <TextList key={"first" + index} Text={Text} />
      ))}
      {Text.map((Text, index) => (
        <TextList key={"second" + index} Text={Text} />
      ))}
    </motion.div>
  )
}

export default Texts
