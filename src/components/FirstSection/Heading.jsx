import React from "react"
import Button from "@/components/FirstSection/button"

const Heading = () => {
  return (
    <div>
      <h3 className="text-[#999] font-medium md:text-xl  text-base leading-relaxed font-sans">
        02 — About Us
      </h3>
      <div className="flex justify-between items-center mt-3">
        <h2 className="text-xs sm:text-2xl md:text-4xl lg:text-5xl font-medium">
          We Strive to Innovate
        </h2>
        <Button />
      </div>
      <div className="relative">
        <div className="top-4 absolute inset-x-0 bottom-0 h-4 border border-gray-400 border-b-0"></div>
      </div>
    </div>
  )
}

export default Heading
