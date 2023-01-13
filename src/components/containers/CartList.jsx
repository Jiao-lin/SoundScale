import { collection, getDocs, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const CartList = () => {
    const [Item, setItem] = useState([]);
  
    useEffect(()=>{
      getItemData()
    },[Item])

    const getItemData=async()=>{
        const db = getFirestore();
        const docsRef = collection(db,'carrito')
        const snapshot = await getDocs(docsRef)
        setItem(snapshot.docs.map(f => ({id:f.id, ...f.data()})));
    }
    if(Item.length == 0){
      return(
      <div className='flex flex-row justify-center w-96 pt-32 '>EL CARRITO ESTA VACIO</div>
      )
    }else if (Item.length > 0){
      
      return (
        <div className='flex flex-col h-[23rem] bg-neutral-900'>
        <div className='overflow-y-scroll h-80'>
        {Item.map(p=><div key={p.id} className='flex flex-row bg-neutral-900 w-[30rem] h-28 items-center my-1 border-b border-zinc-700'>
          <img className='w-32 bg-cover rounded-md ml-3' src={p.img}></img>
          <div className='flex flex-col items-start pl-3 pt-1'>
          <p className='text-zinc-100 text-shadow-none font-normal'>{p.title}</p>
          <p className='text-zinc-200 text-shadow-none font-light'>{p.artists}</p>
          </div>
          <p className='text-zinc-100 text-shadow-none font-normal pl-6'>${p.precio}</p>
        </div>
        )}
        </div>
        <Link className='flex items-center justify-center w-full h-12 text-base text-white text-shadow-none font-normal bg-green-500 rounded-b' to={`/checkout`}> Continuar al checkout</Link>
        </div>
  )}
}

export default CartList