import React from 'react'
import ItemListFire from '../../../components/firebase/itemListHome'


function MainContainer() {
  return (
    <main className='h-auto bg-neutral-900'>
      <h1 className='text-white text-3xl p-4 subpixel-antialiased'>TOP 20 MAS DESEADOS</h1>
      <ItemListFire/>
    </main>
  )
}

export default MainContainer
