import { useState } from 'react'
import './App.css'

import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'






function App() {
  const [courses, setCourses] = useState([]);

  const handleSelectButton = course =>{

    const isExist = courses.find((item) => item.id == course.id);
    
    if(isExist){
      return alert('This course has already been selected')
    }
    else{
      const newCourses = [...courses, course];
      setCourses(newCourses)

    }
    
  }
  

  return (
    <>
      <Header></Header>

      <div className='flex gap-5'>
        <div className='w-4/5'>
          <Courses handleSelectButton = {handleSelectButton}></Courses>
        </div>
        <div className='w-1/5'>
          <Cart courses= {courses}></Cart>
          
          
         
        </div>
        
      </div>
      
      
    </>
  )
}

export default App
