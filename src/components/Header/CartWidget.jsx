import React from 'react'
import iconos from '../../iconos'

const CartWidget = ({num}) => {
  return (
  <button className='group w-fit place-self-center items-center flex flex-row text-white font-sans font-medium tracking-wide text-sm subpixel-antialiased gap-x-1 hover:text-green-400 relative hover:text-shadow hover:shadow-green-400'>CARRITO
  
  <div className='z-0 absolute inset-y-0 left-[3.9rem]'>{iconos.carrito}</div>
  <div className={'w-5 h-5  bg-zinc-900 border-2 text-white rounded-full group-hover:border-green-400 group-hover:text-green-400 flex flex-row items-center justify-center absolute bottom-1.5 left-[4.7rem] z-10'}>{num}</div>
 
  </button>
  )
}

export default CartWidget;