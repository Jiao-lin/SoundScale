import './App.css';
import { NavBar } from './components/Header/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <div className="App">
    <NavBar/>
    <ItemListContainer nombre="usuario"/>

    </div>
    </>
  );
}

export default App;
