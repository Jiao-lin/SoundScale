import React from 'react';
import iconos from '../iconos';
import CartWidget from './CartWidget';

export const NavBar = () => {
  const NavBarNames = {boton1:"GENEROS",boton2:"TIPOS",boton3:"FAVORITOS"};
  const NavBarBotonesCss= "w-fit items-center grid-cols-2 flex flex-row text-white font-sans font-medium tracking-wide text-sm subpixel-antialiased gap-x-1 hover:text-shadow";
  return (

    <header className='w-full h-14 bg-zinc-900 grid grid-cols-12 grid-rows-1 justify-items-start	items-center '>
        <div className={NavBarBotonesCss+" ml-3"}>{iconos.logo}</div>
        <div className={"rounded-lg col-span-5 w-11/12 h-10 flex flex-row bg-zinc-800 justify-end"}>
          <input placeholder='Buscar...' className={"w-full rounded-l-lg h-full text-neutral-50 p-2 bg-zinc-800 focus:outline-none focus:border-y-2 focus:border-l-2 focus:border-violet-500"}></input>
          <button className={'w-1/5 h-10 rounded-r-lg bg-violet-500 flex flex-row items-center justify-center'}>{iconos.buscar}</button>
        </div>
        <button className={NavBarBotonesCss+" hover:text-violet-500 hover:shadow-violet-500 active:text-violet-500"}>{NavBarNames.boton1}{iconos.flecha}</button>
        <button className={NavBarBotonesCss+" hover:text-violet-500 hover:shadow-violet-500 active:text-violet-500"}>{NavBarNames.boton2}{iconos.flecha}</button>
        <button className={NavBarBotonesCss+" hover:text-pink-500 hover:shadow-pink-500 active:text-pink-500"}>{NavBarNames.boton3}{iconos.corazon}</button>
        <CartWidget></CartWidget>
        
    </header>
  )
}



