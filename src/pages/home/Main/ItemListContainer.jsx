import React from 'react'
import MusicList from '../../../models/MusicList'

function ItemListContainer({count,setcount}) {
  return (
    <main className='h-auto bg-neutral-900'>
      
      <h1 className='text-white text-3xl p-4 subpixel-antialiased'>ELECTRONICA</h1>
      <MusicList count={count} setcount={setcount}/>
    </main>
  )
}

export default ItemListContainer
