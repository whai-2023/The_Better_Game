import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function DayAndLocationBox() {
  return (
    <>
      <div className="DayAndLocationBox GameBox"> 
        <h4>Day: {}, Location: {}</h4>
      </div>
    </>
  )
}