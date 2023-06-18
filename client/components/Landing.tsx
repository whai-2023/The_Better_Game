import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Landing() {

  return (
    <>
      <div className="title">
        <h1>HOUR : FATE</h1>
          <Link to="/intro-text">
            <h3>START</h3>
          </Link>
      </div>
    </>
  )
}