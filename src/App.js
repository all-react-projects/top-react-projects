import './App.css';
import Navbar from "./Navbar";
import Filter from "./Filter";
import Cards from "./Cards";

function App() {
  return (
    <div className="App">
       <Navbar/>

       <Filter/>

       <Cards/>
    </div>
  );
}

export default App;
