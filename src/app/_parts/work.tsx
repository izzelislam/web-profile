import { Timeline } from '@/components/ui/timeline'
import { experience } from '@/constant'
import React from 'react'



const WorkSection = () => {
  return (
    <div className="container">
      <Timeline type="work" title="Work Experience"  data={experience} />
    </div>
  )
}

export default WorkSection