import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function DialogueBox() {
  return (
    <>
      <div className="DialogueBox GameBox"> 
        <h4>You awake in the forest with little to no memory of how you got there...<br />
            What do you do?</h4>
        <h4>1. Search the surroundings</h4>
        <h4>2. Check your backpack</h4>
        <h4>3. Go back to sleep</h4>
      </div>
    </>
  )
}