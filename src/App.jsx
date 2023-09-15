import { useState } from 'react'
import './App.css'

import Courses from './components/Courses/Courses'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'






function App() {
  const [courses, setCourses] = useState([]);
  const [credit, setCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  
  

  const handleSelectButton = course =>{

    const isExist = courses.find((item) => item.id == course.id);
    let credit = course.credit;
    
    if(isExist){
      return alert('This course has already been selected')
    }
    else{
      courses.forEach(course => credit = credit + course.credit);
      setCredit(credit);

      const newRemainingCredit = 20 - credit;
      setRemainingCredit(newRemainingCredit);

      if(remainingCredit < 0){
         return alert('You have used total credit hour.')
      }
      else{
        const newCourses = [...courses, course];
        setCourses(newCourses)

      }

      

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
          <Cart 
          courses = {courses}
          credit = {credit}
          remainingCredit = {remainingCredit}
          ></Cart>
          
          
         
        </div>
        
      </div>
      
      
    </>
  )
}

export default App
