import { tech } from '@/constant'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

const TechSection = () => {
  return (
    <div className="pt-32 container mb-16">
      <h2 className="text-lg md:text-3xl mb-16 text-black dark:text-white max-w-3xl flex items-center gap-4">
        <Icon icon="solar:smartphone-vibration-bold-duotone" className="text-3xl" />
        Skills
      </h2>
      
      <div className="flex flex-wrap gap-4">
        {
          tech.map((item:any, index:any) => (
            <div key={index} className=" bg-white dark:bg-neutral-950  shadow dark:shadow-sky-500/40 flex items-center justify-center rounded-xl px-4 py-2">
              <div className="flex gap-3 items-center ">
                <Icon icon={item.icon} className="text-3xl mb-2" />
                <p className="font-semibold text-black dark:text-neutral-300">{item.name}</p>
              </div>
            </div>
          ))
        }
      </div>
  </div>
  )
}

export default TechSection