import React from 'react'
import { about } from '../../constants'

const AboutPage = () => {
  return (
    <section id='about' className="flex bg-violet-900 w-full min-h-screen p-6 gap-2 shadow-lg">
    <div className="flex flex-row justify-center items-center mx-auto my-auto gap-10 max-lg:flex-col">
      <div className="flex-1  ">
        <div className="flex max-xl:justify-center  mt-10 flex-col">
          <h2 className="text-white font-bold text-4xl cursor-pointer ">
            {about.title}
          </h2>
          <p className="text-slate-300 text-lg max-w-[540px]">{about.description}</p>
        </div>
        <div className="mt-10">
          <h2 className="text-white font-bold text-4xl  cursor-pointer">
            {about.collegeName}
          </h2>
          <p className="text-slate-300 text-lg max-w-[540px]">{about.CollegeDescription}</p>
        </div>
      </div>
      <div className="flex-1 ">
        <img src={about.image} alt={"sky"} className="rounded-xl drop-shadow-lg" />
      </div>
    </div>
  </section>
  )
}

export default AboutPage