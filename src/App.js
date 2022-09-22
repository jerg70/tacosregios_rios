import './styles/style.css';
import 'animate.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Nosotros from './components/Nosotros';
import Cart from './components/Cart';
import CartProvider from './context/CartContext'


function App() {
  return (
    <div className="App">
    <CartProvider>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer titulo="Tacos Regios" slogan="El sabor del Norte"/>} />
            <Route path='/categoria/:categoryId' element={<ItemListContainer titulo="Tacos Regios" slogan="El sabor del Norte"/>} />
            <Route path='/nosotros' element={<Nosotros/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/detalle/:itemId' element={<ItemDetailContainer />} />
          </Routes>
      </BrowserRouter>  
    </CartProvider>
    </div>
  );
}

export default App;