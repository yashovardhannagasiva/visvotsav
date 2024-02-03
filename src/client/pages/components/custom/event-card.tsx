import React from "react";
import { scheduleData } from "../../../constants";

const EventCard = () => {
  return (
    <div className="w-full px-3 justify-center flex gap-3">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-3">
        {scheduleData.map((event) => (
          <div
            key={event.id}
            className="border-[5px] border-dotted justify-center flex flex-col rounded-lg p-3"
          >
            <div>
              <h1 className="text-background text-4xl font-bold mb-10 mr-8">
                {event.title}
              </h1>
            </div>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td className="text-primary font-bold">Date:</td>
                    <td className="text-background">{event.date}</td>
                  </tr>
                  <tr>
                    <td className="text-primary font-bold">Time:</td>
                    <td className="text-background">{event.time}</td>
                  </tr>
                  <tr>
                    <td className="text-primary font-bold">Venue:</td>
                    <td className="text-background">{event.venue}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCard;
