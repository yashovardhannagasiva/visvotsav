import React from 'react'
import EventCard from './custom/event-card'

const Schedule = () => {
  return (
    <section id='schedule' className="flex justify-around flex-col bg-foreground items-center w-full p-6 gap-2 shadow-lg">
    <h2 className="text-background font-bold my-10 text-4xl  cursor-pointer">
       Schedule
     </h2>
     <div className="w-full mb-10">
       <EventCard/>
     </div>
   </section>
  )
}

export default Schedule