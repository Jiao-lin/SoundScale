import React from 'react'
import { Link } from 'react-router-dom'

export const GenerosList = () => {
    
  return (
  <div className='rounded-sm border border-zinc-700 cursor-default h-24 w-1/5 absolute top-12 right-auto bg-white'>
    <ul className='flex ml-2 mt-3 cursor-pointer text-white font-normal text-shadow-none shadow-none'>
        <Link to={`/Generos/Electronica`}><li>Electronica</li></Link>
        <Link to={`/Generos/Rkt`}><li>Rkt</li></Link>
    </ul>
  </div>
  )
}
