import React from 'react'

const ItemListContainer = (props) => {
  return (
    
    <div className='p-4 w-[18%] bg-zinc-900 font-medium font-sans tracking-wide rounded-sm text-base text-white absolute top-16 outline outline-2 outline-violet-500 shadow-lg shadow-violet-500/30'>Hola, {props.nombre}, nueva musica te espera</div>
  )
}

export default ItemListContainer;