import React, { useEffect, useState } from 'react';
import MusicCard from '../components/musicCard';

const MusicList = ({count,setcount}) => {

    const [musica,setMusica]=useState([]);

    useEffect(() => 
    {getMusica()
    }, []);

    const getMusica = async()=>{
        const URL = ('https://rickandmortyapi.com/api/character');
        const response = await fetch(URL);
        const data = await response.json();
        setMusica(data.results);
        
    }
    return (
        <div className='grid grid-cols-1 gap-3 justify-items-center'>
            {musica.map( p=> <MusicCard count={count} setcount={setcount} id={p.id} key={p.id}{...p}/>)}
        </div>
    );
}

export default MusicList;
