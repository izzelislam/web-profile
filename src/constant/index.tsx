import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "lucide-react";
import Image from "next/image";

const experience:any = [
 
  {
    title: "2020 - 2024",
    content : (
      <div>
        <p className="text-bold text-gray-500 dark:text-gray-400 text-2xl">Flustack Developer </p>
        <p className="text-gray-500 dark:text-gray-400 my-3">2021 - Agustis 2024</p>
        <p className="text-gray-500 dark:text-gray-400 mb-2">MahirTechnology Indonesia</p>
        <p className="text-gray-500 dark:text-gray-100">Develop test and maintenance a web, web App and Mobile App</p>
      </div>
    )
  },
  {
    title: "2024",
    content : (
      <div>
        <p className="text-bold text-gray-500 dark:text-gray-400 text-2xl">Flustack Developer </p>
        <p className="text-gray-500 dark:text-gray-400 my-3">Agustis 2024 Now</p>
        <p className="text-gray-500 dark:text-gray-400 mb-2">freelance</p>
        <p className="text-gray-500 dark:text-gray-100">Develop test and maintenance a web, web App and Mobile App</p>
      </div>
    )
  }

]

const educations:any = [
  {
    title : "2018 - 2020",
    content: (
      <div>
        <p className="font-bold text-xl text-gray-700 dark:text-gray-200">Pondok informatika Al-Madinah</p>
        <p className="text-gray-700 dark:text-gray-400 mt-3">pendidikan non formal</p>
      </div>
    )
  },
  {
    title : "2014 - 2017",
    content: (
      <div>
        <p className="font-bold text-xl text-gray-700 dark:text-gray-200">MA Nurul Hadid</p>
        <p className="text-gray-700 dark:text-gray-400 mt-3">Pendidikan tingkat menengah</p>
      </div>
    )
  },
]

const tech = [
  {
    "name" : "HTML",
    icon :  "logos:html-5"
  },
  {
    "name" : "CSS",
    icon :  "logos:css-3"
  },
  {
    "name" : "Java Script",
    icon :  "logos:javascript"
  },
  {
    "name" : "Talwind",
    icon :  "logos:tailwindcss-icon"
  },
  {
    "name" : "Bootstrap",
    icon :  "logos:bootstrap"
  },
  {
    "name" : "PHP",
    icon :  "logos:php"
  },
  {
    "name" : "Node JS",
    icon :  "logos:nodejs-icon"
  },
  {
    "name" : "Laravel",
    icon :  "logos:laravel"
  },
  {
    "name" : "Express Js",
    icon :  "logos:nodejs-icon-alt"
  },
  {
    "name" : "Vue",
    icon :  "logos:vue"
  },
  {
    "name" : "Nux Js",
    icon :  "logos:nuxt-icon"
  },
  {
    "name" : "React Js",
    icon :  "logos:react"
  },
  {
    "name" : "Next Js",
    icon :  "logos:nextjs-icon"
  },
  {
    "name" : "Flutter",
    icon :  "logos:flutter"
  },
  {
    "name" : "React Native",
    icon :  "logos:react"
  },
  {
    "name" : "Mysql",
    icon :  "logos:mysql"
  },
  {
    "name" : "Postgresql",
    icon :  "logos:postgresql"
  },
  {
    "name" : "Docker",
    icon :  "logos:docker-icon"
  },
  {
    "name" : "Linux Server",
    icon :  "logos:linux-tux"
  },
  {
    "name" : "Git",
    icon :  "logos:git-icon"
  },
  {
    "name" : "Firebase",
    icon :  "logos:firebase"
  },
]

const portos = [
  {
    description: "Sadeg Delivery Order ",
    title: "Sadeg Customer (Mobile App)",
    src: "/assets/porto/sadeg-delivery/1.png",
    ctaText: "Show",
    ctaLink: "",
    content: () => {
      return (
        <div>
          <div className="flex gap-3 mb-2">
            <Image src="/assets/porto/sadeg-delivery/1.png" alt="demo" width={500} height={500} className="w-[50px]" />
            <Image src="/assets/porto/sadeg-delivery/2.png" alt="demo" width={500} height={500} className="w-[50px]" />
            <Image src="/assets/porto/sadeg-delivery/3.png" alt="demo" width={500} height={500} className="w-[50px]" />
          </div>

          <p className="text-sm">
            Aplikas untuk SADEG,  yang digunakan untuk melakukan pemesanan makanan,
          </p>
          

          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>convert ui dari figma ke code</li>
              <li>implementasi api,yg sudah disediakan</li>
            </ul>
          </div>


          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:react" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">React Native</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:firebase" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Firebase</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "Fundriser mobile ",
    title: "Fundriser App (Mobile App)",
    src: "/assets/porto/demo/2.jpg",
    ctaText: "Show",
    ctaLink: "",
    content: () => {
      return (
        <div>
          <div className="flex gap-3 mb-2">
            <a href="/assets/porto/demo/1.jpg" target="_blank">
              <Image src="/assets/porto/demo/1.jpg" alt="demo" width={500} height={500} className="w-[30px]" />
            </a>

            <a href="/assets/porto/demo/2.jpg" target="_blank">
              <Image src="/assets/porto/demo/2.jpg" alt="demo" width={500} height={500} className="w-[30px]" />
            </a>

            <a href="/assets/porto/demo/3.jpg" target="_blank">
              <Image src="/assets/porto/demo/3.jpg" alt="demo" width={500} height={500} className="w-[30px]" />
            </a>

            <a href="/assets/porto/demo/4.jpg" target="_blank">
              <Image src="/assets/porto/demo/4.jpg" alt="demo" width={500} height={500} className="w-[30px]" />
            </a>
          </div>

          <p className="text-sm">
            Aplikaksi yang bebas digunakan oleh lembaga profit ataupun non profit, dan ditujukan untuk melakukan pencatatan donasi di lapangan sebagai pendukung aplikasi Fundriser Admin
          </p>
          

          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>merancang sistem</li>
              <li>convert ui dari figma ke code</li>
              <li>implementasi api,yg sudah disediakan</li>
            </ul>
          </div>


          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:flutter" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Flutter</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:firebase" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Firebase</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "platform reservasi online ",
    title: "Be Style",
    src: "/assets/porto/be-style.png",
    ctaText: "Show",
    ctaLink: "https://be-style.mahirtechno.my.id/",
    content: () => {
      return (
        <div>
          <p className="text-sm">
            Platform yang ditujukan untuk melakukan pemesanan jadwal terapi secara online
          </p>

          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>convert ui to code </li>
              <li>implementasi Api</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:react" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">React JS</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:nextjs-icon" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Next Js</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:tailwindcss-icon" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Tailwind</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "cms blog berita ",
    title: "Nuxt Cms",
    src: "/assets/porto/sinau-nuxt.png",
    ctaText: "Show",
    ctaLink: "https://sinaudev.vercel.app/",
    content: () => {
      return (
        <div>
          <p className="text-sm">
            blog seputar teknologi
          </p>

          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>convert ui to code </li>
              <li>implementasi Api</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:vue" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Vue Js</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:nuxt-icon" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Nuxt Js</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "platform pembelajaran online ",
    title: "hasdemy",
    src: "/assets/porto/hasdemy/1.png",
    ctaText: "Show",
    ctaLink: "https://lms.hasdemy.com/",
    content: () => {
      return (
        <div>
          <p className="text-sm">
            Platform pembelajaran online https://lms.hasdemy.com/, platform yg ditujukan unutuk melakukan sertifikasi halal dan upgrading skill.
          </p>

          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>mengembangkan fitur di bagian admin seperti managemen kelas, seminar, transaksi, mengelola user dll</li>
              <li>mengimplementasikan Xendit Thirdparty API sebagai gateway pembayaran dan BSI api sebagai pembayaran utama</li>
              <li>mengemplementasikan fitur membership untuk member dan non member</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:laravel" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Laravel</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:alpinejs-icon" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Alpine JS</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:bootstrap" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">bootstrap</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:livewire" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Livewire</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "Tien and Crossing (Pertagas) ",
    title: "TAC",
    src: "/assets/porto/tac/2.png",
    ctaText: "Show",
    ctaLink: "",
    content: () => {
      return (
        <div>
          <p className="text-sm">
            sistem yang digunakan untuk mengelola proses  perizinan pencabangan maupun crossing pipa, memonitor perizinan, menerbitkan surat izin, dll
          </p>

          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>mengembangkan fitur proses perizinan  seperti review dokumen reject dan menyetujui, manajemen user, reminder pengajuan dll</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:laravel" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Laravel</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:alpinejs-icon" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Alpine JS</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:bootstrap" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">bootstrap</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "Simon (Pertagas) ",
    title: "SIMON",
    src: "/assets/porto/simon/1.png",
    ctaText: "Show",
    ctaLink: "",
    content: () => {
      return (
        <div>
          <p className="text-sm">
            sistem yang digunakan untuk mengajukan program kerja, mengelola proses perizinan, memonitor profit, proses approval program kerja, dll
          </p>

          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>Mengembangkan fitur proses penjajuan program baru, monitor profit, manajemen user, reminder pengajuan dll</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:laravel" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Laravel</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:alpinejs-icon" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Alpine JS</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:bootstrap" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">bootstrap</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "Web Booking Ticket untuk PO. Adhiputra",
    title: "web Ticketing",
    src: "/assets/porto/adiputra.png",
    ctaText: "Show",
    ctaLink: "https://adhiputramakassar.com/",
    content: () => {
      return (
        <div>
          <p className="text-sm">
            Platform yang berfungsi untuk melakukan booking tiket bus, melihat jadwal keberangkatan, melihat harga tiket, dll
          </p>

          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>Membangun UI CMS yang mudah digunakan oleh end user</li>
              <li>membuat dan menguji fitur-fitur baru yang scalable dan mudah di maintenance</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:laravel" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Laravel</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:alpinejs-icon" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Alpine JS</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:bootstrap" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">bootstrap</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "platform belajar online ",
    title: "HAKKA lms",
    src: "/assets/porto/hakka.png",
    ctaText: "Show",
    ctaLink: "https://lms.hakkaindonesia.co.id/",
    content: () => {
      return (
        <div>
          <p className="text-sm">
            platform belajar online https://lms.hakkaindonesia.co.id/ yang lebih di tunjukkan untuk program prakerja, digunakan untuk melakukan pembelajaran online, melihat materi, mengerjakan soal, dll
          </p>

          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>Membangun UI CMS yang mudah digunakan oleh end user</li>
              <li>membuat dan menguji fitur-fitur baru yang scalable dan mudah di maintenance</li>
              <li>Implementasi Zoom meeting untuk pembelajaran</li>
              <li>Implementasi Ipaymu sebagai payment</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:laravel" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Laravel</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:alpinejs-icon" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Alpine JS</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:bootstrap" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">bootstrap</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "platform belajar online ",
    title: "Astha academy",
    src: "/assets/porto/astha.png",
    ctaText: "Show",
    ctaLink: "",
    content: () => {
      return (
        <div>
          <p className="text-sm">
            platform belajar online yang lebih di tujukan untuk program prakerja, digunakan untuk melakukan pembelajaran online, melihat materi, mengerjakan soal, dll
          </p>

          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>Membangun UI CMS yang mudah digunakan oleh end user</li>
              <li>membuat dan menguji fitur-fitur baru yang scalable dan mudah di maintenance</li>
              <li>Implementasi Zoom meeting untuk pembelajaran</li>
              <li>Implementasi Ipaymu sebagai payment</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:laravel" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Laravel</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:alpinejs-icon" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Alpine JS</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:bootstrap" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">bootstrap</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "poins pertagas ",
    title: "POIS",
    src: "/assets/porto/pois/1.png",
    ctaText: "Show",
    ctaLink: "",
    content: () => {
      return (
        <div>
          <p className="text-sm">
            sistem yang bertujuan untuk membantu proses perizinan masuk dan keluar, pengelolaan dokumen masuk dan keluar, pemantauan proses perizinan, pengelolaan perizinan, pengelolaan dokumen perizinan, dan pemantauan masa berlaku perizinan karyawan.
          </p>

          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>Memperbaiki bug dari fitur yang sudah ada</li>
              <li>membuat dan menguji fitur-fitur baru yang scalable dan mudah di maintenance</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:laravel" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Laravel</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:alpinejs-icon" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Alpine JS</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:bootstrap" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">bootstrap</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "sistem pencatatan donasi ",
    title: "Fundriser Admin",
    src: "/assets/porto/donasi-backend.png",
    ctaText: "Show",
    ctaLink: "donasi.tvw-group.com/",
    content: () => {
      return (
        <div>
          <div className="flex gap-2 items-center mb-4">
            <Image src="/assets/img/github.png" alt="donasi" width={100} height={100} className="w-5 h-5" />
            <a className="text-sm" target="_blanl" href="https://github.com/izzelislam/DonasiBackend" >https://github.com/izzelislam/DonasiBackend</a>
          </div>

          <p className="text-sm">
            sistem pencatatan donasi yang bebas di gunakan oleh lembaga profit ataupun non profit, yang mempermudah fyndriser dilapangan untuk melakukan pencatatan , sehingga perolehan hasil donasi lebih transparan.
          </p>


          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>Memperbaiki bug dari fitur yang sudah ada</li>
              <li>membuat dan menguji fitur-fitur baru yang scalable dan mudah di maintenance</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:laravel" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Laravel</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:alpinejs-icon" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Alpine JS</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:bootstrap" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">bootstrap</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "sistem pendaftaran umkm go export ",
    title: "UMKM Go Export",
    src: "/assets/porto/go-export.png",
    ctaText: "Show",
    ctaLink: "",
    content: () => {
      return (
        <div>
          <p className="text-sm">
            Website https://peredaranpangan.pom.go.id/psh/#intro, digunakan untuk melakukan pendaftaran UMKM dengan tujuan pemberian modal, pembinaan UMKM, pengelolaan dan penyaringan berkas, dan lain-lain.
          </p>


          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>membangun UI yang mudah digunakan oleh end user</li>
              <li>membuat dan menguji fitur-fitur baru yang scalable dan mudah dirawat</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:laravel" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Laravel</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:alpinejs-icon" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Alpine JS</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:bootstrap" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">bootstrap</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "sistem pendaftaran siswa",
    title: "PSB Luha",
    src: "/assets/porto/psb-luha.png",
    ctaText: "Show",
    ctaLink: "",
    content: () => {
      return (
        <div>
          <p className="text-sm">
            Website penerimaan siswa/mahasiswa baru di https://register.luqmanalhakimmagelang.ponpes.id/, dengan berbagai fitur, seperti registrasi, verifikasi dokumen, dll.
          </p>


          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>membangun UI yang mudah digunakan oleh end user</li>
              <li>membuat dan menguji fitur-fitur baru yang scalable dan mudah dirawat</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:laravel" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Laravel</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:alpinejs-icon" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Alpine JS</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:bootstrap" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">bootstrap</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "BTN AdvisorySystem  ",
    title: "BTN AdvisorySystem  ",
    src: "/assets/porto/btn.png",
    ctaText: "Show",
    ctaLink: "",
    content: () => {
      return (
        <div>
          <p className="text-sm">
            CMS yang digunakan untuk mengelola mentee dan mentor, kategori konten, statistik kategori konsultasi, statistik mentor teratas, dll.
          </p>


          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>membangun UI yang mudah digunakan oleh end user</li>
              <li>membuat dan menguji fitur-fitur baru yang dapat diskalakan dan mudah dirawat</li>
              <li>membuat API untuk pendaftaran, mengirimkan konsultasi yang diterima dan ditolak, berita, API obrolan Realtime</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center flex-wrap mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:laravel" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Laravel</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:alpinejs-icon" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Alpine JS</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:bootstrap" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">bootstrap</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:nodejs-icon-alt" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Express JS</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "platform pembelajaran online  ",
    title: "Samaloop  ",
    src: "/assets/porto/samaloop.png",
    ctaText: "Show",
    ctaLink: "",
    content: () => {
      return (
        <div>
          <p className="text-sm">
            Sistem manajemen pembelajaran untuk https://samaloop.com, digunakan untuk melakukan sertifikasi, webinar, pembelajaran mandiri, dll.
          </p>


          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>Integrasi frontend menggunakan data yang sudah tersedia di backend</li>
              <li>Raja Onkir API untuk memeriksa biaya pengiriman</li>
              <li>Mengimplementasikan Xendit Thirdparty API sebagai payment gateway </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center flex-wrap mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:laravel" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Laravel</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:alpinejs-icon" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Alpine JS</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:bootstrap" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">bootstrap</p>
              </div>
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:nodejs-icon-alt" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Express JS</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
  {
    description: "cms blog berita ",
    title: "Vue Blog",
    src: "/assets/porto/vue-blog.png",
    ctaText: "Show",
    ctaLink: "https://sinaudev-vue.vercel.app/",
    content: () => {
      return (
        <div>
          <p className="text-sm">
            blog seputar teknologi
          </p>

          <div className="mb-6">
            <p className="font-semibold my-3 text-sm">Tanggung Jawab :</p>
            <ul className="text-sm">
              <li>convert ui to code </li>
              <li>implementasi Api</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold mb-2">Stack :</p>
            <div className="flex gap-2 items-center mb-6">
              <div className="flex gap-1 items-center border dark:border-sky-500 rounded-lg px-2 py-1">
                <Icon icon="logos:vue" className="text-2xl" />
                <p className="text-sm text-gray-700 dark:text-white">Vue Js</p>
              </div>
            </div>
          </div>

        </div>
      );
    },
  },
]

export {experience, educations, tech, portos}