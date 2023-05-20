import React from 'react'
import './Filter.css';

function Filter(props) {
  let filterData=props.filterData;
  return (
   <div className='container'>
      <div className='filter-buttons'>
      {
        filterData.map((item)=>{
            return <button key={item.id}>
                {item.title}
            </button>
        })
      }
    </div>
   </div>
  )
}

export default Filter
