import { Timeline } from '@/components/ui/timeline'
import { educations } from '@/constant'
import React from 'react'

const EducationSection = () => {
  return (
    <div className="container">
      <Timeline type="education"  title="Education" data={educations} />
    </div>
  )
}

export default EducationSection