import React from "react"

const Company = [
  {
    image: <img src="https://awsmd.com/_next/static/media/uber.391ab754.svg" />,
  },
  {
    image: (
      <img src="https://awsmd.com/_next/static/media/oracle.f6c579b2.svg" />
    ),
  },
  {
    image: (
      <img src="https://awsmd.com/_next/static/media/gofundme.d15a4c9e.svg" />
    ),
  },
  {
    image: (
      <img src="https://awsmd.com/_next/static/media/nutanix.76cbb1b9.svg" />
    ),
  },
  {
    image: (
      <img src="https://awsmd.com/_next/static/media/upside.3fc33722.svg" />
    ),
  },
  {
    image: (
      <img src="https://awsmd.com/_next/static/media/intel.0d9f9c40.svg" />
    ),
  },
  {
    image: (
      <img src="https://awsmd.com/_next/static/media/new-balance.9bcd089f.svg" />
    ),
  },
  {
    image: (
      <img src="https://awsmd.com/_next/static/media/statefarm.91373514.svg" />
    ),
  },
  {
    image: (
      <img src="https://awsmd.com/_next/static/media/crosslead.2cd4c2e3.png" />
    ),
  },
  {
    image: (
      <img src="https://awsmd.com/_next/static/media/voldis.72b3b81d.svg" />
    ),
  },
]

const CompanyList = (props) => {
  return (
    <div className="border-2 border-gray-200 h-32 w32 p-8 inline-block shrink-0">
      {props.Company.image}
    </div>
  )
}

const Companies = () => {
  return (
    <div className="border-t-2 border-gray-200 company flex ">
      {Company.map((Company) => (
        <CompanyList Company={Company} />
      ))}
      {Company.map((Company) => (
        <CompanyList Company={Company} />
      ))}
    </div>
  )
}

export default Companies
