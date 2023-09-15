import React from 'react';
import { BsBook } from 'react-icons/Bs';

const Course = ({course}) => {
    console.log(course)
    const {img, course_title, details, price, credit} = course;
    return (
       
       
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="" className="rounded-xl w-full" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title text-[#1C1B1B] text-base font-semibold text-justify">{course_title}</h2>
                    <p className="text-[#1c1b1b99] text-sm font-normal text-justify">{details}</p>
                    <div className='flex text-sm text-justify '>
                        <p>$ Price: {price}</p>
                        <div className='flex items-center'>
                        <BsBook/>
                        <p className='ml-2'>Credit:{credit}hr</p>
                        </div>
                        
                    </div>
                    <div className="card-actions">
                    <button className="btn bg-[#2F80ED] text-white w-full capitalize">Select</button>
                    </div>
                </div>
            </div>
        
       

           

    );
};

export default Course;