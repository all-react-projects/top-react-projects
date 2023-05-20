import React, { useState } from 'react'
import Card from './Card'
import './Cards.css'

function Cards(props) {

  const [likedCourses, setLikedCourses] = useState([]);
  let courses=props.courses; //courses has 4 array
  const category=props.category;

const allCourses=[];

//it returns a list of all courses received from api response
let getCourses=()=>{

    if(category==='All')
    {
            //convert all the json data into one array
          Object.values(courses).forEach(array=>{
            array.forEach((courseData)=>{
                allCourses.push(courseData);    //insert each item into array
            })
        })
        return allCourses;
    }
    else{
      //main sirf specific category ka data pass/array krunga
      return courses[category];   
    }
}

  return (
    <div className='cards'>
        {
            getCourses().map((course) => {
              return  <Card 
                        key={course.id} 
                        course={course} 
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses}/>
            })
        }
    </div>
  )
}

export default Cards

