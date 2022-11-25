import React from 'react'
import iconos from '../../iconos'
import NavBarBotonesResponsive from './NavBarResponsive'

const CartWidget = ({num}) => {
  return (
  <button className={NavBarBotonesResponsive.Sm+NavBarBotonesResponsive.Xl+' group hover:text-green-400 relative hover:text-shadow hover:shadow-green-400'}>
    <p className='hidden lg:flex'>CARRITO</p>
    <div className=''>{iconos.carrito}<div className={'w-5 h-5 bg-zinc-900 border-2 text-white rounded-full group-hover:border-green-400 group-hover:text-green-400 flex flex-row items-center justify-center absolute bottom-[0.60rem] left-[0.8rem]  lg:bottom-[0.69rem] lg:left-[4.1rem] xl:bottom-[0.69rem] xl:left-[4.7rem]'}>{num}</div></div>
  </button>
  )
}

export default CartWidget;