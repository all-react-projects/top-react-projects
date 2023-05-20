import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import './Card.css';
import { toast } from 'react-toastify';

function Card(props) {

    const course=props.course;
    const likedCourses=props.likedCourses;
    const setLikedCourses=props.setLikedCourses;

    function clickHandler(){
        if(likedCourses.includes(course.id)){   //already liked
            setLikedCourses((prev)=> prev.filter((cid)=>(cid!==course.id)))
            toast.warning('removed liked')
        }
        else{   //not liked already
            //insert karna hai ye course likeCourses me
            if(likedCourses.length===0){
                setLikedCourses([course.id])
            }
            else{
                //non-empty pehle se
                setLikedCourses((prev=> [...prev,course.id]));
            }
            toast.success('Liked successfully')
        }
    }

  return (
    <div className='card bg-dark'>
        <div>
            <img src={course.image.url} alt="" />
            <div className='like'>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id)?(<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
                    } 
                </button>
            </div>
            <div className='detail'>
                <p>{course.title}</p>
                <p>{course.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Card
