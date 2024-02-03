'use client'
import { socialLinks } from '../../../constants'
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
const SocialMediaLinks = () => {
  return (
    <div className="hidden gap-4 pr-10 sm:flex ">
        {
            socialLinks.map((link) => {
                return (
                 <a href={link.url} key={link.id} className=' rounded-full  text-white hover:bg-violet-800 p-2  hover:animate-spin ' target="_blank" >
                    {link.id === "facebook" && <Facebook size={32} className='w-6 h-6'/>}
                    {link.id === "instagram" && <Instagram size={32} className='w-6 h-6' />}
                    {link.id === "twitter" && <Twitter size={32} className='w-6 h-6' />}
                    {link.id === "youtube" && <Youtube size={32} className='w-6 h-6' />}
                 </a>
                )
            })
        }
    </div>
  )
}

export default SocialMediaLinks