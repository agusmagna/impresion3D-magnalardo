import './App.css';
import {useState} from 'react'
// Components
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
import Cart from './components/Cart.js'
// react-router-dom
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// Estilo
import 'antd/dist/antd.css';
// Contextos
import {CartContext} from './components/CartContext.js'


function App() {
  const [cartComponents, setCartComponents] = useState([])
  return (
    <div className="App">
    <CartContext.Provider value = {{cartComponents, setCartComponents}}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact path="/category/:categoryid">
            <ItemListContainer/>
          </Route>
          <Route exact path="/item/:itemid">
            <ItemDetailContainer/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
    </div>
  );
}

export default App;
