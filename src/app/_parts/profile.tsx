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
          <p className="text-gray-700 dark:text-gray-300/85 text-justify "><span className="text-black dark:text-white font-bold text-2xl">Hi <span className="animate-spotlight">👋</span> </span>, perkenalkan, saya Muttafakur, seorang Fullstack Developer yang menekuni pengembangan web dan mobile aplikasi. Ketertarikan saya pada dunia pemrograman sudah tumbuh sejak bangku SMA, dan mulai serius saya geluti pada 2019 melalui pendidikan non-formal dengan mendalami dasar seperti HTML, CSS, JavaScript, PHP, dan MySQL. Sejak pertengahan 2020, saya memulai karier sebagai Fullstack Developer dan kini berfokus membangun sistem yang rapi, aman, dan mudah dikembangkan menggunakan teknologi modern seperti React, Next.js, Laravel, dan Node.js. Berbagai proyek telah saya kerjakan untuk mendukung efektivitas dan efisiensi pekerjaan dalam bentuk web app maupun mobile app, baik secara tim maupun mandiri.</p>
        </div>
    </div>
  )
}

export default ProfileSection