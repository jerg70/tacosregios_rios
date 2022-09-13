import './styles/style.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo="Tacos Regios" slogan="El sabor del Norte"/>
      <div className="container">
        <div className="row">
          <ItemDetailContainer />
        </div>
      </div>
      
    </div>
  );
}

export default App;
