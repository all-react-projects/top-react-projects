import React from 'react'
import './Filter.css';

function Filter(props) {
  let filterData=props.filterData;
  let {category,setCategory}=props; //array destructuring

  function filterHandler(title){
    setCategory(title);
  }

  return (
   <div className='container'>
      <div className='filter-buttons'>
      {
        filterData.map((item)=>{
            return <button 
                      className= {category===item.title ? "highlight-btn":"normal-btn"}
                      key={item.id} 
                      onClick={()=>filterHandler(item.title)}
                      >
                {item.title}
            </button>
        })
      }
    </div>
   </div>
  )
}

export default Filter
