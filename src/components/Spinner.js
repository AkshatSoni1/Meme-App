import React from 'react'
import loader from '../loader1.gif'
export default function Spinner() {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
        <img className="my-4" src={loader} alt='loading..'></img>
    </div>
  )
}
