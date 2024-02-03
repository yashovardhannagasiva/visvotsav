import React from 'react'
import SocialMediaLinks from './SocialMediaLinks'

const FooterHead = () => {
  return (
    <div className="w-full h-28  bg-primary flex justify-between items-center px-3">
      <div>
      <h2 className="text-white font-bold text-4xl  cursor-pointer">Uni Engine</h2>
      </div>
      <div>
        <SocialMediaLinks />
      </div>
    </div>
  )
}

export default FooterHead