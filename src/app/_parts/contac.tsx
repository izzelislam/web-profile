import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactSection = () => {
  return (
    <div className="container flex flex-wrap gap-4">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white  text-black dark:text-white"
      >
        <Link target="_blank" href="https://github.com/izzelislam" className="flex items-center space-x-2">
          <Image src="/assets/img/github.png" alt="github" width={20} height={20} />
          {/* <Icon icon="logos:github-copilot" className="text-xl" /> */}
          <span>izzelislam</span>
        </Link>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white"
      >
        <Link target="_blank" href="https://www.cake.me/bang-fkr" className="flex items-center space-x-2">
          <Icon icon="fluent-color:document-folder-16" className="text-xl" />
          <span>Resume / CV</span>
        </Link>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <Icon icon="logos:google-gmail" className="text-xl" />
        <span>bangfkr002@gmail.com</span>
      </HoverBorderGradient>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <Icon icon="logos:whatsapp-icon" className="text-xl" />
        <span>085158768844</span>
      </HoverBorderGradient>
    </div>
  )
}

export default ContactSection