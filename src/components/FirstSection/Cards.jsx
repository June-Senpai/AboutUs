import React from "react"

const cardsInfo = [
  {
    heading: "+300",
    description: "We have successfully completed a total of 300+ projects",
    video: <img src="/Cards/beyblade.gif" width={100} height={100} />,
  },
  {
    heading: "100K",
    description: "We have successfully completed a total of 300+ projects",
    video: <img src="/Cards/spring.gif" width={100} height={100} />,
  },
  {
    heading: "+10",
    description: "We have successfully completed a total of 300+ projects",
    video: <img src="/Cards/clock.gif" width={100} height={100} />,
  },
  {
    heading: "+40",
    description: "We have successfully completed a total of 300+ projects",
    video: <img src="/Cards/ball.gif" width={100} height={100} />,
  },
]

const Card = (props) => {
  return (
    <div className=" rounded-2xl bg-cardBg relative overflow-hidden p-5 ">
      <h1 className="text-4xl font-bold">{props.cardInfo.heading}</h1>
      <div className=" flex  items-center">
        <div className="w-40 text-sm text-gray-400 relative z-30 md:text-xl sm:w-full ">
          {props.cardInfo.description}
        </div>
        <div className="absolute -bottom-5 -right-5">
          {props.cardInfo.video}
        </div>
      </div>
    </div>
  )
}

const Cards = () => {
  return (
    <div className="mt-12 md:mx-auto">
      <h2 className="font-semibold text-gray-400">Some Number About Us</h2>
      <div className="grid grid-cols-2 gap-1 mt-4 md:place-content-center lg:w-[500px] lg:gap-5">
        {cardsInfo.map((cardInfo, index) => (
          <Card key={index} cardInfo={cardInfo} />
        ))}
      </div>
    </div>
  )
}

export default Cards
