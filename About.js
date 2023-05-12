import React, { useContext } from 'react'
import textContext from '../Context/testapp/testContext'

export default function About() {
  const a = useContext(textContext)
  return (
    <div className='container md-12'>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quae dolorem quidem nobis qui in saepe consequatur voluptates beatae provident, at esse corrupti maxime architecto obcaecati magnam expedita necessitatibus eligendi.........{a.name} - {a.class}</p>
    </div>
  )
}
