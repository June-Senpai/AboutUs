import React from "react"

const images = [
  "https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1-1.a20752cf.jpg%3Fq%3D95%26fm%3Dwebp&w=1920&q=75",
  "https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1-2.8514041a.jpg%3Fq%3D95%26fm%3Dwebp&w=1920&q=75",
  "",
  "https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1-3.d005e2e1.jpg%3Fq%3D95%26fm%3Dwebp&w=1920&q=75",
  "https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen1-4.9ed6c77e.jpg%3Fq%3D95%26fm%3Dwebp&w=1920&q=75",
  "https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen2-1.63042a32.jpg%3Fq%3D95%26fm%3Dwebp&w=1920&q=75",
  "https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen2-2.7428647f.jpg%3Fq%3D95%26fm%3Dwebp&w=1920&q=75",
  "",
  "https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen2-3.2ba450f4.jpg%3Fq%3D95%26fm%3Dwebp&w=1920&q=75",
  "https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen2-4.58d52734.jpg%3Fq%3D95%26fm%3Dwebp&w=1920&q=75",
  "https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen3-1.81b62506.jpg%3Fq%3D95%26fm%3Dwebp&w=1920&q=75",
  "https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen3-2.3fa7d9a6.jpg%3Fq%3D95%26fm%3Dwebp&w=1920&q=75",
  "",
  "https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen3-3.9717ddf8.jpg%3Fq%3D95%26fm%3Dwebp&w=1920&q=75",
  "https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscreen3-4.e936e9bf.jpg%3Fq%3D95%26fm%3Dwebp&w=1920&q=75",
  "",
]

const ScrollPhone = () => {
  return (
    <div className="bg-black">
      <div className="relative">
        <div className="sticky top-0">
          <div className="absolute top-0">
            <img src="https://awsmd.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.509eef57.png%3Fq%3D90%26fm%3Dwebp&w=1920&q=75"></img>

            <div className=" ">
              <img
                src="phoneGif.gif"
                width="18.5%"
                className="absolute left-1/2 top-8 -translate-x-1/2 rounded-[40px] "
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-5">
          {images.map((image) => {
            if (image === "") {
              return <div className="w-[30px] h-[30px]"></div>
            }
            return (
              <img
                src={image}
                height={300}
                width={300}
                className="p-2 rounded-3xl mt-6 "
              ></img>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ScrollPhone
