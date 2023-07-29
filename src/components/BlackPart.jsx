import React from "react"
import Texts from "./TextBehind"
import PhoneMoving from "./PhoneMoving"

const BlackPart = () => {
  return (
    <div className="bg-black h-[800px] text-white">
      <div className="flex justify-between items-center">
        <div className="text-4xl md:text-7xl text-white p-10">
          &#123;SMART&#125; <br /> <div className="p-4">DEVELOPMENT</div>
        </div>
        <div className="text-6xl md:text-9xl text-gray-400 p-10">**</div>
      </div>

      <Texts />
      <PhoneMoving />
      <div className="flex flex-col md:flex-row justify-between items-center -mt-[450px]">
        <p className="text-xl m-3 text-center md:text-left">
          Making your business outstanding is a science.
          <br />
          We take it (a) seriously and (b) creatively.
        </p>
        <div className="mr-9 flex flex-col md:flex-row">
          <button className="bg-white text-black p-1 rounded-xl m-1 px-3 cursor-pointer z-10">
            Check Our Portfolio
          </button>
          <button className="bg-[#505050] text-white p-1 rounded-xl m-1 cursor-pointer z-10">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  )
}

export default BlackPart
