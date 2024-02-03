import React from "react";
import {
  footerData,
  studentCoordinators,
  staffCoordinators,
  patron,
  convenor,
  coConveners,
} from "../../../constants/footerData";
const FooterBody = () => {
  return (
    <div className="w-ful grid grid-cols-3 bg-foreground max-md:grid-cols-1 gap-5 justify-between min-h-screen p-4">
      <div className="flex-1">
        <h2 className="text-primary font-bold text-2xl ">
          {footerData.firstTitle}
        </h2>
        <div>
          <h3 className="text-yellow-500 font-bold py-1 my-4">
            {footerData.firstSubTitle}
          </h3>
          <ul className='flex flex-col gap-2'>
            {patron.map((item) => (
              <li key={item.id} className="text-background font-normal">
                {item.name}, {item.designation}, {item.college}
              </li>
            ))}
          </ul>
          <h3 className="text-yellow-500 font-bold mt-5 py-1 my-4">
            {footerData.secondSubTitle}
          </h3>
          <ul className='flex flex-col gap-2'>
            {convenor.map((item) => (
              <li key={item.id} className="text-background font-normal">
                {item.name}, {item.designation}, {item.college}
              </li>
            ))}
          </ul>
          <h3 className="text-yellow-500 font-bold mt-5 py-1 my-4">
            {footerData.thirdSubTitle}
          </h3>
          <ul className='flex flex-col gap-2'>
            {coConveners.map((item) => (
              <li key={item.id} className="text-background font-normal">
                {item.name}, {item.designation}, {item.department}
              </li>
            ))}
          </ul>
          <h3 className="text-yellow-500 font-bold mt-5 py-1 my-4">
            {footerData.fourthSubTitle}
          </h3>
          <ul className='flex flex-col gap-2'>
            {studentCoordinators.map((item) => (
              <li key={item.id} className="text-background font-normal">
                {item.name}- <a href={`tel:${item.mobile}`} className="transition-all hover:text-yellow-500">{item.mobile}</a> -{item.department}
              </li>
            ))}
          </ul>
          <h3 className="text-yellow-500 font-bold mt-5 py-1 my-4">
            {footerData.fourthSubTitle}
          </h3>
          <ul className='flex flex-col gap-2'>
            {staffCoordinators.map((item) => (
              <li key={item.id} className="text-background font-normal">
              {item.name}- <a href={`tel:${item.mobile}`} className="transition-all hover:text-yellow-500">{item.mobile}</a> -{item.department}
              </li>
            ))}
          </ul>
          
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-primary font-bold text-2xl ">
          {footerData.secondTitle}
        </h2>
        <p className="text-background font-normal">{footerData.secondTitleMobileNumber}</p>
        <p className="text-background font-normal">{footerData.secondTitleEmail}</p>
      </div>
      <div className="flex-1">
        <h2 className="text-primary font-bold text-2xl ">
          {footerData.thirdTitle}
        </h2>
        <p className="text-background font-normal">{footerData.ThirdTitleAddress}</p>
      </div>
    </div>
  );
};

export default FooterBody;
