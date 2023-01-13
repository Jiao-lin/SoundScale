import React, { useEffect, useState }  from 'react'
import iconos from '../../../iconos'
import NavBarBotonesResponsive from './NavBarResponsive'
import CartList from '../../../components/containers/CartList'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const CartWidget = () => {

  const [Item, setItem] = useState([]);

  useEffect(()=>{
    getItemData()
  },[Item])

  if(Item.length > 99){
    setItem('9+');
  }else{}

  const getItemData=async()=>{
    const db = getFirestore();
    const docsRef = collection(db,'carrito')
    const snapshot = await getDocs(docsRef)
    setItem(snapshot.docs.map(f => ({id:f.id, ...f.data()})));
  }

  return (
  <button className={NavBarBotonesResponsive.Sm+NavBarBotonesResponsive.Xl+' h-full group hover:text-green-400 relative hover:text-shadow hover:shadow-green-400'}>
    <p className='hidden lg:flex uppercase'>CARRITO</p>
    <div className=''>{iconos.carrito}<div className={'w-5 h-5 text-xs tracking-[-1px] bg-zinc-900 border-2 text-white rounded-full group-hover:border-green-400 group-hover:text-green-400 flex flex-row items-center justify-center absolute bottom-[1.7rem] left-[0.8rem] lg:bottom-[1.7rem] lg:left-[4.1rem] xl:bottom-[1.7rem] xl:left-[4.7rem]'}>{Item.length}</div></div>
    <div className='hidden rounded border-zinc-700 border shadow-xl cursor-default h-[23rem] absolute top-[3.4rem] right-0 bg-neutral-900 group-hover:inline'>
    <CartList/>
    </div>
  </button>
  )
}
export default CartWidget;