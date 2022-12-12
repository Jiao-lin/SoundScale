import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {ItemDetailContainer} from './components/ItemDetailContainer';
import { NavBar } from './pages/home/Header/NavBar';
import ItemListContainer from './pages/home/Main/ItemListContainer';
import MainContainerHome from './pages/home/Main/MainContainerHome';

function App() {
  const[count,setcount] = useState(0);
  return (
    <> 
    <BrowserRouter>
    <div className="App">
      <NavBar count={count}/>
      <Routes>
      <Route path='/' element={<MainContainerHome count={count} setcount={setcount}/>}/>
      <Route path='/Category/Electronica' element={<ItemListContainer count={count} setcount={setcount}/>}/>
      <Route path={`/item/:id`} element={<ItemDetailContainer count={count} setcount={setcount}/>}/>
      </Routes>
    
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
