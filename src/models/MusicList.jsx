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
        console.log(data.results);
        setMusica(data.results);
        
    }

    return (
        <div className='grid grid-cols-2 gap-3'>
            {musica.map( p=> <MusicCard count={count} setcount={setcount} key={p.id}{...p}/>)}
        </div>
    );
}

export default MusicList;
