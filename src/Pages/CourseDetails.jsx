import React from 'react'
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
    const prarams = useParams();
  return (
    <div>
        <h1>This is course {prarams.courseId}</h1>
    </div>
  )
}

export default CourseDetails