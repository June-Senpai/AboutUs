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
  console.log(props)
  return (
    <div className=" rounded-2xl bg-cardBg relative overflow-hidden h-36 p-5">
      <h1 className="text-4xl font-bold">{props.cardInfo.heading}</h1>
      <div className=" flex  items-center">
        <div className="w-40 text-sm text-gray-400">
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
      <div className="grid grid-cols-2 gap-4 mt-4 w-178 md:place-content-center lg:w-[500px]">
        {cardsInfo.map((cardInfo) => (
          <Card cardInfo={cardInfo} />
        ))}
      </div>
    </div>
  )
}

export default Cards
