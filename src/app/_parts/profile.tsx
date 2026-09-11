import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import React from 'react'

const ProfileSection = () => {
  return (
      <div className="container flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex justify-center">
          <div className="w-[120px] h-[120px] bg-cover bg-top rounded-full"
          >
            {/* Foto profil asli */}
            <Image src="/assets/img/foto_fkr.png" alt="foto_fkr" className='rounded-full object-cover object-top bg-clip-border w-[120px] h-[120px]' width={100} height={100} />
            {/* Avatar (disembunyikan) */}
            {/* <div className="w-[120px] h-[120px] rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <Icon icon="solar:user-circle-bold-duotone" className="text-7xl text-gray-400 dark:text-gray-300" />
            </div> */}
            <div className='text-center mt-3'>
              <p className='text-sm font-semibold'>Fulstack Dev</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-700 dark:text-gray-300/85 text-justify ">
            <span className="text-black dark:text-white font-bold text-2xl">Hi <span className="animate-spotlight">👋</span>, </span>saya Muttafakur, Fullstack Developer dengan pengalaman sejak 2020. Saya menangani pengembangan web dan aplikasi mobile secara menyeluruh — mulai dari perancangan sistem, coding, hingga deployment. Saya terbiasa bekerja dengan teknologi seperti React, Next.js, Laravel, Node.js, dan Golang, serta nyaman bekerja baik dalam tim maupun secara mandiri.
          </p>
          <p className="text-gray-700 dark:text-gray-300/85 text-justify mt-4">
            Selama ini saya telah menangani berbagai proyek yang mendukung operasional dan pertumbuhan bisnis, mulai dari perusahaan swasta hingga BUMN.
          </p>
        </div>
    </div>
  )
}

export default ProfileSection