import { useState } from "react";
import iconos from "../iconos";

const MusicCard = ({name,species,status,image,count,setcount})=>{

    const [ButtonToggle, SetButtonToggle]=useState(true);
    const [FavouritesButton, SetFavoutitesButton]=useState(true);

    const AddCart = () =>{setcount(count+1); SetButtonToggle(false);}
    const LessCart = () =>{setcount(count-1); SetButtonToggle(true);}

    const Favourite=()=>{SetFavoutitesButton(false)}
    const NonFavourites=()=>{SetFavoutitesButton(true)}
    
    return(
    <div className="h-14 w-2/3 gap-2 items-center flex justify-between text-slate-300 bg-zinc-900 rounded-md">
    <img src={image} alt='imagen' className='h-full'></img>
    <h1>{name}</h1>
    <div className='flex justify-center items-center gap-x-4 h-full'>
        {FavouritesButton ? <button onClick={Favourite} className='h-3/4 w-10 flex justify-center items-center rounded-lg hover:shadow-[0px_0px_7px_1px] shadow-pink-400/60 text-pink-500 border border-pink-500'>{iconos.corazon}</button> : <button onClick={NonFavourites} className='h-3/4 w-10 flex justify-center items-center rounded-lg shadow-[0px_0px_7px_1px] shadow-pink-400/60 bg-pink-500 border border-pink-500 text-zinc-900'>{iconos.corazonLleno}</button>}
        {ButtonToggle 
        ? 
        <button onClick={AddCart} className=" h-3/4 w-2/3 p-1 mx-1 font-sans subpixel-antialiased flex items-center justify-center rounded-lg bg-green-500 shadow-[0px_0px_7px_1px] shadow-green-400/60 text-white">{iconos.carrito}+$3000</button> 
        : 
        <button onClick={LessCart} className=" h-3/4 w-2/3 p-1 mx-1 font-sans subpixel-antialiased flex items-center justify-center rounded-lg bg-red-500 shadow-[0px_0px_7px_1px] shadow-red-400/60 text-white">{iconos.carrito}-$3000</button>}
    </div>
    </div>
    )
}
export default MusicCard