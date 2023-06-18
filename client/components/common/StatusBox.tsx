import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function StatusBox() {
  return (
    <>
      <div className="StatusBox GameBox"> 
        <h4>Nourishment: {}:100</h4>
        <h4>Tiredness: {}:100</h4>
        <h4>Psyche: {}:100</h4>
      </div>
    </>
  )
}