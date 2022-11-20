import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import './App.css';

const App = () => {
  return(
    <>
      <Navbar />
      <ItemListContainer mensaje="Hola soy el ItemListContainer" />
    </>
  )
}

export default App;