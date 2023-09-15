
import PropTypes from 'prop-types'


const CourseNames = ({courses}) => {

    
    return (
        
        <div>
            
            {
                courses.map((course, idx) => <li className='text-left text-sm' key={idx} >{course.course_title}</li>)
               

            }
            
            
        </div>
    );
};

CourseNames.propTypes = {
    courses: PropTypes.array
}

export default CourseNames;