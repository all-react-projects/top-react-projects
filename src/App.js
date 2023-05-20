import './App.css';
import Navbar from "./Navbar";
import Filter from "./Filter";
import Cards from "./Cards";
import {apiUrl,filterData} from "./data";
import { toast} from "react-toastify";
import { useState,useEffect } from "react";
import Spinner from './Spinner';

function App() {
  
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  
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
          <Filter filterData={filterData}/>
          
          {
            loading ? (<Spinner/>):(<Cards courses={courses}/>)  //loading=true then show spinner if false then show Card
          }
       </div>

    </div>
  );
}

export default App;
