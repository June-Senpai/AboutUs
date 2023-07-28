import React from "react"

const Button = () => {
  return (
    <>
      <div className="group">
        <button className="flex items-center px-7 py-3 bg-gray-200 rounded-full overflow-hidden font-medium text-base leading-6 font-sans text-gray-800 tracking-tighter group relative">
          <span className="flex flex-col h-6 overflow-hidden relative z-30 text-lg">
            <span className="text-white transform -translate-y-full group-hover:transform group-hover:-translate-y-1 duration-300 ease-in-out">
              Become a Client
            </span>
            <span className="text-black transform -translate-y-8 group-hover:transform group-hover:translate-y-full duration-300 ease-in-out">
              Become a Client
            </span>
          </span>
          <span className="z-30">
            <span className="ml-2 group-hover:text-white">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
          </span>
          <span className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black rounded-full w-0 h-0 group-hover:w-full group-hover:h-full transition-all duration-300 ease-in-out"></span>
        </button>
      </div>
    </>
  )
}

export default Button
