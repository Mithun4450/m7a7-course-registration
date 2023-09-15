import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import PropTypes from 'prop-types'

const Courses = ({handleSelectButton}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCourses(data))

    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                courses.map(course => 
                <Course 
                course= {course}
                key={course.id}
                handleSelectButton = {handleSelectButton}
                
                ></Course>)
            }
            
            
            
        </div>
    );
};

Courses.propTypes = {
    handleSelectButton: PropTypes.func
}
export default Courses;