import React from 'react'
import {FcLike} from 'react-icons/fc'
import './Card.css';

function Card({course}) {
    console.log(course);
  return (
    <div className='card bg-dark'>
        <div>
            <img src={course.image.url} alt="" />
            <div className='like'>
                <button>
                    <FcLike fontSize="1.75rem"/> 
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
