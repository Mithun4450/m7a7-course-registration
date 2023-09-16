
import { BsBook } from 'react-icons/Bs';
import PropTypes from 'prop-types'

const Course = ({course, handleSelectButton}) => {
    // console.log(course)
    const {img, course_title, details, price, credit} = course;
    return (
       
       
        <div className="bg-base-100 shadow-xl p-2">
            <figure>
                <img src={img} alt="" className="rounded-xl w-full" />
            </figure>
            <div className="card-body ">
                <div className='h-10'>
                <h2 className="card-title text-[#1C1B1B] text-base font-semibold text-left">{course_title}</h2>
                </div>
                <p className="text-[#1c1b1b99] text-sm font-normal text-justify">{details}</p>
                <div className='flex text-sm text-justify mt-2 '>
                    <p>$ Price: {price}</p>
                    <div className='flex items-center'>
                    <BsBook/>
                    <p className='ml-2'>Credit:{credit}hr</p>
                    </div>
                    
                </div>
                <div className="card-actions mt-3">
                <button onClick={() => handleSelectButton(course)} 
                className="btn bg-[#2F80ED] text-white w-full capitalize">Select</button>
                </div>
            </div>
        </div>
        
       

           

    );
};

Course.propTypes ={
    course: PropTypes.object.isRequired,
    handleSelectButton: PropTypes.func
}
export default Course;