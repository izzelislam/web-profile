import React from 'react'
import { Portofolio } from './portofolio'
import { Icon } from '@iconify/react/dist/iconify.js'

const PortofolioSection = () => {
  return (
    <div className="container mb-8 mt-20">
      <h2 className="text-lg md:text-3xl mb-16 text-black dark:text-white max-w-3xl flex items-center gap-4">
        <Icon icon="solar:square-arrow-right-down-bold-duotone" className="text-3xl" />
        Portofolio
      </h2>
        <Portofolio/>
    </div>
  )
}

export default PortofolioSection