import React from 'react'

function Filter(props) {
  let filterData=props.filterData;
  return (
    <div>
       {
        filterData.map((item)=>{
            return <button key={item.id}>
                {item.title}
            </button>
        })
       }
    </div>
  )
}

export default Filter
