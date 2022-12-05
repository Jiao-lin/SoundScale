import React from 'react'
import MusicList from '../../../models/MusicList'

function MainContainer({count,setcount}) {
  return (
    <main className='h-auto bg-black'>
       <h1 className='text-white text-3xl p-4 subpixel-antialiased'>TOP 20 MAS DESEADOS</h1>
      <MusicList count={count} setcount={setcount}/>
    </main>
  )
}

export default MainContainer
