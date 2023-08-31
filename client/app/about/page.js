"use client"
import React, { useState } from 'react'

const page = () => {
   
    const [state, setState]= useState("this is state")
    const [color, setColor]= useState("White")
  return (
    <div>page{state}. Hey the color you love was {color}</div>
  )
}


export default page
