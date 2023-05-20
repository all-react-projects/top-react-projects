import './App.css';
import Navbar from "./Navbar";
import Filter from "./Filter";
import Cards from "./Cards";
import {apiUrl,filterData} from "./data";
import { toast} from "react-toastify";
import { useState,useEffect } from "react";
import Spinner from './Spinner';

function App() {
  
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);//access title All of filter button

  async function fetchData(){
    setLoading(true);     //loading=true if data is coming
    try {
      const res=await fetch(apiUrl);
      const respData=await res.json();
      //save data into variable
      
      setCourses(respData.data);
    } catch (error) {
      toast.error("error aa gai");
    }
    setLoading(false);  //loading=false if data fetched
  }


  useEffect(() => {
      fetchData();
  }, []);


  return (
    <div className="App container">
       <Navbar/>

       <div style={{backgroundColor:'#394867'}}>
          <Filter filterData={filterData} category={category} setCategory={setCategory}/> {/*use of category in filter component so passing it*/}
          
          {
            loading ? (<Spinner/>):(<Cards courses={courses} category={category}/>)  //loading=true then show spinner if false then show Card
          }
       </div>

    </div>
  );
}

export default App;
