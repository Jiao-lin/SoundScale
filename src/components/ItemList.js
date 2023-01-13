import { useState } from "react";
import { Link } from "react-router-dom";
import iconos from "../iconos";
import {deleteDoc, doc, getFirestore, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";

const MusicCard = ({artists,id,img,title,carrito,deseado,song,precio,estilo})=>{
    const db = getFirestore();
    const [ButtonToggle, SetButtonToggle]=useState(carrito);
    const [FavouritesButton, SetFavoutitesButton]=useState(!deseado);
    

    const AddUpdate = () =>{
        const getdoc = doc(db,'item',id);
        updateDoc(getdoc,{carrito:false});
    }

    const LessUpdate = () =>{
        const getdoc = doc(db,'item',id);
        updateDoc(getdoc,{carrito:true});
    }

    const Favourite=()=>{SetFavoutitesButton(false)}
    const NonFavourites=()=>{SetFavoutitesButton(true)}

    const AddToCartList = async() =>{
        const db = getFirestore();
        const GetCategory = doc(db,'carrito',id);
        const item = {
            title:title,
            artists:artists,
            img:img,
            precio:precio,
            estilo:estilo,
            added: serverTimestamp(),
        }
        await setDoc(GetCategory,item);
    }

    const RemoveToCartList = async()=>{
        const db = getFirestore();
        await deleteDoc(doc(db,'carrito',id))
    }

    return(
        <div key={id} className="h-16 w-2/3 gap-2 items-center flex justify-between text-slate-300 bg-zinc-800 rounded-md">
        <img src={img} alt='imagen' className='h-full'/>
        <h1>{title}<p> - {artists}</p></h1>
        <audio controls src={song}/>
        <div className='flex justify-center items-center gap-x-4 h-full'>
            {FavouritesButton ? <button onClick={Favourite} className='h-3/4 w-10 flex justify-center items-center rounded-lg hover:shadow-[0px_0px_7px_1px] shadow-pink-400/60 text-pink-500 border border-pink-500'>{iconos.corazon}</button> : <button onClick={NonFavourites} className='h-3/4 w-10 flex justify-center items-center rounded-lg shadow-[0px_0px_7px_1px] shadow-pink-400/60 bg-pink-500 border border-pink-500 text-zinc-900'>{iconos.corazonLleno}</button>}
            {ButtonToggle 
            ? 
            <button onClick={()=>{AddUpdate(); AddToCartList(); SetButtonToggle(false)}} className="group h-3/4 w-2/3 p-1 mx-1 font-sans subpixel-antialiased flex items-center justify-center rounded-lg bg-green-500 shadow-[0px_0px_7px_1px] shadow-green-400/60 text-white">{iconos.carrito}<p className="hidden group-hover:inline">+${precio}</p></button> 
            : 
            <button onClick={()=>{LessUpdate(); RemoveToCartList(); SetButtonToggle(true)}} className="group h-3/4 w-2/3 p-1 mx-1 font-sans subpixel-antialiased flex items-center justify-center rounded-lg bg-red-500 shadow-[0px_0px_7px_1px] shadow-red-400/60 text-white">{iconos.carrito}<p className="hidden group-hover:inline">-${precio}</p></button>}
            <Link to={`/${estilo}/${id}`}><button className="h-3/4 w-20 mx-1 flex justify-center items-center rounded-lg hover:shadow-[0px_0px_7px_1px] shadow-violet-400/60 text-violet-500 border border-violet-500">Ver Detalles</button></Link>
            </div>
        </div>
    
    )
}
export default MusicCard