import React from 'react'
import Card from './Card'
import './Cards.css'

function Cards({courses}) {

const allCourses=[];

//it returns a list of all courses received from api response
let getCourses=()=>{
    //convert all the json data into one array
    Object.values(courses).forEach(array=>{
        array.forEach((courseData)=>{
            allCourses.push(courseData);    //insert each item into array
        })
    })
    return allCourses;
}

  return (
    <div className='cards'>
        {
            getCourses().map((course) => {
              return  <Card key={course.id} course={course}/>
            })
        }
    </div>
  )
}

export default Cards

