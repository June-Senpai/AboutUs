"use client"

import { useState } from "react"
import Cards from "./Cards"

const ContentPart = () => {
  const [text, setText] = useState(INITIAL_TEXT)

  return (
    <>
      <div className="flex justify-between mt-7">
        <div className="md:w-full">
          <h1 className="text-xl text-gray-400 lg:text-2xl mt-4 md:text-2xl md:w-full sm:w-full">
            {text}
          </h1>
          <Cards />
        </div>
        <CircleComponent setText={setText} />
      </div>
    </>
  )
}

const CircleComponent = ({ setText }) => {
  return (
    <div className="justify-end items-end w-1/2 scale-75 ml-20 mb-10 hidden lg:flex xl:scale-105 lg:mt-6">
      <div
        className="w-178 h-178 min-w-178 bg-gray-100 rounded-full mr-2 relative "
        onMouseLeave={() => setText(INITIAL_TEXT)}
      >
        <div className=" flex items-center justify-center top-[238px] left-[315px] absolute z-30 h-5 w-5 bg-blue-400 rounded-full "></div>
        <div className=" flex items-center justify-center top-[230px] left-[308px] absolute opacity-40 z-10 h-9 w-9 bg-gray-400 rounded-full animate-pulse"></div>
        <div className=" flex items-center justify-center top-[300px] left-[250px] absolute z-30 h-5 w-5 bg-blue-400 rounded-full "></div>
        <div className=" flex items-center justify-center top-[292px] left-[242px] absolute opacity-5 z-10 h-9 w-9 bg-gray-50 rounded-full animate-pulse"></div>
        <div className=" flex items-center justify-center top-[378px] left-[170px] absolute z-30 h-5 w-5 bg-blue-400 rounded-full "></div>
        <div className=" flex items-center justify-center top-[370px] left-[162px] absolute opacity-5 z-10 h-9 w-9 bg-gray-500 rounded-full animate-pulse"></div>
        <div
          className="w-156 h-156 bg-gray-200 rounded-full mr-2 absolute right-[2.8125%] top-[2.8125%] "
          onMouseEnter={() => setText(SECOND_TEXT)}
          onMouseLeave={() => setText(INITIAL_TEXT)}
        >
          <div
            className="w-128 h-128 bg-gray-300 rounded-full mr-2 absolute right-[2.8125%] top-[2.8125%]"
            onMouseEnter={() => setText(THIRD_TEXT)}
            onMouseLeave={() => setText(SECOND_TEXT)}
          >
            <div
              className="w-100 h-100 bg-gray-50 rounded-full right-[2.8125%] absolute top-[2.8125%]"
              onMouseEnter={() => setText(INITIAL_TEXT)}
              onMouseLeave={() => setText(THIRD_TEXT)}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

const INITIAL_TEXT = (
  <>
    <span className="font-medium text-black">Solid Strategy</span> aligned with
    business needs and robust data analysis are fundamental ingredients to
    extract actionable
  </>
)
const SECOND_TEXT = (
  <>
    <span className="font-medium text-black">Ideas have to be manifested</span>,
    tested and proven to work. Continued experiments are one of our key driver
  </>
)
const THIRD_TEXT = (
  <>
    <span className="font-medium text-black">
      Using agile data analysis supported by data science
    </span>
    , our process has proven to deliver constant business growth
  </>
)

export default ContentPart
