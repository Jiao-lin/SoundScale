import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import iconos from '../iconos';

export const ItemDetailContainer = ({count,setcount})=> {
  
  const [ButtonToggle, SetButtonToggle]=useState(true);
  const [FavouritesButton, SetFavoutitesButton]=useState(true);
  const AddCart = () =>{setcount(count+1); SetButtonToggle(false);}
  const LessCart = () =>{setcount(count-1); SetButtonToggle(true);}
  const Favourite=()=>{SetFavoutitesButton(false)}
  const NonFavourites=()=>{SetFavoutitesButton(true)}

// TODO Start of All methodes to get data
  const [datas, setdatas] = useState([]);

  const {id} = useParams();

  useEffect(()=>{
     const GetData = async()=>{
    const URL = `https://rickandmortyapi.com/api/character/`;
    const response = await fetch(URL + id);
    const data = await response.json();
    setdatas(data);
} 
GetData();
},[id]);
//TODO End of All methodes to get data.
  return (
    <main className='h-screen bg-neutral-900 flex items-center justify-center'>
      <div className='w-2/4 h-2/5 flex rounded-sm border border-zinc-700 mb-32'>
        <img src={datas.image} alt="idk" className='h-full'/>
       <div className='flex flex-col w-full space-y-5 justify-center'> 
        <h1 className='text-white text-2xl'>{datas.name}</h1>
        <h2 className='text-neutral-400 text-xl'>Publicado el {datas.created}</h2>
        <div className='w-full flex flex-row justify-center'>
        {FavouritesButton ? <button onClick={Favourite} className=' w-10 flex justify-center items-center rounded-lg hover:shadow-[0px_0px_7px_1px] shadow-pink-400/60 text-pink-500 border border-pink-500'>{iconos.corazon}</button> : <button onClick={NonFavourites} className=' w-10 flex justify-center items-center rounded-lg shadow-[0px_0px_7px_1px] shadow-pink-400/60 bg-pink-500 border border-pink-500 text-zinc-900'>{iconos.corazonLleno}</button>}
        {ButtonToggle 
        ? 
        <button onClick={AddCart} className="group w-2/3 p-1 mx-1 font-sans subpixel-antialiased flex items-center justify-center rounded-lg bg-green-500 shadow-[0px_0px_7px_1px] shadow-green-400/60 text-white">{iconos.carrito}+$3000</button> 
        : 
        <button onClick={LessCart} className="group w-2/3 p-1 mx-1 font-sans subpixel-antialiased flex items-center justify-center rounded-lg bg-red-500 shadow-[0px_0px_7px_1px] shadow-red-400/60 text-white">{iconos.carrito}-$3000</button>}
        </div>
      </div>
      </div>
    </main>
  )
}
