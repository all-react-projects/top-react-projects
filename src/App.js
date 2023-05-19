import './App.css';
import Navbar from "./Navbar";
import Filter from "./Filter";
import Cards from "./Cards";
import {data,filterData} from "./data";

function App() {
  
  return (
    <div className="App">
       <Navbar/>

       <Filter filterData={filterData}/>

       <Cards/>
    </div>
  );
}

export default App;
