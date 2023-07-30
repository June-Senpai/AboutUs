"use client"

import React from "react"
import { motion } from "framer-motion"

const PhoneMoving = () => {
  const Image = ({ index, className, src }) => {
    const alt = `flower${index}`

    const yValue = index === 1 ? -50 : 50

    return (
      <motion.img
        src={src}
        alt={alt}
        className={className}
        animate={{ y: [0, yValue, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    )
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="relative">
        <Image
          index={1}
          className="relative bottom-72 right-32 w-[300px] h-[400px]"
          src="https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphone-01.9afcffea.png%3Fq%3D90%26fm%3Dwebp&w=1920&q=75"
        />
        <Image
          index={2}
          className="absolute bottom-72 left-12 w-[300px] h-[400px] "
          src="https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphone-02.cbcae9b6.png%3Fq%3D90%26fm%3Dwebp&w=1920&q=75"
        />
      </div>
    </div>
  )
}

export default PhoneMoving
