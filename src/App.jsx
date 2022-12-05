import { useState } from 'react';
import './App.css';
import { NavBar } from './pages/home/Header/NavBar';
//!import ItemListContainer from './pages/home/ItemListContainer/ItemListContainer';
import MainContainer from './pages/home/Main/MainContainer';

function App() {
  const[count,setcount] = useState(0);
  return (
    <>
    <div className="App">
    <NavBar count={count}/>
    <MainContainer count={count} setcount={setcount}/>
    </div>
    </>
  );
}

export default App;
