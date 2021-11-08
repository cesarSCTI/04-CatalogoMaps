import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemList/ItemList';
import Item from './components/Item/Item';



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer getting=' hola, vengo desde el archivo app'/>
      
    </div>
  );
}

export default App;
