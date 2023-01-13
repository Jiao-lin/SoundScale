import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './pages/home/Header/NavBar';
import MainContainerHome from './pages/home/Main/MainContainerHome';
import { Electronica } from './pages/home/Header/Generos/Electronica';
import { Rkt } from './pages/home/Header/Generos/Rkt';
import { ItemDetailContainer} from './components/ItemDetailContainer';
import Checkout from './pages/auth/Checkout';



function App() {
  return (
    <> 
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <Routes>
      <Route path='/' element={<MainContainerHome/>}/>
      <Route path='/Generos/Electronica' element={<Electronica/>}/>
      <Route path='/Generos/Rkt' element={<Rkt/>}/>
      <Route path={`/:estilo/:id`} element={<ItemDetailContainer/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
