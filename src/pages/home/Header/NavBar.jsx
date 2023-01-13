
import { Link } from 'react-router-dom';
import iconos from '../../../iconos';
import CartWidget from './CartWidget';
import NavBarResponsive from './NavBarResponsive';

export const NavBar = () => {

  return (
    <header>
      <nav className='w-full h-14 border-b border-zinc-800 bg-neutral-900 grid grid-rows-1 justify-items-start items-center lg:grid-cols-12 grid-cols-9'>
        <div className={NavBarResponsive.Sm+" "+NavBarResponsive.Xl+" "}><Link to={`/`}>{iconos.logo}</Link></div>
        <div className={"flex flex-row h-10 w-full ml-[1%] rounded-lg col-span-6 bg-zinc-800 justify-end lg:col-span-5 lg:w-11/12 "}>
          <input placeholder=' Buscar...' type={"text"} spellCheck={"false"} className={"w-full rounded-l-lg h-full text-neutral-50 p-2 bg-zinc-800 focus:outline-none focus:border-y-2 focus:border-l-2 focus:border-violet-500 caret-violet-500"}></input>
          <button className={'w-1/5 h-10 rounded-r-lg bg-violet-500 flex flex-row items-center justify-center'}>{iconos.buscar}</button>
        </div>
        <button className={NavBarResponsive.Sm+" "+NavBarResponsive.Xl+" h-full hidden lg:flex hover:text-violet-500 hover:shadow-violet-500 active:text-violet-500 group"}><p className='hidden md:inline uppercase'>GÉNEROS</p>{iconos.flecha}
        <div className='hidden rounded-sm border border-zinc-700 cursor-default h-24 w-1/5 absolute top-[3.4rem] right-auto bg-neutral-900 group-hover:inline'>
        <ul className='flex ml-2 mt-3 gap-3 w-fit cursor-pointer text-white font-normal text-shadow-none shadow-none'>
        <Link to={`/Generos/Electronica`}><li>Electronica</li></Link>
        <Link to={`/Generos/Rkt`}><li>Rkt</li></Link>
        </ul></div>
        </button>
        <button className={NavBarResponsive.Sm+" "+NavBarResponsive.Xl+" hidden lg:flex hover:text-violet-500 hover:shadow-violet-500 active:text-violet-500"}><p className='hidden md:inline uppercase'>TIPOS</p>{iconos.flecha}</button>
        <button className={NavBarResponsive.Sm+" "+NavBarResponsive.Xl+" hidden lg:flex hover:text-pink-500 hover:shadow-pink-500 active:text-pink-500"}><p className='hidden md:inline uppercase'>FAVORITOS</p>{iconos.corazon}</button>
        <CartWidget/>
        <button className={NavBarResponsive.Sm+" "+NavBarResponsive.Xl+" flex lg:hidden hover:text-pink-500 hover:shadow-pink-500 active:text-pink-500"}>{iconos.menu}</button>
        </nav>
    </header>
  )
}



