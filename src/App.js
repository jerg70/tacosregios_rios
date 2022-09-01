import './styles/style.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer titulo="Tacos Regios" slogan="El sabor del Norte"/>
    </div>
  );
}

export default App;
