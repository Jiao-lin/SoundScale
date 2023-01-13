import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import MusicCard from '../../../../components/musicCard copy';

export const Electronica = () => {
    
    const [Item, setItem] = useState([]);
  
    useEffect(()=>{
      getItemData()
    },[])

    const getItemData=async()=>{
        const db = getFirestore();
        const docsRef = collection(db,'item')
        const q = query(docsRef,where('estilo','==',"electronica"))
        const snapshot = await getDocs(q)
        setItem(snapshot.docs.map(f => ({id:f.id, ...f.data()})));
      }
    return (
        <main className='h-screen bg-neutral-900'>
        <h1 className='text-white text-3xl p-4 subpixel-antialiased'>ELECTRONICA</h1>
        <div className='grid grid-cols-1 gap-3 justify-items-center'>
         {Item.map(p=> <MusicCard id={p.id} key={p.id}{...p}/>)}
         </div>
        </main>
      )
}
