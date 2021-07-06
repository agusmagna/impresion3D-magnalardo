import './App.css';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js'


function App() {
  return (
    <div className="App">
    <NavBar />
    <ItemListContainer mensaje='Acá estará el catálogo próximamente'/>

    </div>
  );
}

export default App;
