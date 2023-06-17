import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function DialogueBox() {
  return (
    <>
      <div className="landing"> 
        <div className="enter">
        <h1>HOUR : FATE</h1>
          <Link to="/IntroText">
            <h3>START</h3>
          </Link>
        </div>
      </div>
    </>
  )
}