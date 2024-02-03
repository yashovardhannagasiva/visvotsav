import React from 'react'
import { pricing } from '../../constants'
import { Button } from '../../components/ui/button'

const PricingPage = () => {
  return (
    <section id='pricing' className="flex justify-center flex-col bg-violet-100 items-center w-full min-h-screen p-6 gap-2 shadow-lg">
    <h2 className="text-black font-bold text-4xl my-10 cursor-pointer">
      Pricing
    </h2>
    <div className=" grid grid-cols-2 grid-rows-3 max-md:grid-cols-1 max-md:grid-rows-6 cursor-pointer gap-5 max-md:flex-col">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="container flex flex-col justify-between max-w-[640px] bg-white rounded-xl shadow-lg p-6 gap-5"
        >
          <div className="flex max-md:flex-col justify-between items-baseline gap-5">
            <h2 className="text-black font-bold text-4xl mt-10 cursor-pointer max-md:text-3xl max-sm:text-2xl">
              {item.title}
            </h2>
            <p className="text-black text-3xl font-medium max-md:text-3xl max-sm:text-xl">{item.price}</p>
          </div>
          <div className="px-5 max-sm:px-2">
            <ul className="flex flex-col gap-3 max-sm:text-sm list-disc">
              {item.details.map((detail) => (
                <li key={detail.id} className="text-black">{detail.description}</li>
              ))}
            </ul>
          </div>
          <p className="text-gray-500 text-lg max-sm:hidden">{item.description}</p>
          <a href='/register'><Button className='text-white transition-all duration-100 rounded-full'>Register here</Button></a>
        </div>
      ))}
    </div>
  </section>
  )
}

export default PricingPage