import React, { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore, orderBy, query} from 'firebase/firestore'
import MusicCard from '../musicCard copy';
const ItemListFire= ()=> {
  
  const [Item, setItem] = useState([]);

  useEffect(()=>{
    getItemData()
  },[])

  const getItemData=async()=>{
    const db = getFirestore();
    const docsRef = collection(db,'item')
    const q = query(docsRef, orderBy("title","desc"))
    const snapshot = await getDocs(q)
    setItem(snapshot.docs.map(f => ({id:f.id, ...f.data()})));
  }
  return (
    <main className='h-screen bg-neutral-900 mt-16'>
    <div className='grid grid-cols-1 gap-3 justify-items-center'>
     {Item.map(p=> <MusicCard id={p.id} key={p.id}{...p}/>)}
     </div>
    </main>
  )
}
export default ItemListFire;


