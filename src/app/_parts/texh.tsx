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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {
          tech.map((group: any, index: number) => (
            <div
              key={index}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="h-6 w-1.5 rounded-full bg-sky-500" />
                <h3 className="text-base md:text-lg font-bold text-black dark:text-white">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {
                  group.items.map((item: any, i: number) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3 py-2 hover:border-sky-500/60 transition-colors"
                    >
                      <Icon icon={item.icon} className="text-2xl shrink-0" />
                      <p className="text-sm font-medium text-black dark:text-neutral-300">
                        {item.name}
                      </p>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TechSection
