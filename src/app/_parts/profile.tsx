import React from 'react'

const ProfileSection = () => {
  return (
      <div className="container flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex justify-center">
          <div className="w-[120px] h-[120px] bg-cover bg-top rounded-full"
            style={{
              backgroundImage: `url("/assets/img/foto_fkr.png")`,
            }}
          >
          </div>
        </div>
        <div>
          <p className="text-gray-700 dark:text-gray-300/85 text-justify "><span className="text-black dark:text-white font-bold text-2xl">Hi <span className="animate-spotlight">👋</span> </span>, perkenalkan nama saya Mutatfakur, Berawal dari ketertarikan saya pada dunia programmig sejak duduk dibangku sma, kemudian pada tahun 2019 saya memulai mendalami belajar pemrograman dengan mengikuti pendidikan non formal beberapa hal yang saya pelajari seperti html, css , javascript, php, mysql dll, kemudian pada pertengahan 2020 saya sudah memulai karir sebagai fullstack developer hingga saat ini, beberapa project telah saya kerjakan dalam membantu kinerja serta efektifitas  pekerjaan dalam bentuk web app ataupun mobile app, dalam melakukan pekerjaan saya terbiasa melakukan secara tim dan juga secara individu.</p>
        </div>
    </div>
  )
}

export default ProfileSection