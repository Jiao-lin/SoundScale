import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Checkout = () => {

    const [Item, setItem] = useState([]);

  useEffect(()=>{
    getItemData()
  },[Item])

  const getItemData= async() =>{
    const db = getFirestore();
    const docsRef = collection(db,'carrito')
    const snapshot = await getDocs(docsRef)
    setItem(snapshot.docs.map(f => ({id:f.id, ...f.data()})));
  }

    return (
    <div className='h-screen bg-neutral-900 flex flex-col'>
        <p className='text-white text-3xl p-4 subpixel-antialiased'>CHECKOUT</p>
    <div className='h-screen bg-neutral-900 p-4 grid grid-flow-col gap-10'>
    <div>
        <form className='bg-neutral-800 p-3 rounded-md w-[48rem] grid grid-cols-2 items-start gap-4'>
            <div className="flex flex-col ml-4 items-start w-full">
                <span className="text-sm font-medium text-neutral-400" id='nombre'>Nombre</span>
                <input type="text" htmlFor='nombre' required className="peer w-4/6 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-500 focus:ring-violet-500 block rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"/>
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Porfavor introduzca su apellido.
                </p>
              </div>

            <div className="flex flex-col ml-4 items-start w-full">
                <span className="text-sm font-medium text-neutral-400" id='nombre'>Apellido</span>
                <input type="text" htmlFor='apellido' required className="peer w-4/6  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-500 focus:ring-violet-500 block rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"/>
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Porfavor introduzca su apellido.
                </p>
              </div>
                
                <div className="flex flex-col ml-4 items-start w-full">
                <span className="text-sm font-medium text-neutral-400" id='email'>Email</span>
                <input type="email" htmlFor='email' required className="peer w-4/6 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-500 focus:ring-violet-500 block rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"/>
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Porfavor introduzca un email valido.
                </p>
              </div> 

              <div className="flex flex-col ml-4 items-start w-full">
                <span className="text-sm font-medium text-neutral-400" id='tarjeta_num'>N° de tarjeta</span>
                <input type="number" htmlFor='tarjeta_num' required className="peer w-4/6  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-500 focus:ring-violet-500 block rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"/>
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Porfavor introduzca su numero tarjeta.
                </p>
              </div>

              <div className="flex flex-col ml-4 items-start w-full">
                <span className="text-sm font-medium text-neutral-400" id='tarjeta_venc'>Fecha de vencimiento</span>
                <input type="date" htmlFor='tarjeta_venc' required className="peer w-4/6 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-500 focus:ring-violet-500 block rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"/>
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Porfavor introduzca la fecha de vencimiento de su tarjeta.
                </p>
              </div>

              <div className="flex flex-col ml-4 items-start w-full">
                <span className="text-sm font-medium text-neutral-400" id='cvc'>CVC</span>
                <input type="text" htmlFor='cvc' required className="peer w-4/6  px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-500 focus:ring-violet-500 block rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"/>
                <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Porfavor introduzca el codigo de su tarjeta.
                </p>
              </div>
            <div className='flex items-center mt-5 ml-4'><input type='checkbox' id='cbox' required className="text-white checked:border-violet-500"/><label className="text-neutral-400 ml-3" htmlFor='cbox'>Aceptas los terminos y condiciones</label></div>
          <div className='flex justify-end'>  
            <Link to={'/'} className='w-2/6 m-3'><button type='submit' className='h-10 w-full rounded-md bg-violet-500 '>Aceptar compra</button></Link>
          </div>
        </form>
    </div>
    <div className='flex flex-col bg-neutral-800 h-[36rem] w-auto rounded-md'>
      <div className='w-auto h-[30rem] flex flex-col items-center overflow-y-scroll'>
        {Item.map(p=><div className='flex flex-row gap-5 items-center' key={p.id}>
        
        <img className='w-72 rounded-md m-2' alt={p.title} src={p.img}></img>
        <div className='w-96 flex items-start flex-col text-violet-500 text-shadow-lg shadow-violet-800'>
          <p>Cancion: {p.title}</p>
          <p>Artistas: {p.artists}</p>
          <p>Genero/s: {p.estilo}</p>
        </div>
        <p className=' text-violet-500 text-shadow-lg shadow-violet-800'>Precio: ${p.precio}</p>
        </div>)}
      </div>
      <div className='bg-pink-500 h-24 rounded-b-md flex items-center justify-center text-white text-lg subpixel-antialiased'>Total a pagar: {Item.map(p=>p.precio).reduce((prev,curr)=> {return prev+curr},0)}</div>
    </div>
    </div>  
    </div>
  )
}

export default Checkout