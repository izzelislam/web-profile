'use client'

import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useEffect } from 'react'

const NavbarSection = () => {

  const [thme, setTheme] = React.useState<any>(window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') : 'dark');

  useEffect(() =>{
    init()
  },[thme])

  const init =  () => {
    if (typeof window !== 'undefined'){
      window.localStorage.setItem('theme', thme)
      const itemStorage:any = window.localStorage.getItem('theme')
      const element = document.querySelector('html')
      if (element) {
        element?.setAttribute('data-theme', itemStorage)
        element?.setAttribute('class', itemStorage)
      }
    }
  }


  const handleSwitchTheme = (val:any) => {
    setTheme(val)
  }

  return (
    <div className="container mb-10 md:mb-20 ">
      <div className="h-10 w-full rounded-lg flex justify-end items-center">
        {
          thme == 'light'
          ? <Icon onClick={() => handleSwitchTheme('dark')} icon="heroicons:moon-20-solid" className="text-gray-500 text-3xl dark:text-white cursor-pointer"/>
          : <Icon onClick={() => handleSwitchTheme('light')} icon="heroicons:sun-16-solid" className="text-gray-500 text-4xl dark:text-white cursor-pointer"/>
        }
      </div>
    </div>
  )
}

export default NavbarSection