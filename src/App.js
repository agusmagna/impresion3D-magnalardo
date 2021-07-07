import './App.css';
// Components
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer.js'
// react-router-dom
import {BrowserRouter, Switch, Route} from 'react-router-dom'
// Estilo
import 'antd/dist/antd.css';


function App() {
  return (
    <div className="App">
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
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
