import {deleteDoc, doc, getDoc, getFirestore, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import iconos from '../iconos';

export const ItemDetailContainer = ()=> {
// TODO SE ENCARGA DE TOMAR LA INFORMACION SEGUN EL ID QUE RETORNA USEPARAMS Y RE-RENDERIZA PARA QUE EL BOTON PUEDA FUNCIONAR 
  const {id} = useParams();
  const db = getFirestore();
  const [datas, setdatas] = useState({});
  const [Render,setRender]=useState();
  const [loading, setloading]=useState(true);
  
  useEffect(() => {
    const db = getFirestore();
    const GetItemData = async()=>{
      const docsRef = doc(db,'item',id);
      await getDoc(docsRef).then((d)=>setdatas({id:d.id,vt:true, ...d.data()}));}  
  GetItemData()
}, [Render])

useEffect(() => {
  setTimeout(()=>{setloading(false)},2000)
}, [loading]);
  
//todo

const [FavouritesButton, SetFavoutitesButton]=useState(!datas.deseado);
const Favourite=()=>{SetFavoutitesButton(false)}
const NonFavourites=()=>{SetFavoutitesButton(true)}

//* SE ENCARGAN DE AÑADIR EL BOOLEANO DEL CARRITO DEL ID DE LA COLECCION ITEM.

const AddUpdate = () =>{
  const getdoc = doc(db,'item',id);
  updateDoc(getdoc,{carrito:false});
}

const LessUpdate = () =>{
  const getdoc = doc(db,'item',id);
  updateDoc(getdoc,{carrito:true});
}
//*
//! SE ENCARGAN DE AÑADIR Y BORRAR EL ITEM A LA LISTA DEL CARTWIDGET.

const AddToCartList = async() =>{
  const GetCategory = doc(db,'carrito',id);
  const item = {
      title:datas.title,
      artists:datas.artists,
      img:datas.img,
      estilo:datas.estilo,
      precio:datas.precio,
      added: serverTimestamp(),
  }
  await setDoc(GetCategory,item);
}
const RemoveToCartList = async()=>{
  await deleteDoc(doc(db,'carrito',id))
}
//!.
/*if(loading===true){
  return(<main className='h-screen bg-neutral-900 flex items-center justify-center'>
  <div className='w-2/4 h-2/5 flex rounded-sm border border-zinc-700 mb-32'>
    <divimg className='h-full w-[40%] bg-neutral-500 object-cover'/>
   <div className='flex flex-col w-full space-y-5 justify-center'> 
    <div className='bg-neutral-500 w-4/6 h-8'/>
    <div className='bg-neutral-500 w-4/12 h-7'/>
    <div className='w-4/5 h-[3.38rem] ml-[10%] bg-neutral-500 rounded'/>
    <div className='w-full flex flex-row justify-center'>
    <divb className=' w-10 h-8 flex justify-center items-center rounded-lg bg-neutral-500'/>
    <divb className=" w-2/3 h-8 p-1 mx-1 font-sans subpixel-antialiased flex items-center justify-center rounded-lg bg-neutral-500"/>
    </div>
  </div>
  </div>
</main>)

}else if(loading===false){
  return (
    <main className='h-screen bg-neutral-900 flex items-center justify-center'>
      <div className=' w-2/4 h-2/5 flex rounded-sm border border-zinc-700 mb-32'>
        <img src={datas.img} alt="idk" className='h-full w-[40%] object-cover'/>
       <div className='flex flex-col w-full space-y-5 justify-center'> 
        <h1 className='text-white text-2xl'>{datas.title}</h1>
        <h2 className='text-neutral-400 text-xl'>{datas.artists}</h2>
        <audio className='w-4/5 ml-[10%]' src={datas.song} controls/>
        <div className='w-full flex flex-row justify-center'>
        {FavouritesButton ? <button onClick={Favourite} className=' w-10 flex justify-center items-center rounded-lg hover:shadow-[0px_0px_7px_1px] shadow-pink-400/60 text-pink-500 border border-pink-500'>{iconos.corazon}</button> : <button onClick={NonFavourites} className=' w-10 flex justify-center items-center rounded-lg shadow-[0px_0px_7px_1px] shadow-pink-400/60 bg-pink-500 border border-pink-500 text-zinc-900'>{iconos.corazonLleno}</button>}
        {datas.carrito
        ? 
        <button onClick={()=>{AddUpdate(); AddToCartList(); setRender(false)}}  className="group w-2/3 p-1 mx-1 font-sans subpixel-antialiased flex items-center justify-center rounded-lg bg-green-500 shadow-[0px_0px_7px_1px] shadow-green-400/60 text-white">{iconos.carrito}+${datas.precio}</button> 
        : 
        <button onClick={()=>{LessUpdate(); RemoveToCartList(); setRender(true)}}  className="group w-2/3 p-1 mx-1 font-sans subpixel-antialiased flex items-center justify-center rounded-lg bg-red-500 shadow-[0px_0px_7px_1px] shadow-red-400/60 text-white">{iconos.carrito}-${datas.precio}</button>}
        </div>
      </div>
      </div>
    </main>
  )
}*/



return (
    <main className='h-screen bg-neutral-900 flex items-center justify-center'>
      <div className=' aparicion w-2/4 h-2/5 flex rounded-sm border border-zinc-700 mb-32'>
        <img src={datas.img} alt="idk" className='h-full w-[40%] object-cover'/>
       <div className='flex flex-col w-full space-y-5 justify-center'> 
        <h1 className='text-white text-2xl'>{datas.title}</h1>
        <h2 className='text-neutral-400 text-xl'>{datas.artists}</h2>
        <audio className='w-4/5 ml-[10%]' src={datas.song} controls/>
        <div className='w-full flex flex-row justify-center'>
        {FavouritesButton ? <button onClick={Favourite} className=' w-10 flex justify-center items-center rounded-lg hover:shadow-[0px_0px_7px_1px] shadow-pink-400/60 text-pink-500 border border-pink-500'>{iconos.corazon}</button> : <button onClick={NonFavourites} className=' w-10 flex justify-center items-center rounded-lg shadow-[0px_0px_7px_1px] shadow-pink-400/60 bg-pink-500 border border-pink-500 text-zinc-900'>{iconos.corazonLleno}</button>}
        {datas.carrito
        ? 
        <button onClick={()=>{AddUpdate(); AddToCartList(); setRender(false)}}  className="group w-2/3 p-1 mx-1 font-sans subpixel-antialiased flex items-center justify-center rounded-lg bg-green-500 shadow-[0px_0px_7px_1px] shadow-green-400/60 text-white">{iconos.carrito}+${datas.precio}</button> 
        : 
        <button onClick={()=>{LessUpdate(); RemoveToCartList(); setRender(true)}}  className="group w-2/3 p-1 mx-1 font-sans subpixel-antialiased flex items-center justify-center rounded-lg bg-red-500 shadow-[0px_0px_7px_1px] shadow-red-400/60 text-white">{iconos.carrito}-${datas.precio}</button>}
        </div>
      </div>
      </div>
    </main>
  )
}

